# Jake Turner PT - Landing Page

Single high-converting, mobile-first landing page for Jake Turner, Personal Trainer at PureGym London Aldgate.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `/app`: Main application code (pages, layout, API routes).
- `/components`: Reusable UI components and sections.
- `/public`: Static assets (images).

## Environment Variables
Create a `.env.local` file with the following variables:
- `EMAIL_API_KEY`: API key for email service (e.g., Resend/SendGrid).
- `EMAIL_FROM`: Sender email address.
- `EMAIL_TO`: Recipient email address (Jake).
