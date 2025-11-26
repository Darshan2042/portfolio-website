# 🚀 Quick Start Guide

## ✅ What You Need to Do

### 1. Setup Email Notifications (Contact Form)

**Go to EmailJS:** https://www.emailjs.com/

1. **Create Free Account** (takes 2 minutes)
2. **Add Email Service:**
   - Click "Email Services" → "Add New Service"
   - Choose Gmail (or your email provider)
   - Connect your email
   - Copy the **Service ID** (looks like: `service_xxxxxx`)

3. **Create Email Template:**
   - Click "Email Templates" → "Create New Template"
   - Set subject: `New Contact from {{from_name}} - {{subject}}`
   - Set content:
   ```
   You received a new message from your portfolio!
   
   Name: {{from_name}}
   Contact: {{contact_info}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
   - Save and copy **Template ID** (looks like: `template_xxxxxx`)

4. **Get Public Key:**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update .env file:**
   Open `.env` and paste your values:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 2. Test Locally

```powershell
npm run dev
```

- Open http://localhost:5173/contact
- Fill the contact form
- Click Send
- Check your email! 📧

---

## 🌐 Deploy Your Website

### Option 1: Netlify (Easiest - Recommended)

1. **Build your project:**
   ```powershell
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Drag the `dist` folder into Netlify

3. **Add Environment Variables:**
   - Go to Site settings → Environment variables
   - Add your 3 EmailJS variables
   - Redeploy

**Done! Your site is live! 🎉**

### Option 2: Vercel

```powershell
npm install -g vercel
vercel
```

Follow prompts and add environment variables when asked.

### Option 3: GitHub Pages

1. Update `vite.config.mjs`:
   ```js
   base: '/your-repo-name/'
   ```

2. Install and deploy:
   ```powershell
   npm install --save-dev gh-pages
   npm run build
   npx gh-pages -d dist
   ```

3. Enable Pages in GitHub repo settings

---

## ✅ Checklist Before Deployment

- [ ] EmailJS credentials added to `.env`
- [ ] Contact form tested locally
- [ ] All images placed in `public/` folder
- [ ] Build runs without errors: `npm run build`
- [ ] Environment variables added to deployment platform
- [ ] Custom domain configured (optional)

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check `.env` file has correct EmailJS values
- Verify EmailJS service is active
- Check browser console for errors

**Images not loading?**
- Files must be in `public/` folder
- Use correct paths: `/image.jpg` not `./image.jpg`
- Check filename case (case-sensitive)

**Build errors?**
```powershell
rm -rf node_modules dist
npm install
npm run build
```

---

## 📞 Need Help?

Check the full guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**That's it! Your portfolio will receive contact form messages via email! 🎉**
