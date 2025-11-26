# 🔧 Contact Form Troubleshooting

## Common Issues & Solutions

### ❌ "Failed to send" Error

**1. Check Browser Console (F12)**
- Open your browser at http://localhost:5175/contact
- Press F12 to open Developer Tools
- Go to "Console" tab
- Try sending a message
- Look for the error message - it will show exactly what's wrong

**2. Verify EmailJS Configuration**

Check your `.env` file has correct values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Common Mistakes:**
- ❌ Template ID should be `template_xxx` NOT `service_xxx`
- ❌ No spaces or quotes around values
- ❌ Missing `VITE_` prefix

**3. Verify EmailJS Dashboard Settings**

Go to https://dashboard.emailjs.com/

**Check Service:**
- Is your email service connected and active?
- Gmail might need "Allow less secure apps" enabled
- Or use App Password for Gmail

**Check Template:**
- Template must have these variables: `{{from_name}}`, `{{contact_info}}`, `{{subject}}`, `{{message}}`
- Template must be saved and active

**Check Public Key:**
- Go to Account → General
- Copy the EXACT public key (it's a long string)

**4. Test EmailJS Directly**

Open browser console (F12) and run this test:

```javascript
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: 'Test User',
    contact_info: 'test@example.com',
    subject: 'Test Subject',
    message: 'Test message'
  },
  'YOUR_PUBLIC_KEY'
).then(
  (response) => console.log('SUCCESS!', response),
  (error) => console.log('FAILED...', error)
);
```

Replace the values with your actual IDs and run it.

---

## Step-by-Step Fix

### Option 1: Restart Everything

1. **Stop dev server** (Ctrl + C in terminal)
2. **Clear cache:**
   ```powershell
   rm -rf node_modules/.vite
   ```
3. **Restart:**
   ```powershell
   npm run dev
   ```
4. **Hard refresh browser:** Ctrl + Shift + R

### Option 2: Verify Template Variables

Your EmailJS template MUST have exactly these variables:

**Template Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Template Body:**
```
You received a new message!

Name: {{from_name}}
Contact: {{contact_info}}
Subject: {{subject}}

Message:
{{message}}
```

**Important:** Variable names must match EXACTLY (case-sensitive)

### Option 3: Check Email Service Status

1. Go to EmailJS dashboard → Email Services
2. Click on your service
3. Click "Test Connection"
4. If it fails, reconnect your email account

---

## Error Messages Decoded

**"The public key is required"**
→ Public key missing or wrong in `.env`

**"Template not found"**
→ Wrong template ID or template deleted

**"Service not found"**
→ Wrong service ID

**"Bad request"**
→ Template variables don't match

**"Unauthorized"**
→ Public key is incorrect

---

## Quick Test Checklist

- [ ] `.env` file exists in project root
- [ ] All 3 variables are filled (no placeholders)
- [ ] Dev server restarted after editing `.env`
- [ ] Browser cache cleared (Ctrl + Shift + R)
- [ ] EmailJS service is active
- [ ] Template variables match exactly
- [ ] Browser console shows the config values

---

## Still Not Working?

**Share these details:**
1. Open browser console (F12)
2. Try sending a message
3. Copy the error message you see
4. Check what the console shows for "EmailJS Config"
5. Share the error details

**Or use alternative:**
- Use Formspree (formspree.io)
- Use Web3Forms (web3forms.com)
- Use Getform (getform.io)

All are free and easier to set up!
