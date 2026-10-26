# 💰 Finora – AI Powered Personal Finance Platform

Finora is a full-stack AI-powered personal finance management platform that helps users track income and expenses, manage multiple bank accounts, create budgets, automate recurring transactions, scan receipts using AI, and receive personalized financial insights through monthly reports.

Built with modern web technologies, Finora combines automation, artificial intelligence, and data visualization to simplify personal finance management.

---

## 🚀 Features

### 🔐 Secure Authentication
- Email & Google Sign-In using Clerk
- Protected routes
- User profile management

### 💳 Account Management
- Create multiple accounts
- Set default account
- Track account balances
- Savings & Current account support

### 💸 Transaction Management
- Add Income & Expense transactions
- Categorize transactions
- Transaction history
- Search & filter transactions

### 🔁 Recurring Transactions
- Daily, Weekly, Monthly and Yearly recurring payments
- Automated processing using Inngest background jobs
- Automatic account balance updates

### 📊 Dashboard & Analytics
- Income vs Expense overview
- Monthly financial summary
- Interactive charts
- Category-wise spending analysis

### 📷 AI Receipt Scanner
- Upload receipt images
- Automatically extract:
  - Amount
  - Merchant
  - Date
  - Category
- Powered by Google Gemini AI

### 🤖 AI Financial Insights
- AI-generated monthly financial analysis
- Spending pattern detection
- Personalized money-saving suggestions
- Expense optimization recommendations

### 📧 Automated Email Notifications
- Monthly financial reports
- Budget alert emails
- Beautiful React Email templates
- Email delivery using Resend

### 🎯 Budget Management
- Create monthly budgets
- Track spending progress
- Receive alerts after crossing spending threshold

### 🛡️ Security
- Bot protection
- Rate limiting
- Abuse prevention using Arcjet

---

# 🛠️ Tech Stack

## Frontend
- Next.js 15
- React 19
- Tailwind CSS
- Shadcn UI
- Radix UI
- Lucide Icons
- Recharts

## Backend
- Next.js Server Actions
- Prisma ORM
- PostgreSQL

## Authentication
- Clerk

## AI
- Google Gemini API

## Background Jobs
- Inngest

## Email Service
- Resend
- React Email

## Security
- Arcjet

## Validation
- Zod
- React Hook Form

---

# 📂 Project Structure

```
app/
components/
actions/
emails/
hooks/
lib/
prisma/
public/
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/chitranshumahaur7-cyber/Finora
```

Move into the project

```bash
cd Finora
```

Install dependencies

```bash
npm install
```

Run Prisma

```bash
npx prisma generate
npx prisma db push
```

Start development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

---

# 🔄 Background Workflows

Finora uses **Inngest** to automate several tasks.

- Daily recurring transaction processing
- Monthly AI report generation
- Budget alert emails
- Event-driven transaction workflows

---

# 🤖 AI Features

Google Gemini powers:

- Receipt data extraction
- AI-generated monthly financial insights
- Spending trend analysis
- Personalized budgeting recommendations

---

# 📊 Core Modules

- Authentication
- Dashboard
- Accounts
- Transactions
- Budgets
- AI Receipt Scanner
- AI Financial Reports
- Recurring Transactions
- Email Notifications

---

# 🌐 Deployment

The application is deployed on **Vercel**.

Deployment includes:

- Automatic GitHub integration
- Server-side rendering
- API Routes
- Background workflows (Inngest)
- PostgreSQL database
- AI integration
- Email notifications

---

# 📸 Screenshots

> Add screenshots of:
>
> - Landing Page
> - Dashboard
> - Transaction Page
> - Receipt Scanner
> - Budget Dashboard
> - Monthly Report Email

---

# 🔮 Future Improvements

- Multi-currency support
- Investment portfolio tracking
- Bill payment reminders
- Export reports as PDF
- Dark mode
- Mobile application
- OCR accuracy improvements

---

## 👨‍💻 Developer

**Chitranshu Mahaur**

- GitHub: https://github.com/chitranshumahaur7-cyber
- Project Repository: https://github.com/chitranshumahaur7-cyber/Finora

---

## ⭐ If you found this project useful, consider giving it a star!