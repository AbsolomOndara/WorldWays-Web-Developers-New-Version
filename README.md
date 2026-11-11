# Worldways Web-Developers Ltd - React Frontend

A Vercel-ready Next.js and React website for Worldways Web-Developers Ltd. This is the frontend package; the separate Express API is in the `WorldWays-Backend` package.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_API_BASE_URL` to your backend URL (for local development, `http://localhost:4000`).
4. Set `NEXT_PUBLIC_SITE_URL` to the public website domain.
5. Start with `npm run dev` and open `http://localhost:3000`.

Without a backend connection, the public pages still show their starter content. Contact form submissions, subscriptions, live pricing and admin tools need the backend URL configured.

## Homepage media

The homepage hero rotates through five muted Pexels clips showing active code work, with manual slide controls and a pause button. It advances every 5.5 seconds and loads the active slide only. Original video pages:

- https://www.pexels.com/video/close-up-on-computer-screen-while-programming-10130349/
- https://www.pexels.com/video/programming-a-computer-1992325/
- https://www.pexels.com/video/person-encoding-in-a-computer-2278095/
- https://www.pexels.com/video/running-codes-on-a-computer-6804121/
- https://www.pexels.com/video/close-up-on-coding-on-laptop-screen-11274330/

Each public page uses its own original people-led illustration, including a dedicated Careers image, and the four featured service tiles have separate artwork. Page backgrounds no longer use the blurred code texture. The homepage hero retains its five softly blurred code videos. Dark mode is the default, with a persistent light-mode toggle. The desktop navigation prioritises Services, Case Studies, Company, About, Insights, Careers and Pricing, with a clear Work With Us action. The mobile navigation is a full-screen single-column drawer with separated links.

The Case Studies page presents published client sites with logos or clear custom wordmarks and direct links. The Projects admin page manages each card’s title, sector, description, live URL, logo URL and publication status. The Reviews page accepts client feedback for moderation. Submitted reviews are held for approval and managed through `/admin/reviews`.

The homepage includes an interactive service and company directory with a keyword field, category tabs and A–Z service filters. Project case studies are shown only on the Projects page. Public blog listings and article pages fetch published entries from the API on each request, so newly published posts are server-rendered without relying on a browser hydration pass. The admin workspace has a higher-contrast dark theme by default, a light/dark toggle and larger controls and table text.

## Deploy on Vercel

Import this frontend folder into Vercel with the Next.js framework preset. Set `NEXT_PUBLIC_API_BASE_URL` to your deployed API origin and `NEXT_PUBLIC_SITE_URL` to the public website URL, then deploy. Next.js page metadata, Open Graph defaults, Organization data, sitemap and robots rules are included.

The admin sign-in is at `/admin/login`. Create the admin account in the backend environment before using it.

## SEO and sitemap

- Set `NEXT_PUBLIC_SITE_URL` to the canonical public domain, for example `https://worldwayswebdevelopers.co.ke`.
- The generated sitemap is available at `/sitemap.xml`. It includes public pages and service detail pages; published blog posts are included when the backend API is available.
- The robots file is available at `/robots.txt`; it points crawlers to the sitemap and excludes the admin route.
- After deployment, verify the sitemap URL in a browser and submit it in Google Search Console for the verified domain. Search visibility and lead volume depend on indexing, competition, content quality and ongoing work; metadata alone cannot guarantee rankings.

## Email flow

The contact form sends its message to the backend for the admin dashboard. Clicking the email address opens the visitor’s email application addressed to `info@worldwayswebdevelopers.co.ke`. To show messages sent directly to that mailbox in the dashboard, configure mailbox forwarding or a provider webhook to the backend inbound email endpoint.
