# MSW PoC with NextJS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This PoC uses MSW for mocking requests in NextJS 15 application to enable frontend work when backend is not available.
NextJS 15 supports client side and server side rendering.
MSW mocks requests made by both, browser and node, using the same datasource.

Additionally, in this PoC you can see Vitest and Playwright working together with MSW to mock requests in automated tests.

See more:
* [MSW docs](https://mswjs.io/docs/)
* [NextJS 15 example PR](https://github.com/mswjs/examples/pull/101)
* [Vitest](https://vitest.dev/api/)
* [Playwright](https://playwright.dev/docs/intro)

To run Vitest use `npm run test`  
To run Playwright use `npx playwright test`
To see Playwright report use `npx playwright show-report`

### Note
Vitest tests are next to tested components. Playwright tests are in `e2e` directory.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
