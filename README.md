# Travel Googly — Official Website Documentation

A complete, production-ready, zero-dependency marketing website for **Travel Googly**, an Indian tour and travel agency specializing in domestic trips, international vacations, honeymoon specials, pilgrimage yatras, and adventure expeditions.

---

## 📁 Project Structure

```text
Travel googly/
├── index.html            # Main homepage (SEO, JSON-LD Schema, Hero, Packages, Reviews, etc.)
├── about.html            # Dedicated About Us page (Founder story, core values, services, office)
├── package.html          # Dynamic package detail template (?slug=...)
├── travelgoogly logo.png # Official 3D emblem brand logo
├── css/
│   └── styles.css        # Single organized stylesheet (Tokens, Layout, Components, Animations)
├── js/
│   ├── data.js           # Core dataset (Packages, Categories, Destinations, Reviews, FAQs, Gallery)
│   ├── whatsapp.js       # WhatsApp URL engine & number configuration (Single source of truth)
│   └── main.js           # Interactive UI logic (Popup modal, validation, filters, slider, lightbox)
├── assets/
│   ├── travelgoogly-logo.png # Official brand logo emblem
│   └── favicon.svg       # Brand favicon
└── README.md             # Documentation & maintainer guide
```

---

## 🚀 Running the Project

This site is built with **pure vanilla HTML5, CSS3, and JavaScript**.
- **No Node.js / npm**, no build step, no bundler, and no external dependencies.
- Simply **double-click `index.html`** or open it directly in any modern browser (`Chrome`, `Firefox`, `Safari`, `Edge`).
- All scripts use standard `<script src="...">` tags rather than ES module imports, ensuring full compatibility even when viewed over the local `file://` protocol.

---

## ⚙️ Configuration & Customization Guide

### 1. Changing the WhatsApp Number
The agency WhatsApp number is defined in a single location:
Open [`js/whatsapp.js`](file:///js/whatsapp.js) and update the `WA_NUMBER` constant at the top:
```javascript
const WA_NUMBER = '918319390510'; // Indian format: 91 + 10-digit mobile number
```
Every WhatsApp link, floating action button, package card button, and modal submit automatically reads from this constant.

---

### 2. Swapping the Logo
1. Replace [`assets/logo.svg`](file:///assets/logo.svg) with your official brand logo vector or image file.
2. If your new logo has a different height or aspect ratio, adjust the `--logo-h` CSS custom property in [`css/styles.css`](file:///css/styles.css#L33):
```css
:root {
  --logo-h: 36px; /* Adjust according to your logo dimensions */
}
```
3. Update [`assets/favicon.svg`](file:///assets/favicon.svg) with your matching icon.

---

### 3. Adding or Editing Tour Packages
All package data is managed in [`js/data.js`](file:///js/data.js). To edit an existing package or add a new one, update the `PACKAGES` array:

```javascript
{
  slug: 'unique-url-slug',           // Used in package.html?slug=unique-url-slug
  name: 'Package Title',             // Displayed on cards & detail pages
  category: 'domestic',              // 'domestic' | 'international' | 'honeymoon' | 'pilgrimage' | 'adventure'
  nights: 5,
  days: 6,
  price: '24,499',                   // Displayed price in ₹ INR
  oldPrice: '28,999',                // Strikethrough comparison price (optional)
  route: 'City A · City B · City C',
  image: 'https://...',              // Primary card image (4:3 ratio)
  gallery: ['https://...', 'https://...'],
  summary: 'Short paragraph describing the tour...',
  highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
  itinerary: [
    { day: '01', title: 'Arrival & Welcome', detail: 'Detailed day description...' }
  ],
  inclusions: ['Hotels', 'Breakfast', 'Private AC Sedan'],
  exclusions: ['Flights', 'Personal expenses'],
  thingsToCarry: ['Warm clothes', 'Valid Photo ID'],
  cancellationPolicy: 'Full refund up to 15 days before departure...',
  bestTime: 'October to May',
  featured: true
}
```

---

### 4. Official Agency Details
- **Founder / Operations**: Pankaj Sharma
- **WhatsApp / Phone**: `+91 83193 90510`
- **Email**: `info@travelgoogly.org`
- **Head Office**: Shop No. 10, Jiwaji Ganj, Morena, Madhya Pradesh – 476001, India
- **Hours**: Monday – Sunday: 9:00 AM – 9:00 PM IST

---

## 📸 Image Manifest & Credits

High-resolution, curated travel photography used across the site from Unsplash:

| Image Use | Description | Location / Subject | Source URL |
|---|---|---|---|
| Hero Banner | Mountain Road | Ladakh Himalaya Pass | `https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd` |
| Package / Dest | Beach & Palms | Goa Calangute Coast | `https://images.unsplash.com/photo-1512343879784-a960bf40e7f2` |
| Package / Dest | Shikara & Lake | Srinagar Dal Lake | `https://images.unsplash.com/photo-1595815771614-ade9d652a65d` |
| Package / Dest | Snow Mountains | Solang Valley Manali | `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23` |
| Package / Dest | Backwaters | Alleppey Houseboat | `https://images.unsplash.com/photo-1602216056096-3b40cc0c9944` |
| Package / Dest | Royal Palace | Amer Fort Jaipur | `https://images.unsplash.com/photo-1477587458883-47145ed94245` |
| Package / Dest | White Sand Beach | Radhanagar Havelock | `https://images.unsplash.com/photo-1589394815804-964ed0be2eb5` |
| Package / Dest | Temple Shrine | Uttarakhand Himalaya | `https://images.unsplash.com/photo-1609137144822-211c473138b3` |
| Package / Dest | Futuristic Skyline| Dubai Downtown | `https://images.unsplash.com/photo-1512453979798-5ea266f8880c` |
| Package / Dest | Golden Pagoda | Bangkok Thailand | `https://images.unsplash.com/photo-1508009603885-50cf7c579365` |
| Package / Dest | Tropical Villa | Ubud Bali | `https://images.unsplash.com/photo-1537996194471-e657df975ab4` |
| Package / Dest | Supertree Grove | Singapore Marina Bay | `https://images.unsplash.com/photo-1525625293386-3f8f99389edd` |

---

## 🌐 Production Deployment

Since the website is completely static with zero build steps, you can deploy it instantly on any web hosting platform:
- **Cloudflare Pages / Vercel / Netlify**: Simply link the repository or drag-and-drop the project folder.
- **GitHub Pages**: Push the repository to GitHub and enable GitHub Pages on the `main` branch.
- **Traditional cPanel / Apache / Nginx / Shared Hosting**: Upload the entire folder content to `public_html`.
