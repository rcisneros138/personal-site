# Deployment Guide

This portfolio is configured for automatic deployment to Cloudflare Pages via GitHub Actions.

## Overview

- **CI/CD:** GitHub Actions
- **Hosting:** Cloudflare Pages
- **Build Output:** Static export (`out/` directory)

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `deploy.yml` | Push to `main` | Production deployment |
| `preview.yml` | Pull requests | Preview deployments with PR comments |
| `ci.yml` | Pull requests | Lint, type check, and build validation |

## Setup Instructions

### 1. Create GitHub Repository

```bash
# If not already done, create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset:** None (we handle builds in GitHub Actions)
   - **Build command:** (leave empty)
   - **Build output directory:** (leave empty)
6. Click **Save and Deploy** (first deploy will fail, that's okay)

Alternatively, create via Direct Upload (the workflow will handle subsequent deploys):
1. Go to **Workers & Pages** → **Pages**
2. Click **Create a project** → **Direct Upload**
3. Name it `portfolio` (or your preferred name)
4. Upload any placeholder file
5. Note the project name for the next step

### 3. Get Cloudflare Credentials

#### Account ID
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click on any domain or go to **Workers & Pages**
3. Find **Account ID** in the right sidebar
4. Copy the Account ID

#### API Token
1. Go to [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use the **Edit Cloudflare Workers** template, OR create custom token with:
   - **Permissions:**
     - Account → Cloudflare Pages → Edit
     - Account → Account Settings → Read
     - User → User Details → Read
   - **Account Resources:** Include your account
4. Click **Continue to summary** → **Create Token**
5. Copy the token (shown only once!)

### 4. Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add the following **Repository secrets**:

| Secret Name | Value |
|-------------|-------|
| `CLOUDFLARE_API_TOKEN` | Your API token from step 3 |
| `CLOUDFLARE_ACCOUNT_ID` | Your Account ID from step 3 |

Add the following **Repository variables** (optional):

| Variable Name | Value |
|---------------|-------|
| `CLOUDFLARE_PROJECT_NAME` | Your Cloudflare Pages project name (default: `portfolio`) |
| `SITE_URL` | Your production URL (e.g., `https://yourname.pages.dev`) |

### 5. Trigger Deployment

Push to `main` or manually trigger the workflow:

```bash
git push origin main
```

Or go to **Actions** → **Deploy to Cloudflare Pages** → **Run workflow**

## Custom Domain

1. Go to Cloudflare Pages → Your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `portfolio.yourdomain.com`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (usually < 5 minutes)

## Environment Variables

Build-time environment variables can be added in `.github/workflows/deploy.yml`:

```yaml
- name: Build
  run: npm run build
  env:
    NEXT_PUBLIC_SITE_URL: ${{ vars.SITE_URL }}
    NEXT_PUBLIC_ANALYTICS_ID: ${{ vars.ANALYTICS_ID }}
```

## Troubleshooting

### Build fails with "output: export" errors
Some Next.js features aren't compatible with static export:
- `getServerSideProps` → Use `getStaticProps` instead
- `next/image` optimization → Set `images.unoptimized: true` (already configured)
- API routes → Not supported in static export

### Deployment succeeds but site shows old content
Cloudflare caches aggressively. Try:
1. Cloudflare Dashboard → Pages → Your project → **Deployments**
2. Click the latest deployment → **Retry deployment**
3. Or purge cache: **Caching** → **Configuration** → **Purge Everything**

### Preview URLs not working
Ensure the `GITHUB_TOKEN` has write permissions:
- Check workflow permissions in repo settings
- The `permissions` block in workflow files should include `deployments: write`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (generates `out/` directory)
npm run build

# Preview production build locally
npx serve out
```

## File Structure

```
.github/
├── workflows/
│   ├── deploy.yml    # Production deployment
│   ├── preview.yml   # PR preview deployments
│   └── ci.yml        # CI checks for PRs
next.config.ts        # Static export configuration
out/                  # Build output (gitignored)
```
