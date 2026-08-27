/**
 * TRAVEL GOOGLY — CORE APPLICATION JAVASCRIPT
 * Pure Vanilla JS • No Frameworks • No Build Step • Runs on file://
 *
 * Controls:
 * - Signature Inquiry Modal (auto-open, focus trapping, validation, live preview, normalisation)
 * - Navigation & Mobile Drawer
 * - Dynamic Package Rendering & Category Filters
 * - Destination Mosaic & Pre-selection
 * - Interactive Review Slider (drag, snap, auto-advance, hover pause)
 * - Gallery Lightbox (keyboard navigation, focus restore)
 * - Dynamic 12-Month Generator
 * - Scroll Header & Back-To-Top
 * - Package Detail Page Renderer
 */

(function () {
  'use strict';

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. MONTH GENERATOR UTILITY
     ========================================================================== */
  function populateMonthSelects() {
    const monthSelects = document.querySelectorAll('.js-month-select');
    if (!monthSelects.length) return;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const options = ['<option value="" disabled selected>Select travel month</option>'];

    for (let i = 0; i < 12; i++) {
      const monthIdx = (currentMonth + i) % 12;
      const year = currentYear + Math.floor((currentMonth + i) / 12);
      const val = `${months[monthIdx]} ${year}`;
      options.push(`<option value="${val}">${val}</option>`);
    }
    options.push('<option value="Not decided yet">Not decided yet</option>');

    const html = options.join('');
    monthSelects.forEach(select => {
      select.innerHTML = html;
    });
  }

  /* ==========================================================================
     2. SIGNATURE INQUIRY POPUP MODAL
     ========================================================================== */
  const inquiryModal = document.getElementById('inquiry-modal');
  const inquiryForm = document.getElementById('inquiry-form');
  const livePreviewContent = document.getElementById('live-preview-content');
  const previewToggleBtn = document.getElementById('preview-toggle-btn');
  const charCounter = document.getElementById('inquiry-char-counter');
  let lastFocusedElement = null;

  function getInquiryFormData() {
    if (!inquiryForm) return {};
    return {
      name: inquiryForm.querySelector('#inq-name')?.value.trim() || '',
      mobile: inquiryForm.querySelector('#inq-mobile')?.value.trim() || '',
      destination: inquiryForm.querySelector('#inq-destination')?.value || '',
      travellers: inquiryForm.querySelector('#inq-travellers')?.value || '2',
      month: inquiryForm.querySelector('#inq-month')?.value || '',
      budget: inquiryForm.querySelector('#inq-budget')?.value || '',
      notes: inquiryForm.querySelector('#inq-notes')?.value.trim() || '',
      offers: inquiryForm.querySelector('#inq-offers')?.checked ?? true
    };
  }

  function updateLivePreview() {
    if (!livePreviewContent) return;
    const data = getInquiryFormData();
    
    // Attempt to normalise mobile for clean preview if entered
    const norm = normaliseIndianMobile(data.mobile);
    const displayMobile = norm || data.mobile || '—';

    const previewData = { ...data, mobile: displayMobile };
    const previewMsg = buildInquiryMessage(previewData);
    livePreviewContent.textContent = previewMsg;
  }

  function openInquiryModal(prefillData = {}) {
    if (!inquiryModal) return;

    lastFocusedElement = document.activeElement;

    // Apply prefill data if provided
    if (inquiryForm) {
      if (prefillData.destination) {
        const destSelect = inquiryForm.querySelector('#inq-destination');
        if (destSelect) {
          // Check if destination exists in options, else select or add
          destSelect.value = prefillData.destination;
        }
      }
      if (prefillData.month) {
        const monthSelect = inquiryForm.querySelector('#inq-month');
        if (monthSelect) monthSelect.value = prefillData.month;
      }
      if (prefillData.travellers) {
        const travInput = inquiryForm.querySelector('#inq-travellers');
        if (travInput) travInput.value = prefillData.travellers;
      }
    }

    updateLivePreview();

    // Lock html scroll
    document.documentElement.classList.add('modal-open');
    inquiryModal.classList.add('is-open');
    inquiryModal.setAttribute('aria-hidden', 'false');

    // Focus first input field
    const firstInput = inquiryModal.querySelector('input:not([type="hidden"]), select, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), prefersReducedMotion ? 0 : 150);
    }
  }

  function closeInquiryModal() {
    if (!inquiryModal) return;

    inquiryModal.classList.remove('is-open');
    inquiryModal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-open');

    // Set flag in session storage
    try {
      sessionStorage.setItem('tg_inquiry_seen', '1');
    } catch (e) {
      // Ignore in strict storage environments
    }

    // Restore focus
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Trap focus inside modal
  function handleModalKeydown(e) {
    if (!inquiryModal || !inquiryModal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeInquiryModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = inquiryModal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  }

  // Field validation helpers
  function validateField(input) {
    if (!input) return true;
    const id = input.id;
    const val = input.value.trim();
    let isValid = true;
    let errorMsg = '';

    if (id === 'inq-name') {
      if (!val || val.length < 2 || !/^[a-zA-Z\s.]{2,}$/.test(val)) {
        isValid = false;
        errorMsg = 'Please enter a valid full name (min 2 letters).';
      }
    } else if (id === 'inq-mobile') {
      const norm = normaliseIndianMobile(val);
      if (!norm) {
        isValid = false;
        errorMsg = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
      }
    } else if (id === 'inq-destination') {
      if (!val) {
        isValid = false;
        errorMsg = 'Please select a destination.';
      }
    } else if (id === 'inq-travellers') {
      const num = parseInt(val, 10);
      if (isNaN(num) || num < 1 || num > 30) {
        isValid = false;
        errorMsg = 'Please specify 1 to 30 travellers.';
      }
    } else if (id === 'inq-month') {
      if (!val) {
        isValid = false;
        errorMsg = 'Please select your preferred travel month.';
      }
    } else if (id === 'inq-budget') {
      if (!val) {
        isValid = false;
        errorMsg = 'Please select an estimated budget per person.';
      }
    }

    const group = input.closest('.form-group');
    const errorSpan = group ? group.querySelector('.form-error') : null;

    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
      if (errorSpan) errorSpan.textContent = errorMsg;
      if (group) group.classList.add('has-error');
    } else {
      input.removeAttribute('aria-invalid');
      if (group) group.classList.remove('has-error');
    }

    return isValid;
  }

  function setupInquiryModal() {
    if (!inquiryModal || !inquiryForm) return;

    // Auto-open 1.2s after load if not already seen in session
    const seen = sessionStorage.getItem('tg_inquiry_seen');
    if (!seen) {
      setTimeout(() => {
        openInquiryModal();
      }, 1200);
    }

    // Modal Close Buttons
    const closeBtn = document.getElementById('inquiry-close-btn');
    const maybeLaterBtn = document.getElementById('inquiry-maybe-later');

    if (closeBtn) closeBtn.addEventListener('click', closeInquiryModal);
    if (maybeLaterBtn) maybeLaterBtn.addEventListener('click', closeInquiryModal);

    // Backdrop click close
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) {
        closeInquiryModal();
      }
    });

    // Global Keydown for Esc & Tab trap
    document.addEventListener('keydown', handleModalKeydown);

    // Live counter and preview on input
    inquiryForm.addEventListener('input', (e) => {
      if (e.target.id === 'inq-notes' && charCounter) {
        charCounter.textContent = `${e.target.value.length}/300 chars`;
      }
      updateLivePreview();
    });

    inquiryForm.addEventListener('change', updateLivePreview);

    // Blur validation on inputs
    const fieldsToValidate = inquiryForm.querySelectorAll('#inq-name, #inq-mobile, #inq-destination, #inq-travellers, #inq-month, #inq-budget');
    fieldsToValidate.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
    });

    // Toggle live preview on mobile
    if (previewToggleBtn && livePreviewContent) {
      previewToggleBtn.addEventListener('click', () => {
        const isCollapsed = livePreviewContent.classList.toggle('is-collapsed');
        previewToggleBtn.textContent = isCollapsed ? 'Preview message ▼' : 'Hide preview ▲';
      });
    }

    // Submit handler
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let allValid = true;
      let firstInvalid = null;

      fieldsToValidate.forEach(field => {
        const valid = validateField(field);
        if (!valid) {
          allValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!allValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Valid submission
      const rawData = getInquiryFormData();
      const normalisedMobile = normaliseIndianMobile(rawData.mobile);
      const submitData = { ...rawData, mobile: normalisedMobile };

      const messageText = buildInquiryMessage(submitData);
      const waUrl = buildWaUrl(messageText);

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank', 'noopener');

      // Set session flag
      try {
        sessionStorage.setItem('tg_inquiry_seen', '1');
      } catch (err) {}

      // Swap modal content to Success State
      const modalBody = inquiryModal.querySelector('.modal-body');
      const modalFooter = inquiryModal.querySelector('.modal-footer');
      if (modalFooter) modalFooter.style.display = 'none';

      if (modalBody) {
        modalBody.innerHTML = `
          <div class="modal-success">
            <div class="modal-success__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="modal-success__title">Opening WhatsApp…</h3>
            <p class="modal-success__msg">Thank you, <strong>${submitData.name}</strong>! Your customized tour inquiry is being transferred directly to our team.</p>
            <a href="${waUrl}" target="_blank" rel="noopener" class="modal-success__fallback">WhatsApp didn't open? Tap here</a>
          </div>
        `;
      }

      // Auto close after 3 seconds
      setTimeout(() => {
        closeInquiryModal();
      }, 3000);
    });

    // Reopen modal triggers throughout site
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.btn-open-inquiry, [data-inquiry-trigger]');
      if (trigger) {
        e.preventDefault();
        const prefillDest = trigger.getAttribute('data-prefill-dest') || '';
        openInquiryModal({ destination: prefillDest });
      }
    });
  }

  /* ==========================================================================
     3. HEADER & MOBILE DRAWER
     ========================================================================== */
  function setupHeaderAndDrawer() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    // Sticky header background shift
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }, { passive: true });
    }

    // Mobile Drawer Controls
    if (menuToggle && mobileDrawer) {
      const closeDrawer = () => {
        mobileDrawer.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('modal-open');
      };

      menuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) {
          document.documentElement.classList.add('modal-open');
        } else {
          document.documentElement.classList.remove('modal-open');
        }
      });

      // Close drawer on link click
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });

      // Close drawer on backdrop click
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) closeDrawer();
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeDrawer();
        }
      });
    }
  }

  /* ==========================================================================
     4. HERO FINDER WIDGET
     ========================================================================== */
  function setupHeroFinder() {
    const heroFinder = document.getElementById('hero-finder-form');
    if (!heroFinder) return;

    heroFinder.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = heroFinder.querySelector('#finder-destination')?.value || '';
      const month = heroFinder.querySelector('#finder-month')?.value || '';
      const travellers = heroFinder.querySelector('#finder-travellers')?.value || '2';

      openInquiryModal({
        destination: dest,
        month: month,
        travellers: travellers
      });
    });
  }

  /* ==========================================================================
     5. CATEGORIES RENDERING
     ========================================================================== */
  function renderCategories() {
    const container = document.getElementById('categories-grid');
    if (!container || typeof CATEGORIES === 'undefined') return;

    container.innerHTML = CATEGORIES.map(cat => `
      <div class="category-card" data-category="${cat.id}" tabindex="0" role="button" aria-label="Explore ${cat.name}">
        <div>
          <div class="category-card__icon" aria-hidden="true">
            ${cat.iconSvg}
          </div>
          <h3 class="category-card__title" style="margin-top: 20px; font-size: 1.25rem;">${cat.name}</h3>
          <p class="category-card__desc" style="margin-top: 8px; font-size: 0.9375rem; line-height: 1.6;">${cat.description}</p>
        </div>
        <span class="category-card__count" style="font-size: 0.875rem; font-weight: 600; margin-top: 16px;">${cat.count} →</span>
      </div>
    `).join('');

    // Click on category card activates filter and scrolls to packages
    container.querySelectorAll('.category-card').forEach(card => {
      const handleCategoryClick = () => {
        const catId = card.getAttribute('data-category');
        const filterChip = document.querySelector(`.chip[data-filter="${catId}"]`);
        if (filterChip) {
          filterChip.click();
        } else {
          renderPackages(catId);
        }
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
          packagesSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      card.addEventListener('click', handleCategoryClick);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCategoryClick();
        }
      });
    });
  }

  /* ==========================================================================
     6. FEATURED PACKAGES & FILTERING
     ========================================================================== */
  function renderPackages(filterCategory = 'all') {
    const grid = document.getElementById('packages-grid');
    const liveCount = document.getElementById('filter-live-count');
    if (!grid || typeof PACKAGES === 'undefined') return;

    const filtered = filterCategory === 'all'
      ? PACKAGES
      : PACKAGES.filter(p => p.category === filterCategory);

    if (liveCount) {
      liveCount.textContent = `Showing ${filtered.length} package${filtered.length === 1 ? '' : 's'}`;
    }

    grid.innerHTML = filtered.map(pkg => {
      const waBookUrl = buildPackageBookingUrl(pkg.name, `${pkg.nights}N/${pkg.days}D`, pkg.price);
      return `
        <article class="package-card reveal">
          <div class="package-card__media">
            <img src="${pkg.image}" alt="${pkg.name}" class="package-card__img" loading="lazy" decoding="async">
            <span class="package-card__tag">${pkg.category}</span>
            <span class="package-card__duration">${pkg.nights}N / ${pkg.days}D</span>
          </div>
          <div class="package-card__body">
            <div>
              <h3 class="package-card__title">${pkg.name}</h3>
              <p class="package-card__route">${pkg.route}</p>
              <div class="package-card__inclusions">
                <span class="inclusion-pill">Hotels</span>
                <span class="inclusion-pill">Cabs</span>
                <span class="inclusion-pill">Sightseeing</span>
              </div>
            </div>
            <div>
              <div class="package-card__price-row">
                <div>
                  <span class="package-card__starts-label">Starting from</span>
                  <span class="package-card__price">₹${pkg.price}*</span>
                </div>
                <span class="package-card__per-person">/ person</span>
              </div>
              <div class="package-card__actions" style="margin-top: 16px;">
                <a href="package.html?slug=${pkg.slug}" class="btn btn--outline btn--sm">View details</a>
                <a href="${waBookUrl}" target="_blank" rel="noopener" class="btn btn--wa btn--sm" aria-label="Book ${pkg.name} on WhatsApp">Book on WhatsApp</a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-observe newly rendered cards for scroll reveal
    observeReveals();
  }

  function setupPackageFilters() {
    const filterContainer = document.getElementById('filter-chips');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      filterContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const cat = chip.getAttribute('data-filter') || 'all';
      renderPackages(cat);
    });

    // Global filter trigger handling (from navbar dropdowns or mobile drawer)
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-filter-trigger]');
      if (trigger) {
        const cat = trigger.getAttribute('data-filter-trigger');
        const filterChip = document.querySelector(`.chip[data-filter="${cat}"]`);
        if (filterChip) {
          filterChip.click();
          const packagesSection = document.getElementById('packages');
          if (packagesSection) {
            packagesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // Close mobile drawer if open
        const mobileDrawer = document.getElementById('mobile-drawer');
        const menuToggle = document.getElementById('menu-toggle');
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
          mobileDrawer.classList.remove('is-open');
          if (menuToggle) menuToggle.classList.remove('is-open');
        }
      }
    });
  }

  /* ==========================================================================
     7. DESTINATIONS MOSAIC
     ========================================================================== */
  function renderDestinations(type = 'domestic') {
    const container = document.getElementById('destinations-mosaic');
    if (!container || typeof DESTINATIONS === 'undefined') return;

    const list = DESTINATIONS[type] || DESTINATIONS.domestic;

    container.innerHTML = list.map(item => {
      const modifier = item.isTall ? 'dest-tile--tall' : (item.isWide ? 'dest-tile--wide' : '');
      return `
        <div class="dest-tile ${modifier} reveal" data-inquiry-trigger data-prefill-dest="${item.name}" tabindex="0" role="button" aria-label="Plan trip to ${item.name}">
          <img src="${item.image}" alt="${item.name}" class="dest-tile__img" loading="lazy" decoding="async">
          <div class="dest-tile__scrim"></div>
          <div class="dest-tile__content">
            <h3 class="dest-tile__name">${item.name}</h3>
            <span class="dest-tile__price">starts from ${item.price}</span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.dest-tile').forEach(tile => {
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          tile.click();
        }
      });
    });

    observeReveals();
  }

  function setupDestinationTabs() {
    const tabDomestic = document.getElementById('dest-tab-domestic');
    const tabInternational = document.getElementById('dest-tab-international');

    if (!tabDomestic || !tabInternational) return;

    tabDomestic.addEventListener('click', () => {
      tabDomestic.classList.add('is-active');
      tabInternational.classList.remove('is-active');
      renderDestinations('domestic');
    });

    tabInternational.addEventListener('click', () => {
      tabInternational.classList.add('is-active');
      tabDomestic.classList.remove('is-active');
      renderDestinations('international');
    });
  }

  /* ==========================================================================
     8. REVIEWS SLIDER
     ========================================================================== */
  function renderReviews() {
    const slider = document.getElementById('reviews-slider');
    if (!slider || typeof TESTIMONIALS === 'undefined') return;

    slider.innerHTML = TESTIMONIALS.map(t => `
      <div class="review-card">
        <div>
          <div class="review-card__stars" aria-label="${t.rating} out of 5 stars">★★★★★</div>
          <blockquote class="review-card__text" style="margin-top: 12px;">"${t.text}"</blockquote>
        </div>
        <div class="review-card__author">
          <div class="review-card__avatar" aria-hidden="true">${t.initials}</div>
          <div>
            <div class="review-card__name">${t.name}</div>
            <div class="review-card__trip">${t.trip} · ${t.city}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function setupReviewsSlider() {
    const slider = document.getElementById('reviews-slider');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');
    if (!slider) return;

    let autoTimer = null;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const scrollStep = () => {
      const card = slider.querySelector('.review-card');
      return card ? card.offsetWidth + 24 : 320;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollStep(), behavior: 'smooth' });
      });
    }

    // Auto-advance every 6s
    const startAutoAdvance = () => {
      stopAutoAdvance();
      autoTimer = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: scrollStep(), behavior: 'smooth' });
        }
      }, 6000);
    };

    const stopAutoAdvance = () => {
      if (autoTimer) clearInterval(autoTimer);
    };

    startAutoAdvance();

    // Pause on hover and focus
    slider.addEventListener('mouseenter', stopAutoAdvance);
    slider.addEventListener('mouseleave', startAutoAdvance);
    slider.addEventListener('focusin', stopAutoAdvance);
    slider.addEventListener('focusout', startAutoAdvance);

    // Mouse Drag support
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  /* ==========================================================================
     9. GALLERY & LIGHTBOX
     ========================================================================== */
  let currentLightboxIdx = 0;

  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid || typeof GALLERY === 'undefined') return;

    grid.innerHTML = GALLERY.map((item, idx) => `
      <div class="gallery-item reveal" data-gallery-idx="${idx}" tabindex="0" role="button" aria-label="View photo: ${item.caption}">
        <img src="${item.image}" alt="${item.caption}" loading="lazy" decoding="async">
        <div class="gallery-item__overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
          </svg>
        </div>
      </div>
    `).join('');

    observeReveals();
  }

  function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || typeof GALLERY === 'undefined') return;

    const imgEl = lightbox.querySelector('.lightbox__img');
    const captionEl = lightbox.querySelector('.lightbox__caption');
    const counterEl = lightbox.querySelector('.lightbox__counter');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');
    let lastGalleryTrigger = null;

    const showSlide = (idx) => {
      currentLightboxIdx = (idx + GALLERY.length) % GALLERY.length;
      const item = GALLERY[currentLightboxIdx];
      if (imgEl) {
        imgEl.src = item.image;
        imgEl.alt = item.caption;
      }
      if (captionEl) captionEl.textContent = item.caption;
      if (counterEl) counterEl.textContent = `${currentLightboxIdx + 1} of ${GALLERY.length}`;
    };

    const openLightbox = (idx, triggerEl) => {
      lastGalleryTrigger = triggerEl;
      showSlide(idx);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('modal-open');
      if (closeBtn) closeBtn.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('modal-open');
      if (lastGalleryTrigger && typeof lastGalleryTrigger.focus === 'function') {
        lastGalleryTrigger.focus();
      }
    };

    document.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (item) {
        const idx = parseInt(item.getAttribute('data-gallery-idx'), 10);
        openLightbox(isNaN(idx) ? 0 : idx, item);
      }
    });

    document.addEventListener('keydown', (e) => {
      const item = e.target.closest('.gallery-item');
      if (item && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        const idx = parseInt(item.getAttribute('data-gallery-idx'), 10);
        openLightbox(isNaN(idx) ? 0 : idx, item);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentLightboxIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentLightboxIdx + 1));

    // Backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Lightbox keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showSlide(currentLightboxIdx - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showSlide(currentLightboxIdx + 1);
      }
    });
  }

  /* ==========================================================================
     10. FAQ ACCORDION
     ========================================================================== */
  function renderFaqs() {
    const list = document.getElementById('faq-list');
    if (!list || typeof FAQS === 'undefined') return;

    list.innerHTML = FAQS.map(faq => `
      <details class="faq-item">
        <summary class="faq-summary">${faq.question}</summary>
        <div class="faq-answer">${faq.answer}</div>
      </details>
    `).join('');
  }

  /* ==========================================================================
     11. CONTACT SECTION FORM
     ========================================================================== */
  function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = contactForm.querySelector('#contact-name');
      const mobileInput = contactForm.querySelector('#contact-mobile');
      const msgInput = contactForm.querySelector('#contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const mobile = mobileInput ? mobileInput.value.trim() : '';
      const message = msgInput ? msgInput.value.trim() : '';

      let valid = true;

      // Validate name
      if (!name || name.length < 2) {
        if (nameInput) {
          nameInput.setAttribute('aria-invalid', 'true');
          nameInput.focus();
        }
        valid = false;
        return;
      } else if (nameInput) {
        nameInput.removeAttribute('aria-invalid');
      }

      // Validate mobile
      const normMobile = normaliseIndianMobile(mobile);
      if (!normMobile) {
        if (mobileInput) {
          mobileInput.setAttribute('aria-invalid', 'true');
          mobileInput.focus();
        }
        valid = false;
        return;
      } else if (mobileInput) {
        mobileInput.removeAttribute('aria-invalid');
      }

      if (valid) {
        const waUrl = buildContactMessageUrl({
          name: name,
          mobile: normMobile,
          message: message
        });
        window.open(waUrl, '_blank', 'noopener');
        contactForm.reset();
      }
    });
  }

  /* ==========================================================================
     12. FLOATING BUTTONS & BACK TO TOP
     ========================================================================== */
  function setupFloatingActions() {
    const floatingWaBtn = document.getElementById('floating-wa-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (floatingWaBtn) {
      floatingWaBtn.href = buildDefaultChatUrl();
      // Stop pulse animation after 3 cycles (approx 6 seconds)
      setTimeout(() => {
        floatingWaBtn.classList.remove('has-pulse');
      }, 6000);
    }

    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      }, { passive: true });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ==========================================================================
     13. INTERSECTION OBSERVER SCROLL REVEALS
     ========================================================================== */
  function observeReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, index * 60);
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     14. PACKAGE DETAIL PAGE RENDERER (package.html)
     ========================================================================== */
  function renderPackageDetailPage() {
    const container = document.getElementById('package-detail-content');
    if (!container || typeof PACKAGES === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    const pkg = PACKAGES.find(p => p.slug === slug);

    if (!pkg) {
      // Empty state
      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size: 3rem; color: var(--accent);">✦</div>
          <h2>We couldn't find that package</h2>
          <p>The package you are looking for might have been moved or updated. Explore our full collection of packages or ask our team directly on WhatsApp.</p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-top: 16px;">
            <a href="index.html#packages" class="btn btn--primary">View all packages</a>
            <a href="${buildDefaultChatUrl()}" target="_blank" rel="noopener" class="btn btn--wa">Chat on WhatsApp</a>
          </div>
        </div>
      `;
      return;
    }

    // Update document title and canonical
    document.title = `${pkg.name} (${pkg.nights}N/${pkg.days}D) — Travel Googly`;

    const waBookUrl = buildPackageBookingUrl(pkg.name, `${pkg.nights}N/${pkg.days}D`, pkg.price);

    // Related packages (3 excluding current)
    const related = PACKAGES.filter(p => p.slug !== pkg.slug && (p.category === pkg.category || true)).slice(0, 3);

    container.innerHTML = `
      <header class="package-header">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-separator">/</span>
            <a href="index.html#packages">Packages</a>
            <span class="breadcrumb-separator">/</span>
            <span aria-current="page">${pkg.name}</span>
          </nav>
          <div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 12px; margin-bottom: 8px;">
            <span class="chip is-active" style="padding: 4px 12px; font-size: 0.75rem;">${pkg.category.toUpperCase()}</span>
            <span class="font-mono" style="font-size: 0.875rem; color: var(--ink-soft);">${pkg.nights} NIGHTS / ${pkg.days} DAYS</span>
          </div>
          <h1 style="margin-bottom: 12px;">${pkg.name}</h1>
          <p style="font-size: 1.0625rem; color: var(--ink-soft); max-width: 760px;">Route: ${pkg.route}</p>
        </div>
      </header>

      <main class="container">
        <div class="package-detail-grid">
          <!-- Left Column: Details -->
          <div class="package-main-col">
            <!-- Gallery -->
            <div class="package-gallery-main">
              <img id="pkg-main-img" src="${pkg.gallery[0] || pkg.image}" alt="${pkg.name}" loading="eager">
            </div>
            <div class="package-gallery-thumbs">
              ${pkg.gallery.map((img, i) => `
                <div class="package-thumb ${i === 0 ? 'is-active' : ''}" data-thumb-src="${img}" tabindex="0" role="button" aria-label="View photo ${i + 1}">
                  <img src="${img}" alt="${pkg.name} thumbnail ${i + 1}" loading="lazy">
                </div>
              `).join('')}
            </div>

            <!-- Overview & Highlights -->
            <section class="section-block" style="margin-bottom: 48px;">
              <h2>Trip Overview</h2>
              <p style="margin-top: 16px; font-size: 1.0625rem; line-height: 1.7;">${pkg.summary}</p>
              <div style="margin-top: 24px; background: var(--surface-alt); border: 1px solid var(--line); border-radius: 10px; padding: 24px;">
                <h4 style="margin-bottom: 16px;">Key Highlights</h4>
                <ul class="checklist">
                  ${pkg.highlights.map(h => `<li class="checklist-item"><span class="check-icon">✓</span> <span>${h}</span></li>`).join('')}
                </ul>
              </div>
            </section>

            <!-- Day by Day Itinerary -->
            <section class="section-block" style="margin-bottom: 48px;">
              <h2>Day-by-Day Itinerary</h2>
              <div class="itinerary-timeline">
                ${pkg.itinerary.map(item => `
                  <div class="itinerary-item">
                    <div class="itinerary-day-badge">D${item.day}</div>
                    <h3 class="itinerary-item__title">Day ${item.day}: ${item.title}</h3>
                    <p class="itinerary-item__detail">${item.detail}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Inclusions & Exclusions -->
            <section class="section-block" style="margin-bottom: 48px;">
              <h2>Inclusions & Exclusions</h2>
              <div class="incl-excl-grid">
                <div class="incl-box">
                  <h4>What's Included</h4>
                  <ul class="checklist">
                    ${pkg.inclusions.map(inc => `<li class="checklist-item"><span class="check-icon">✓</span> <span>${inc}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="excl-box">
                  <h4>What's Excluded</h4>
                  <ul class="checklist">
                    ${pkg.exclusions.map(exc => `<li class="checklist-item"><span class="cross-icon">✕</span> <span>${exc}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </section>

            <!-- Things to Carry & Cancellation -->
            <section class="section-block" style="margin-bottom: 48px;">
              <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                <div style="border: 1px solid var(--line); border-radius: 10px; padding: 24px; background-color: var(--surface);">
                  <h4 style="margin-bottom: 12px;">Things to Carry</h4>
                  <ul class="checklist">
                    ${pkg.thingsToCarry.map(item => `<li class="checklist-item"><span style="color: var(--accent);">✦</span> <span>${item}</span></li>`).join('')}
                  </ul>
                </div>
                <div style="border: 1px solid var(--line); border-radius: 10px; padding: 24px; background-color: var(--surface-alt);">
                  <h4 style="margin-bottom: 12px;">Cancellation Policy</h4>
                  <p style="font-size: 0.9375rem;">${pkg.cancellationPolicy}</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Right Column: Sticky Booking Widget -->
          <aside class="package-sidebar">
            <div class="sidebar-card">
              <div>
                <span class="font-mono" style="font-size: 0.75rem; color: var(--ink-soft); text-transform: uppercase;">STARTING FROM</span>
                <div style="display: flex; align-items: baseline; gap: 8px; margin-top: 4px;">
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: var(--ink);">₹${pkg.price}*</span>
                  <span style="font-size: 0.8125rem; color: var(--ink-soft);">/ person</span>
                </div>
                <span style="font-size: 0.75rem; color: var(--accent); font-weight: 500; display: block; margin-top: 4px;">*Estimated starting price (customisable quote, not fixed)</span>
              </div>

              <div style="padding-top: 16px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 12px;">
                <a href="${waBookUrl}" target="_blank" rel="noopener" class="btn btn--wa btn--full" style="font-size: 1rem;">
                  Book on WhatsApp
                </a>
                <button type="button" class="btn btn--primary btn--full btn-open-inquiry" data-prefill-dest="${pkg.name}">
                  Customise this trip
                </button>
              </div>

              <div style="background-color: var(--surface-alt); border-radius: 8px; padding: 16px; font-size: 0.8125rem; color: var(--ink-soft); display: flex; flex-direction: column; gap: 8px;">
                <div><strong>Best Time to Visit:</strong> ${pkg.bestTime}</div>
                <div><strong>Response Time:</strong> Quotes shared on WhatsApp within 2 hours</div>
                <div><strong>Payment:</strong> Pay 25% to confirm, balance before travel</div>
              </div>
            </div>
          </aside>
        </div>

        <!-- Mobile Sticky Bottom Action Bar -->
        <div class="mobile-sticky-bar">
          <div>
            <span style="font-size: 0.6875rem; color: var(--ink-soft); display: block;">Starting from</span>
            <div style="display: flex; align-items: baseline; gap: 4px;">
              <span class="font-mono" style="font-size: 1.125rem; font-weight: 700;">₹${pkg.price}*</span>
              <span style="font-size: 0.6875rem; color: var(--ink-soft);">/ person</span>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn btn--outline btn--sm btn-open-inquiry" data-prefill-dest="${pkg.name}">Customise</button>
            <a href="${waBookUrl}" target="_blank" rel="noopener" class="btn btn--wa btn--sm">Book on WhatsApp</a>
          </div>
        </div>

        <!-- Related Packages Strip -->
        <section class="section" style="border-top: 1px solid var(--line); margin-top: 64px;">
          <div class="section-header">
            <span class="section-tag">SIMILAR TRIPS</span>
            <h2 class="section-title">You Might Also Like</h2>
          </div>
          <div class="packages-grid">
            ${related.map(rel => {
              const relWaUrl = buildPackageBookingUrl(rel.name, `${rel.nights}N/${rel.days}D`, rel.price);
              return `
                <article class="package-card">
                  <div class="package-card__media">
                    <img src="${rel.image}" alt="${rel.name}" class="package-card__img" loading="lazy">
                    <span class="package-card__tag">${rel.category}</span>
                    <span class="package-card__duration">${rel.nights}N / ${rel.days}D</span>
                  </div>
                  <div class="package-card__body">
                    <div>
                      <h3 class="package-card__title">${rel.name}</h3>
                      <p class="package-card__route">${rel.route}</p>
                    </div>
                    <div>
                      <div class="package-card__price-row">
                        <div>
                          <span class="package-card__starts-label">Starting from</span>
                          <span class="package-card__price">₹${rel.price}*</span>
                        </div>
                        <span class="package-card__per-person">/ person</span>
                      </div>
                      <div class="package-card__actions" style="margin-top: 16px;">
                        <a href="package.html?slug=${rel.slug}" class="btn btn--outline btn--sm">View details</a>
                        <a href="${relWaUrl}" target="_blank" rel="noopener" class="btn btn--wa btn--sm">Book</a>
                      </div>
                    </div>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </section>
      </main>
    `;

    // Interactive thumbnail swapper
    const thumbs = container.querySelectorAll('.package-thumb');
    const mainImg = container.querySelector('#pkg-main-img');
    if (thumbs.length && mainImg) {
      thumbs.forEach(thumb => {
        const switchImg = () => {
          thumbs.forEach(t => t.classList.remove('is-active'));
          thumb.classList.add('is-active');
          const src = thumb.getAttribute('data-thumb-src');
          if (src) mainImg.src = src;
        };

        thumb.addEventListener('click', switchImg);
        thumb.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            switchImg();
          }
        });
      });
    }
  }

  /* ==========================================================================
     15. INITIALIZATION ON DOMContentLoaded
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    populateMonthSelects();
    setupHeaderAndDrawer();
    setupInquiryModal();
    setupHeroFinder();
    renderCategories();
    renderPackages('all');
    setupPackageFilters();
    renderDestinations('domestic');
    setupDestinationTabs();
    renderReviews();
    setupReviewsSlider();
    renderGallery();
    setupLightbox();
    renderFaqs();
    setupContactForm();
    setupFloatingActions();
    observeReveals();
    renderPackageDetailPage();
  });

})();
