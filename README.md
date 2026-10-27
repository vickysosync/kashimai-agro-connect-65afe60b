# Kashimai Agro Connect

https://github.com/vickysosync/kashimai-agro-connect

copy this repo

initial prompt
# Lovable AI Prompt: Dynamic Agricultural Company Portfolio Website

Develop a premium, modern, fully responsive, dynamic portfolio demo website for **Shri Sant Kashimai Agro Farmer Producer Company Limited**, an agricultural and farmer-producer company located in Maharashtra, India.

The website should look like a genuine, professionally designed agricultural business website, not a generic AI-generated template. Use a natural agricultural visual identity, realistic farming imagery, clean layouts, professional typography, and practical business-focused content.

## 1. Strict Technology Requirements

Use ONLY the following technologies:

- React
- Vite
- Tailwind CSS
- React built-in state management and standard browser functionality where required

**Important restrictions:**

- Do not use Next.js.
- Do not use TypeScript.
- Do not use any backend technology.
- Do not use any database, including MongoDB, MySQL, PostgreSQL, Supabase, or Firebase.
- Do not install additional UI libraries, component libraries, icon libraries, animation libraries, chart libraries, or other third-party libraries.
- Use JavaScript and JSX only.
- Use Tailwind CSS for styling.
- Use simple inline SVGs or CSS for icons when necessary.
- Use mock data stored in JavaScript files.
- All demo interactions must work using React state and mock data.
- Do not claim that demo forms, authentication, or content changes are connected to a real backend.

The project must run using the standard Vite development server and be ready for deployment as a static website.

## 2. Business Information

Use the following company details throughout the website, footer, contact page, and admin panel.

**Business Name:** Shri Sant Kashimai Agro Farmer Producer Company Limited

**Alternative spelling note:** The name may also appear as “Shri Sant Kashiai Agro Farmer Producer Company Limited.” Use the primary name consistently throughout the website and treat the alternative spelling only as a reference, not as a separate company.

**Registered Office Address:** H.No. 89, Main R. Sawargaon Road, Ahmadpur Ugilewadi, Ahmedpur, Latur, Maharashtra, 413515, India.

**Incorporation Date:** August 7, 2026.

**Corporate Identification Number (CIN):** U01619ME2026PTC476123.

**Company Status:** Active, as stated in the supplied reference screenshot. Present this as user-provided reference information, not as independently verified live registry data.

**Primary Business Activity:** Crop and animal production, horticulture, and agricultural services, associated with Division 01 under the MCA/NIC classification.

**Phone:** Not provided. Add an editable placeholder in the admin panel.

**Email:** Not provided. Add an editable placeholder in the admin panel.

**Client Name:** Not provided. Make this an editable field in the admin panel.

**Business Address:** Use the registered office address supplied above.

Do not invent a phone number, email address, farmer count, annual revenue, certifications, awards, agricultural partnerships, customer testimonials, or verified production figures. Use clearly labeled demo content wherever illustrative information is necessary.

## 3. Brand Identity and Color Palette

Create a natural, trustworthy, premium agricultural brand identity.

Use these exact brand colors:

- Primary Forest Green: `#166534`
- Deep Agricultural Green: `#14532D`
- Fresh Leaf Green: `#65A30D`
- Harvest Yellow: `#EAB308`
- Warm Cream Background: `#FAF8F0`
- Pure White: `#FFFFFF`
- Dark Earth Text: `#292E26`
- Muted Gray: `#6B7280`
- Light Green Background: `#F0FDF4`

Use forest green for navigation, headings, buttons, and important brand elements. Use harvest yellow sparingly for highlights and calls to action.

The website should communicate agriculture, sustainability, farmer empowerment, trust, quality, and rural development.

Avoid excessive gradients, neon colors, glassmorphism, oversized rounded cards, floating 3D objects, and generic corporate graphics.

## 4. Website Architecture: Separate Pages Required

Create a multi-page portfolio website with separate URLs and working navigation for each page.

Required pages:

1. Home — `/`
2. About Us — `/about`
3. Services — `/services`
4. Our Approach — `/approach`
5. Gallery — `/gallery`
6. Company Details — `/company-details`
7. Contact Us — `/contact`
8. Admin Login — `/admin/login`
9. Admin Dashboard — `/admin/dashboard`

Use React and Vite with a lightweight custom client-side routing solution implemented without installing any routing library.

Every navigation link must open its correct page. Do not place all page content on the home page or make every navigation link scroll to the same section.

Support browser back and forward navigation and handle page refreshes appropriately. Configure deployment rewrites where needed so direct visits to application routes work.

## 5. Header and Navigation

Build a clean, responsive header.

Include:

- Company logo or a custom agricultural logo made using simple SVG.
- Company name.
- Home
- About Us
- Services
- Our Approach
- Gallery
- Company Details
- Contact Us
- Prominent “Contact Us” button.

Desktop navigation should be horizontal and uncluttered. Mobile navigation should use a functional hamburger menu.

Highlight the currently active page. All links and buttons must have working click behavior.

Use a sticky header only if it improves usability.

## 6. Home Page

Create a premium agricultural homepage with the following sections.

### A. Hero Section

Use a large, high-quality agricultural banner image showing Indian farmland, healthy crops, green agricultural fields, or farmers working in a field.

Use a real photographic image, not an illustration.

Suggested headline:

**Growing Agriculture. Empowering Farmers. Building a Sustainable Future.**

Supporting text:

“Shri Sant Kashimai Agro Farmer Producer Company Limited is focused on agriculture, horticulture, and agricultural services, with a vision of supporting farmers and encouraging sustainable agricultural practices.”

Primary CTA: “Explore Our Services”

Secondary CTA: “Contact Our Team”

Add a small agricultural label such as “Agriculture • Horticulture • Farmer Development”.

Use a tasteful dark green image overlay only where necessary to maintain text readability.

### B. Introduction Section

Heading: “Rooted in Agriculture, Growing Together”

Explain the company's agricultural focus, farmer-oriented vision, horticultural opportunities, and commitment to sustainable farming practices.

Do not claim specific achievements that have not been supplied.

### C. Our Services Preview

Display professional service cards for:

- Crop Production Support
- Horticulture Development
- Agricultural Services
- Farmer Support and Coordination
- Sustainable Farming Awareness
- Agricultural Business Development

These are proposed portfolio service categories. Make all service names and descriptions editable in the admin panel and do not represent unconfirmed services as independently verified offerings.

### D. Our Approach Preview

Present a simple four-stage framework:

1. Understand Local Agricultural Needs
2. Plan Practical Farming Solutions
3. Support Agricultural Activities
4. Review Progress and Improve Practices

### E. Agriculture Gallery Preview

Show a grid of distinct agricultural photographs featuring:

- Indian farmland
- Crop cultivation
- Horticulture and orchards
- Irrigation and agricultural practices
- Harvested crops
- Rural agricultural landscapes

Each image should have a descriptive caption and meaningful alternative text.

### F. Company Information Preview

Display the company's primary business activity, incorporation date, registered office location, and other supplied company information.

### G. Contact CTA

Heading: “Let's Grow a Stronger Agricultural Future Together”

Add a Contact Us button that opens the dedicated Contact page.

## 7. About Us Page — `/about`

Create a dedicated About Us page with:

- Agricultural-themed hero banner.
- Company introduction.
- Company background.
- Vision.
- Mission.
- Core values.
- Agricultural focus.
- Commitment to sustainable practices.
- Farmer-oriented development philosophy.
- Registered office information.

Suggested vision:

“To contribute to a more productive, sustainable, and opportunity-driven agricultural ecosystem.”

Suggested mission:

“To support agricultural development through practical services, horticultural opportunities, farmer coordination, and responsible agricultural practices.”

Clearly distinguish proposed vision and mission statements from officially supplied company declarations.

Use relevant photographic imagery and a professional editorial layout.

## 8. Services Page — `/services`

Create a complete services catalog with individual service sections or cards.

Include:

1. Crop Production Support
2. Horticulture and Orchard Development
3. Agricultural Advisory and Support Services
4. Farmer Coordination
5. Sustainable Agriculture Awareness
6. Agricultural Resource Planning
7. Post-Harvest Handling Awareness
8. Agricultural Business Development

For every service include:

- Service title.
- Relevant photographic image.
- Short description.
- Detailed description.
- Potential benefits.
- “Enquire About This Service” button.

Service descriptions must be realistic and editable. Do not make unsupported guarantees about yields, profits, subsidies, certifications, or government benefits.

The enquiry button should open the Contact page or prefill the selected service in the contact form.

All service content and image assignments must be manageable from the admin panel.

## 9. Our Approach Page — `/approach`

Create a dedicated page explaining the company's proposed approach to agricultural development.

Include:

### Step 1: Understand
Understand local farming conditions, agricultural needs, and available opportunities.

### Step 2: Plan
Develop practical approaches for crop production, horticulture, and agricultural activities.

### Step 3: Support
Provide relevant coordination and agricultural support according to the company's actual service offerings.

### Step 4: Improve
Review progress, gather feedback, and identify opportunities to improve agricultural practices.

Additional sections:

- Farmer-first philosophy.
- Sustainable agricultural practices.
- Responsible resource use.
- Long-term agricultural development.
- Collaboration and communication.

Use authentic agricultural photography and a clean timeline or step-based layout created with CSS.

## 10. Gallery Page — `/gallery`

Create a dedicated agricultural image gallery.

Include distinct images of:

- Green crop fields.
- Indian farming landscapes.
- Horticulture and fruit cultivation.
- Vegetable cultivation.
- Irrigation systems.
- Crop harvesting.
- Agricultural equipment in use.
- Soil preparation and cultivation.
- Rural agricultural landscapes.
- Sustainable farming practices.

Features:

- Responsive image grid.
- Category filters.
- All, Crop Farming, Horticulture, Irrigation, Harvesting, and Sustainable Farming categories.
- Image lightbox using React state.
- Previous and next image navigation.
- Image captions.
- Proper mobile layout.

The admin panel must allow adding, editing, reordering, and deleting gallery entries within the current browser session.

Use multiple distinct, relevant photographic images. Avoid repeating the same photograph throughout the site.

## 11. Company Details Page — `/company-details`

Create a formal company information page displaying:

- Full Company Name: Shri Sant Kashimai Agro Farmer Producer Company Limited
- Incorporation Date: August 7, 2026
- CIN: U01619ME2026PTC476123
- Status: Active — based on the supplied reference screenshot
- Primary Activity: Crop and animal production, horticulture, and agricultural services
- Classification Reference: Division 01 under MCA/NIC classification
- Registered Office: H.No. 89, Main R. Sawargaon Road, Ahmadpur Ugilewadi, Ahmedpur, Latur, Maharashtra, 413515, India
- Phone: Not provided
- Email: Not provided

Include a clean information layout with copy-to-clipboard functionality for the CIN and address.

Add an agricultural banner or subtle field photograph.

Do not add fabricated registration certificates, government seals, or official verification badges.

## 12. Contact Page — `/contact`

Create a professional Contact Us page with:

- Agricultural banner image.
- Company name.
- Complete registered office address.
- Editable phone number field.
- Editable email address field.
- Contact enquiry form.

Form fields:

- Full Name
- Phone Number
- Email Address
- Service of Interest
- Subject
- Message

Requirements:

- Client-side required-field validation.
- Email format validation.
- Phone field validation.
- Service dropdown populated from mock service data.
- Success and error feedback.
- Submit button with loading-style visual feedback.
- Responsive design.

Since this is a frontend-only demo, simulate form submission using React state. Do not claim that messages are actually delivered or stored remotely.

Provide editable phone and email fields in the admin panel. Until real contact information is supplied, display “Contact details to be updated” rather than invented details.

## 13. Admin Login — `/admin/login`

Create a separate admin login page.

Use demo credentials:

- Username: `admin`
- Password: `Admin@123`

Display a small note explaining that these are demo credentials.

Requirements:

- Username input.
- Password input.
- Show/hide password control.
- Login button.
- Validation for incorrect credentials.
- Successful login redirects to `/admin/dashboard`.
- Logout button.
- Redirect unauthenticated visitors away from the admin dashboard.

Implement demo authentication with React state and browser session storage if necessary. Do not use authentication APIs, a database, or a backend.

Clearly explain in the interface and source code that this authentication is for demonstration purposes only and is not secure enough for production use.

## 14. Admin Dashboard — `/admin/dashboard`

Build a functional, responsive admin panel that manages most website content.

Use a separate admin layout with a sidebar, dashboard header, main content area, and mobile-friendly navigation.

### Dashboard Overview

Display summary cards for:

- Total Services
- Total Gallery Images
- Total Enquiries in Current Session
- Company Profile Status

Use values derived from the current mock data and React state. Do not fabricate real business analytics.

### Module A: Company Profile Management

Allow editing:

- Company name.
- Client name.
- Registered office address.
- Phone number.
- Email address.
- Incorporation date.
- CIN.
- Company status display.
- Primary business activity.
- Vision.
- Mission.
- About Us description.

### Module B: Services Management

Provide functional controls to:

- Add a service.
- Edit an existing service.
- Delete a service.
- Update service title.
- Edit descriptions.
- Change categories.
- Assign an image URL.
- Toggle visibility.
- Preview the service.

### Module C: Gallery Management

Provide controls to:

- Add gallery entries.
- Edit captions.
- Set image URLs.
- Change categories.
- Reorder entries.
- Toggle visibility.
- Delete entries.
- Preview images.

Because no backend or upload service is permitted, use image URLs instead of server uploads. Clearly label this limitation.

### Module D: Homepage Content Management

Allow editing:

- Hero heading.
- Hero description.
- Hero image URL.
- CTA text.
- Introduction heading and content.
- Homepage section visibility.
- Featured service selections.
- Gallery preview selections.

### Module E: Our Approach Management

Allow editing of all four approach steps, headings, descriptions, and associated images.

### Module F: Enquiry Management

Show enquiries submitted during the current browser session.

Allow:

- Viewing enquiry details.
- Changing enquiry status to New, Contacted, or Resolved.
- Deleting demo enquiries.

Do not claim that enquiries survive a browser reset or are available on other devices.

### Module G: Website Settings

Allow editing:

- Logo text.
- Footer description.
- Contact details.
- Social media links, if supplied.
- Copyright text.
- Admin display name.

Do not invent real social media accounts.

### Module H: Preview and Reset

Include:

- Preview Website button.
- Return to Website button.
- Reset Demo Data button with confirmation.

The reset action must restore the initial mock data.

All admin forms, buttons, toggles, filters, add/edit/delete actions, and preview actions must work.

## 15. Mock Data and State Management

Create structured JavaScript mock data for:

- Company profile.
- Services.
- Homepage content.
- Approach steps.
- Gallery.
- Enquiries.
- Website settings.

Use React state to manage editing and updates across the frontend and admin panel.

The public website and admin dashboard should use the same in-memory application state so changes made in the admin panel appear on the public pages immediately.

Use React Context and built-in hooks if shared state is necessary; do not install any additional libraries.

Persistence should remain limited to the current browser session or in-memory state. If session storage is used, explain its limitations.

Do not use any database or backend.

## 16. Image Requirements

Use multiple distinct, high-quality agricultural photographs throughout the website.

Prioritize imagery relevant to Maharashtra and Indian agriculture:

- Indian green crop fields.
- Farmers cultivating farmland.
- Horticulture and fruit orchards.
- Vegetable cultivation.
- Harvested crops.
- Irrigation practices.
- Agricultural landscapes.
- Soil preparation and sustainable farming.

Image handling requirements:

- Use separate images for the homepage hero, About Us, services, approach, and gallery.
- Do not reuse one image for every section.
- Maintain consistent image aspect ratios within each section.
- Use `object-cover` and responsive image containers.
- Add descriptive alt text to all meaningful images.
- Provide graceful fallbacks if an image fails to load.
- Avoid broken image placeholders.
- Allow the admin to edit image URLs.
- Use remote image URLs only for this frontend demo.
- Keep images appropriately compressed and responsive.

Do not create fake photographs of the company's actual offices, employees, farms, or facilities.

## 17. Footer

Create a professional multi-column footer on every public website page.

Include:

**Company Name:** Shri Sant Kashimai Agro Farmer Producer Company Limited

**Footer Description:** An agricultural business focused on crop production, horticulture, and agricultural services.

**Quick Links:**
- Home
- About Us
- Services
- Our Approach
- Gallery
- Company Details
- Contact Us

**Contact Information:**
- Registered office address.
- Phone placeholder until provided.
- Email placeholder until provided.

**Admin Access:** Add a clearly accessible “Admin Login” link in the footer that navigates to `/admin/login`.

**Mandatory Website Credit:**

“Designed and development by SOSynch Ai Tech”

Keep the credit text exactly as written.

Include a copyright line using the current year dynamically.

## 18. UI and Design Quality

The website must feel like a professionally developed agricultural company portfolio.

Design guidelines:

- Natural forest-green and cream color palette.
- Strong visual hierarchy.
- Clean spacing.
- Readable typography.
- High-quality agricultural photography.
- Subtle borders and shadows.
- Rectangular or gently rounded cards.
- Consistent button styles.
- Smooth, restrained CSS hover transitions.
- Responsive desktop, tablet, and mobile layouts.
- Accessible form labels and keyboard-friendly controls.
- Clear active navigation states.
- Loading, empty, validation, and success states where applicable.

Avoid making every section look identical. Use different compositions for the hero, company introduction, services, approach timeline, gallery, and contact section.

Do not use excessive animations or a generic template-like design.

## 19. Deployment and Publishing Readiness

Prepare the project for publishing as a static Vite website.

Requirements:

- Correct Vite project configuration.
- Tailwind CSS correctly configured and working.
- All imports and file paths valid.
- No missing components or placeholder imports.
- No TypeScript files.
- No backend or database dependencies.
- All internal routes work during navigation.
- Refreshing supported routes should not cause a 404 on the configured hosting platform.
- Provide a hosting rewrite configuration where needed.
- Include a working production build.
- Resolve build errors and broken links.
- Check image fallbacks.
- Test the mobile navigation.
- Test the admin login and logout flow.
- Test all admin CRUD operations.
- Test that admin edits update public website content.
- Test contact form validation and simulated submission.
- Verify that all footer links work.

Use standard commands:

`npm install`

`npm run dev`

`npm run build`

`npm run preview`

Provide clear deployment instructions for Vercel or Netlify, including the build command, output directory (`dist`), and any required SPA rewrite configuration.

After deployment, verify the published URL, homepage, separate routes, images, contact form interactions, and admin demo flow.

Do not claim deployment or successful verification unless it has actually been completed.

## 20. Suggested Project Structure

Organize the code into clear, maintainable files:

- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/data/mockData.js`
- `src/context/AppContext.jsx`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/Hero.jsx`
- `src/components/ServiceCard.jsx`
- `src/components/GalleryGrid.jsx`
- `src/components/ContactForm.jsx`
- `src/components/AdminLayout.jsx`
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Services.jsx`
- `src/pages/Approach.jsx`
- `src/pages/Gallery.jsx`
- `src/pages/CompanyDetails.jsx`
- `src/pages/Contact.jsx`
- `src/pages/AdminLogin.jsx`
- `src/pages/AdminDashboard.jsx`

You may adjust the structure where needed, but keep the project organized and use JavaScript and JSX only.

## 21. Final Acceptance Checklist

Before finishing, verify that:

1. The website is built using React, Vite, and Tailwind CSS only.
2. No extra libraries or databases are installed.
3. Every required public page has its own working route.
4. The design is specifically tailored to an agricultural business.
5. The homepage contains a large agricultural banner image.
6. Multiple distinct agricultural images appear throughout the website.
7. The company information matches the supplied details.
8. Phone and email placeholders are used instead of fabricated contact information.
9. The admin login works with the specified demo credentials.
10. The admin dashboard supports editing the company profile, services, gallery, homepage, approach, enquiries, and website settings.
11. Admin changes update the public website during the active application session.
12. All visible buttons, forms, navigation links, filters, and CRUD actions work.
13. The footer includes an Admin Login link.
14. The footer contains “Designed and development by SOSynch Ai Tech”.
15. The website is responsive on mobile, tablet, and desktop.
16. There are no broken images, dead buttons, or missing page components.
17. The production build completes successfully.
18. Deployment instructions explain how to publish and verify the live URL.

**Final instruction:** Build the complete working demo website, not just a design mockup or a static homepage. Prioritize a realistic agricultural brand identity, separate working pages, an interactive admin panel, editable mock data, multiple distinct agricultural images, and a deployment-ready Vite project. Keep all functionality frontend-only, with no database, backend, or additional libraries.



Done so far:
I copied your GitHub project into this one: all 28 photos, the colors and fonts, the company content, and the shared data that links the admin panel to the public site.
I built the header with the mobile menu and the footer, which has the Admin Login link, the "Designed and development by SOSynch Ai Tech" credit and the current year. I also built the photo fallbacks and the gallery viewer with previous/next buttons.
I built the contact form. It checks for required fields, valid emails and valid phone numbers, shows a "Sending…" state and a success message, and fills in the service when someone clicks "Enquire About This Service".
The page layouts for Home, About Us, Services, Our Approach, Gallery (with category filters), Company Details (with copy buttons for the CIN and address) and Contact Us are written.

Still unfinished:-
The page addresses that connect each layout to its URL (/about, /services and so on) don't exist yet, so those pages can't be opened.
The site-wide setup that shares your content with every page and loads the fonts isn't in place yet.
The Admin Login and Admin Dashboard pages haven't been built, including all eight management sections.
Each page still needs its own title and description for search engines and link previews.
Nothing has been checked yet. No build check has run and no clicking through the site has happened.

clone the repo and work Still unfinished continue and no create a new

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b60d71c1-6ab1-4888-ba7d-1722b9ec800f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
