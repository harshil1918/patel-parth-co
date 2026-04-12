# Patel Parth & Co — Website Deployment Guide
### How to Make Your Website LIVE on the Internet

---

## What You Need

| Item | Purpose | Cost |
|------|---------|------|
| Domain Name | Your website address (e.g., patelparthandco.com) | ~500-1000 INR/year |
| Hosting | Where your website files are stored online | FREE or Paid |
| SSL Certificate | HTTPS security (lock icon in browser) | FREE (auto-included) |

---

## Your Website Files

Your website has only 3 files. Keep them together in one folder:

```
patel-parth-co/
  ├── index.html    (main page)
  ├── style.css     (design & styling)
  └── script.js     (animations & interactions)
```

---

---

# OPTION 1: GitHub Pages (FREE — Recommended)

### Step 1: Create a GitHub Account

1. Go to **https://github.com**
2. Click **"Sign Up"**
3. Enter your email, create a password, choose a username
4. Verify your email
5. Done — you now have a GitHub account

---

### Step 2: Create a New Repository

1. After login, click the **"+"** icon (top-right corner) > **"New repository"**
2. Fill in the details:
   - **Repository name**: `patel-parth-co` (or any name you want)
   - **Description**: Patel Parth & Co Website
   - **Public**: Select "Public" (required for free GitHub Pages)
   - DO NOT check "Add a README file"
3. Click **"Create repository"**

---

### Step 3: Upload Your Files

1. On the new repository page, click **"uploading an existing file"** link
2. Drag and drop all 3 files: `index.html`, `style.css`, `script.js`
3. At the bottom, write a message: "Initial website upload"
4. Click **"Commit changes"**

---

### Step 4: Enable GitHub Pages

1. Go to your repository page
2. Click **"Settings"** (tab at the top)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site is now LIVE at: `https://your-username.github.io/patel-parth-co/`

---

### Step 5: Connect Your Custom Domain (Optional)

1. Buy a domain from GoDaddy/Namecheap/BigRock (e.g., `patelparthandco.com`)
2. In GitHub Pages Settings, under **"Custom domain"**, type: `www.patelparthandco.com`
3. Click **"Save"**
4. Now go to your **domain registrar** (where you bought the domain) and update DNS:

**Add these DNS records:**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | your-username.github.io |

5. Wait 10-30 minutes for DNS to update
6. Back in GitHub Pages settings, check **"Enforce HTTPS"**
7. Done! Your website is live at `https://patelparthandco.com`

---

### How to Update Your Website on GitHub Pages

1. Go to your repository on GitHub
2. Click on the file you want to update (e.g., `index.html`)
3. Click the **pencil icon** (Edit) at top-right
4. Make your changes
5. Click **"Commit changes"**
6. The website updates automatically in 1-2 minutes

---

---

# OPTION 2: Netlify (FREE — Easiest for Beginners)

### Step 1: Create a Netlify Account

1. Go to **https://www.netlify.com**
2. Click **"Sign up"**
3. You can sign up with your **GitHub account** or **email**
4. Complete the signup process

---

### Step 2: Deploy Your Website

**Method A — Drag & Drop (Easiest):**

1. After login, you'll see the Netlify dashboard
2. At the bottom of the page, you'll see a box that says **"Drag and drop your site output folder here"**
3. Open your computer's file explorer
4. Select your project folder (`patel-parth-co`) that contains all 3 files
5. Drag the ENTIRE FOLDER into that box
6. Wait 10-20 seconds
7. Done! Netlify gives you a random URL like: `https://random-name-12345.netlify.app`

**Method B — Connect GitHub (Auto-updates):**

1. Click **"Add new site"** > **"Import an existing project"**
2. Choose **"GitHub"**
3. Authorize Netlify to access your GitHub
4. Select your repository (`patel-parth-co`)
5. Click **"Deploy site"**
6. Wait 1-2 minutes
7. Your site is live! Now every time you update GitHub, Netlify auto-updates too

---

### Step 3: Change Your Site Name

1. Go to **Site settings** > **Domain management**
2. Click **"Options"** next to the random netlify.app name
3. Click **"Edit site name"**
4. Change it to: `patelparthandco` 
5. Now your site is at: `https://patelparthandco.netlify.app`

---

### Step 4: Connect Your Custom Domain (Optional)

1. Go to **Site settings** > **Domain management**
2. Click **"Add custom domain"**
3. Enter: `patelparthandco.com`
4. Click **"Verify"** > **"Add domain"**
5. Netlify will show you DNS records to add

**Go to your domain registrar and add:**

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | your-site-name.netlify.app |

6. Wait 10-30 minutes
7. Netlify automatically provides FREE SSL (HTTPS)
8. Done! Your website is live at `https://patelparthandco.com`

---

### How to Update Your Website on Netlify

**If you used Drag & Drop:**
1. Go to Netlify dashboard > your site
2. Go to **"Deploys"** tab
3. Drag and drop your updated folder again
4. Live in 10 seconds

**If you connected GitHub:**
- Just update files on GitHub — Netlify auto-deploys!

---

---

# OPTION 3: Hostinger (PAID — Professional)

> Best if you want professional email like `parth@patelparthandco.com`

### Step 1: Buy Domain + Hosting

1. Go to **https://www.hostinger.in**
2. Choose **"Premium Web Hosting"** plan (~149 INR/month)
3. During checkout:
   - Select plan duration (12 months recommended for best price)
   - Register a new domain: `patelparthandco.com` (FREE for 1st year with hosting)
4. Complete payment
5. You'll receive login details via email

---

### Step 2: Access Your Hosting Panel

1. Log in to **https://hpanel.hostinger.com**
2. Click on your hosting plan
3. You'll see the **hPanel** dashboard

---

### Step 3: Upload Your Website Files

**Method A — File Manager (Easiest):**

1. In hPanel, click **"File Manager"**
2. Navigate to the folder: `public_html`
3. **Delete** any existing files inside `public_html` (like default index.html)
4. Click **"Upload"** button (top-left)
5. Upload all 3 files: `index.html`, `style.css`, `script.js`
6. Make sure the files are directly inside `public_html/` (not in a subfolder)
7. Done! Your website is live at your domain

**Method B — FTP Upload:**

1. In hPanel, go to **"FTP Accounts"**
2. Note down:
   - FTP Server/Host
   - FTP Username
   - FTP Password
3. Download **FileZilla** (free): https://filezilla-project.org
4. Open FileZilla, enter the FTP details, click **"Quickconnect"**
5. On the right side (server), navigate to `public_html`
6. On the left side (your computer), navigate to your project folder
7. Drag all 3 files to the right side
8. Done!

---

### Step 4: SSL Certificate (HTTPS)

1. In hPanel, go to **"SSL"** section
2. Click **"Install SSL"** on your domain
3. Select **"Free SSL"** (Let's Encrypt)
4. Click **"Install"**
5. Wait 5-10 minutes
6. Your site now works on `https://patelparthandco.com`

---

### Step 5: Setup Professional Email (Bonus)

1. In hPanel, go to **"Emails"**
2. Click **"Create email account"**
3. Enter: `parth@patelparthandco.com`
4. Set a password
5. You can now:
   - Access webmail at: `https://mail.patelparthandco.com`
   - Or connect it to Gmail/Outlook on your phone

---

### How to Update Your Website on Hostinger

1. Log in to hPanel
2. Open **File Manager**
3. Go to `public_html`
4. Click on the file you want to edit (e.g., `index.html`)
5. Click **"Edit"** icon
6. Make changes > **"Save"**
7. Changes are live immediately

---

---

# Quick Comparison Table

| Feature | GitHub Pages | Netlify | Hostinger |
|---------|-------------|---------|-----------|
| Cost | FREE | FREE | ~149 INR/month |
| Custom Domain | Yes (buy separately) | Yes (buy separately) | Included (1st year free) |
| SSL/HTTPS | FREE | FREE | FREE |
| Speed | Fast | Very Fast | Good |
| Professional Email | No | No | Yes |
| Difficulty | Easy | Easiest | Medium |
| Auto Updates | On git push | On git push | Manual upload |
| Storage | 1 GB | 100 GB | 100 GB |
| Best For | Developers | Beginners | Business owners |

---

# My Recommendation

> **For your business (Patel Parth & Co), I recommend:**
>
> **Start with Netlify (FREE)** to test your website live, then later if you want professional email (`parth@patelparthandco.com`), move to **Hostinger**.
>
> Either way, buy a domain name (`patelparthandco.com`) — it costs only ~500-800 INR/year and makes your business look professional.

---

# Need Help?

If you get stuck at any step, just ask and I'll guide you through it!

---

*Document created for Patel Parth & Co*
*Last updated: April 2026*
