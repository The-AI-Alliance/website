# AI Alliance

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tools

- This project requires Node.js version 18.
- Package manager - `Yarn` is preferred over `NPM`.
- It uses Eslint and Prettier to auto-correct and auto-format text. It's highly recommended to enable auto-formatting in IDE to ensure formatting consistency.

## Getting Started

1. Install the dependencies

```bash
yarn
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

- Copy `example.env` to `.env.local` or other `.env*` file - see [Next.js documentation](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) for reference.
- Variables:
  - To enable contact form, the form submission needs to be configured. The form can be sent either over email, which requires Sendgrid configuration, and/or to HubSpot - requiring HubSpot configuration. See below for details.
    - Sendgrid configuration - to send contact form to email recitipent(s):
      - `SEND_GRID_API_KEY` - Sendgrid API key
      - `EMAIL_FROM` - email address to be used as a sender (NOT reply-to)
      - `EMAIL_TO` - comma-separated emails of recipients
    - HubSpot configuration - to enable HubSpot integration and submit contact form to HubSpot:
      - `HUBSPOT_ACCESS_TOKEN` - HubSpot Private app access token
      - `HUBSPOT_PORTAL_ID` - HubSpot portal ID
      - `HUBSPOT_FORM_GUID` - HubSpot form GUID
  - Other variables:
    - `HTTP_BASIC_AUTH` - (optional) credentials in `username:password` format to turn on basic authentication restricting access to the site to authenticated users only
    - `GA_ID` - (optional) Google Analytics ID


## Deployment

The app deploys automatically upon merge to `main` branch.
See `.travis.yml` configuration and `scripts/deploy.sh` script for more details.