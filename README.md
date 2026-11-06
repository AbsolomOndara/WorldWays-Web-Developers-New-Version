# Worldways Web-Developers Ltd — React Frontend

A Vercel-ready Next.js and React website for Worldways Web-Developers Ltd. This is the frontend package; the separate Express API is in the `WorldWays-Backend` package.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_API_BASE_URL` to your backend URL (for local development, `http://localhost:4000`).
4. Set `NEXT_PUBLIC_SITE_URL` to the public website domain.
5. Start with `npm run dev` and open `http://localhost:3000`.

Without a backend connection, the public pages still show their starter content. Contact form submissions, subscriptions, live pricing and admin tools need the backend URL configured.

## Deploy on Vercel

Import this frontend folder into Vercel with the Next.js framework preset. Set `NEXT_PUBLIC_API_BASE_URL` to your deployed API origin and `NEXT_PUBLIC_SITE_URL` to the public website URL, then deploy. Next.js page metadata, Open Graph defaults, Organization data, sitemap and robots rules are included.

The admin sign-in is at `/admin/login`. Create the admin account in the backend environment before using it.

## Email flow

The contact form sends its message to the backend for the admin dashboard. Clicking the email address opens the visitor’s email application addressed to `info@worldwayswebdevelopers.co.ke`. To show messages sent directly to that mailbox in the dashboard, configure mailbox forwarding or a provider webhook to the backend inbound email endpoint.
