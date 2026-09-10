# Green Road Family Legacy Films

A cinematic, responsive website for a filmmaker-led boutique private documentary studio. The current implementation follows the Green Road Website Revision & Implementation Brief V3.

## Technology

- React 19 + TypeScript
- Next-compatible App Router
- Vinext/Vite production runtime
- Purpose-built CSS motion and responsive layout
- Local PP Neue Montreal and Grand Bold font assets supplied in the reference archive

The site includes dedicated Stories, Experience, Films, About, FAQ, Inquire, Privacy, Terms, and Thank You routes; responsive navigation; SEO metadata; sitemap and robots endpoints; reduced-motion handling; and a server-side inquiry endpoint.

## Run in IntelliJ IDEA

1. Open this folder as a project.
2. Use Node.js 22.13 or newer.
3. Open the IntelliJ Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal.

Production check:

```bash
npm run build
```

## Inquiry delivery

Configure these environment variables in Vercel before accepting inquiries:

- `RESEND_API_KEY`
- `INQUIRY_EMAIL_TO`
- `INQUIRY_EMAIL_FROM`
- `NEXT_PUBLIC_SITE_URL`

The form validates required fields server-side and includes a honeypot spam check. It redirects to the minimal Thank You page only after successful delivery.

## Approved material still required

- Authentic Hero video and a separate 60-second emotional brand film, with poster frames and captions
- A real portrait of Mehdi Rahmani
- Verified biography, selected film credits, festival history, and recognition
- Approved Green Road or archival imagery where permission exists
- Confirmed geographic positioning and active social links, if any

No stock photography, fabricated client work, ratings, testimonials, packages, rigid durations, camera specifications, or placeholder contact details are published.
