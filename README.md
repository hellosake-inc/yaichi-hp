This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

This project is configured for deployment on Netlify with built-in form handling.

### Deployment Steps

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository.

2. **Connect to Netlify**: 
   - Log in to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your GitHub repository

3. **Configure Build Settings**:
   - Build command: `npm run build` (already configured in `netlify.toml`)
   - Publish directory: `.next` (already configured in `netlify.toml`)

4. **Deploy**: Click "Deploy site"

### Netlify Forms Configuration

The contact form is already configured to work with Netlify Forms:
- Form submissions will be available in your Netlify dashboard
- Configure email notifications in: Site settings → Forms → Form notifications
- Set the notification email to: `nkfoodmilpitas@gmail.com`

### Environment Variables

If needed, add environment variables in Netlify:
- Go to Site settings → Environment variables
- Add any required variables

### Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow the DNS configuration instructions

For more details, check out the [Netlify Next.js documentation](https://docs.netlify.com/integrations/frameworks/next-js/overview/).
