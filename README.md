# Cudago Public Landing Portal (`cudago_landing`)

The public-facing marketing website, partner onboarding portal, career job board, and legal policy repository for **Cudago**. Built with **React 19**, **Vite 6**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

---

## 📚 Documentation Index

* **[Architecture & Sitemap](./docs/ARCHITECTURE.md)**: Website sitemap, user conversion funnel diagram, Appwrite lead form pipelines, and legal policy compliance.

---

## ⚡ Quick Start

### Prerequisites
- Node.js 20+ LTS

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (.env)
cp .env.example .env

# 3. Start Development Server
npm run dev
```

The website runs on `http://localhost:3000`.

---

## 📂 Project Structure

```
cudago_landing/
├── docs/                      # Modular documentation
│   └── ARCHITECTURE.md        # Sitemap & lead capture funnel diagram
├── src/
│   ├── company/               # Careers and about company views
│   ├── components/            # Hero, Navbar, Footer, Features, Service grids
│   ├── pages/                 # Contact, Partner, Apply, and App Store Download views
│   ├── policies/              # DPDP Privacy Policy and Terms of Service documents
│   ├── appwrite.ts            # Appwrite SDK client initialization
│   ├── Home.tsx               # Main landing page component
│   └── App.tsx                # React Router routing
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables Summary

| Variable | Description | Required |
| :--- | :--- | :---: |
| `VITE_APPWRITE_ENDPOINT` | Appwrite Cloud API endpoint | No |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project ID | No |
| `VITE_APPWRITE_DATABASE_ID` | Appwrite database ID for lead forms | No |
| `VITE_APPWRITE_BUCKET_ID` | Appwrite storage bucket ID for resume uploads | No |
