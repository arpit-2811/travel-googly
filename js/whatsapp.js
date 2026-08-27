/**
 * TRAVEL GOOGLY — WHATSAPP INTEGRATION ENGINE
 * Single source of truth for phone number, URL generation, and inquiry templates.
 */

// Primary agency WhatsApp number (India format without plus)
const WA_NUMBER = '918319390510'; // +91 83193 90510

/**
 * Builds standard wa.me URL with clean URI encoding.
 * @param {string} message - Raw unencoded message text
 * @returns {string} Fully formatted WhatsApp direct link URL
 */
function buildWaUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Normalises an Indian mobile number according to strict rules:
 * 1. Strip all non-digit characters
 * 2. Drop leading '91' only when result is 12 digits (e.g. 919876543210 -> 9876543210)
 * 3. Drop leading '0' only when result is 11 digits (e.g. 09876543210 -> 9876543210)
 * 4. Verify exactly 10 digits starting with 6, 7, 8, or 9
 *
 * @param {string} input - Raw phone number input string
 * @returns {string|null} Normalised 10-digit number or null if invalid
 */
function normaliseIndianMobile(input) {
  if (!input || typeof input !== 'string') return null;

  // Step 1: Strip non-digits
  let digits = input.replace(/\D/g, '');

  // Step 2: Drop leading 91 only if 12 digits total
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  }

  // Step 3: Drop leading 0 only if 11 digits total
  if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // Step 4: Validate exactly 10 digits starting with 6, 7, 8, or 9
  if (/^[6-9]\d{9}$/.test(digits)) {
    return digits;
  }

  return null;
}

/**
 * Builds the signature inquiry modal WhatsApp message.
 * @param {Object} data - Inquiry form data
 * @returns {string} Raw message string
 */
function buildInquiryMessage(data) {
  const pageTitle = document.title ? document.title.split('—')[0].trim() : 'Travel Googly';
  const notes = data.notes && data.notes.trim() ? data.notes.trim() : '—';
  const mobile = data.mobile || '—';

  return `Hi Travel Googly! I'd like a package quote.

Name: ${data.name || '—'}
WhatsApp: +91 ${mobile}
Destination: ${data.destination || '—'}
Travellers: ${data.travellers || '2'}
Travel month: ${data.month || '—'}
Budget per person: ${data.budget || '—'}
Notes: ${notes}

Sent from the website (${pageTitle})`;
}

/**
 * Builds WhatsApp message for individual package bookings.
 * @param {string} packageName - Package title
 * @param {string} duration - e.g. "5N / 6D"
 * @param {string|number} price - e.g. "24,499"
 * @returns {string} URL string
 */
function buildPackageBookingUrl(packageName, duration, price) {
  const msg = `Hi Travel Googly! I'm interested in the "${packageName}" package (${duration}, starting from ₹${price}/person). Please share customized itinerary options and best quote.`;
  return buildWaUrl(msg);
}

/**
 * Builds WhatsApp message for contact form submissions.
 * @param {Object} data - Contact form data
 * @returns {string} URL string
 */
function buildContactMessageUrl(data) {
  const pageTitle = document.title ? document.title.split('—')[0].trim() : 'Travel Googly';
  const mobile = data.mobile || '—';
  const messageText = data.message && data.message.trim() ? data.message.trim() : '—';

  const msg = `Hi Travel Googly! I have a trip inquiry.

Name: ${data.name || '—'}
WhatsApp: +91 ${mobile}
Message: ${messageText}

Sent from the website (${pageTitle})`;

  return buildWaUrl(msg);
}

/**
 * Builds default floating chat URL.
 * @returns {string} URL string
 */
function buildDefaultChatUrl() {
  const msg = `Hi Travel Googly! I'd like to plan a trip. Please assist me with package options and quotes.`;
  return buildWaUrl(msg);
}
