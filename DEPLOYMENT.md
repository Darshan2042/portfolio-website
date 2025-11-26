# 🚀 Deployment Guide - Darshan Pawar Portfolio

## 📧 Step 1: Setup EmailJS (For Contact Form)

### 1.1 Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 1.2 Create Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider (Gmail recommended)
3. Connect your email account
4. Note down the **Service ID**

### 1.3 Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Contact: {{contact_info}}

Message:
{{message}}
```

3. Save and note down the **Template ID**

### 1.4 Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with your user ID)
3. Copy it

### 1.5 Update .env File
Open `.env` file and replace with your actual values:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## 🌐 Step 2: Deploy to Netlify (Recommended)

### 2.1 Prepare for Deployment
```powershell
# Build the project
npm run build
```

### 2.2 Deploy to Netlify

#### Option A: Drag & Drop (Easiest)
1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up/Login with GitHub
3. Drag the `dist` folder to Netlify's deploy area
4. Wait for deployment to complete

#### Option B: GitHub Integration (Recommended for Auto-Deploy)
1. Push your code to GitHub:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to Netlify → **Add new site** → **Import from Git**
3. Choose GitHub and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** Add your EmailJS keys

5. Click **Deploy site**

### 2.3 Add Environment Variables on Netlify
1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Trigger a redeploy

### 2.4 Configure Custom Domain (Optional)
1. Go to **Domain settings**
2. Add your custom domain
3. Update DNS settings as instructed

---

## 🎯 Alternative: Deploy to Vercel

### 3.1 Install Vercel CLI
```powershell
npm install -g vercel
```

### 3.2 Deploy
```powershell
vercel
```

Follow the prompts and add environment variables when asked.

Or deploy via Vercel Dashboard:
1. Go to [https://vercel.com/](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables
4. Deploy

---

## 🔥 Alternative: Deploy to GitHub Pages

### 4.1 Update vite.config.mjs
Add base URL:
```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/'
})
```

### 4.2 Install gh-pages
```powershell
npm install --save-dev gh-pages
```

### 4.3 Update package.json
Add these scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4.4 Deploy
```powershell
npm run deploy
```

### 4.5 Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Select `gh-pages` branch
3. Save

---

## ✅ Testing Before Deployment

### Test Contact Form Locally
1. Add your EmailJS credentials to `.env`
2. Run the dev server:
```powershell
npm run dev
```
3. Go to Contact page
4. Fill the form and submit
5. Check your email for the message

### Test Production Build Locally
```powershell
npm run build
npm run preview
```

---

## 📝 Post-Deployment Checklist

- [ ] EmailJS working (test contact form)
- [ ] All images loading correctly
- [ ] All links working (GitHub, LinkedIn, etc.)
- [ ] Responsive on mobile devices
- [ ] All pages accessible
- [ ] SEO meta tags configured
- [ ] Favicon showing
- [ ] Custom domain configured (if applicable)

---

## 🛠️ Troubleshooting

### Contact Form Not Working
- Check EmailJS credentials in environment variables
- Verify EmailJS service is active
- Check browser console for errors

### Images Not Loading
- Ensure all images are in `public/` folder
- Check file paths are correct (case-sensitive)
- Verify images uploaded to deployment

### Build Errors
```powershell
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎉 Your Portfolio is Live!

Your portfolio will be accessible at:
- **Netlify:** `https://your-site-name.netlify.app`
- **Vercel:** `https://your-project.vercel.app`
- **GitHub Pages:** `https://yourusername.github.io/repo-name`

---

## 📧 Support

If you need help, check:
- EmailJS Docs: https://www.emailjs.com/docs/
- Netlify Docs: https://docs.netlify.com/
- Vite Docs: https://vitejs.dev/guide/
