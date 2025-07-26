# 🚀 GitHub Deployment Guide for ClickStorm

## 📁 Your Website Files

You now have **two complete versions** of your ClickStorm website:

1. **Next.js Framework Version** - Complete project in `copywriter-template/` folder
2. **Standalone HTML Version** - Single file: `clickstorm-standalone.html`

## 🌐 Option 1: Deploy Standalone HTML to GitHub Pages (Easiest)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+" button** in top right → **"New repository"**
3. Repository name: `clickstorm-website` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

### Step 2: Upload Your Website

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop `clickstorm-standalone.html` into the upload area
3. **Important**: Rename it to `index.html` (this is required for GitHub Pages)
4. Scroll down, add commit message: "Add ClickStorm website"
5. Click **"Commit changes"**

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** tab
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**

### Step 4: Access Your Live Website

🎉 **Your website will be live at**: `https://yourusername.github.io/clickstorm-website`

(Replace `yourusername` with your GitHub username)

## 🌐 Option 2: Deploy Full Next.js Project to GitHub Pages

### Step 1: Create Repository

1. Follow **Step 1** from Option 1 above
2. Clone or download this entire `copywriter-template` folder to your computer

### Step 2: Push Project to GitHub

**Using GitHub Desktop (Recommended):**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click **"Add an Existing Repository from your Hard Drive"**
4. Select your `copywriter-template` folder
5. Click **"Publish repository"**
6. Make sure it's **Public** and click **"Publish Repository"**

**Using Command Line:**
```bash
cd copywriter-template
git init
git add .
git commit -m "Initial ClickStorm website"
git branch -M main
git remote add origin https://github.com/yourusername/clickstorm-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Follow **Step 3** from Option 1 above
2. Wait 5-10 minutes for deployment

## 🛠️ Easy Customization Guide

### Update Your Content

**For Standalone HTML Version:**
1. Edit `index.html` directly in GitHub
2. Click the **pencil icon** to edit
3. Make your changes
4. Scroll down and commit changes

**For Next.js Version:**
1. Edit `src/config/site.ts` for all your content
2. Commit and push changes

### Quick Edits You Can Make:

```javascript
// In the HTML file or config file, update these:
name: "Your Business Name",
tagline: "Your New Tagline",
typingText: "Your Headline Here",

// Services:
{
  title: "Your Service",
  description: "Your description",
  icon: "🎯" // Any emoji
}

// Colors (in CSS section):
--primary-color: #40C6FF;     // Change this hex code
--accent-color: #00B4D8;      // Change this hex code
```

## 🎨 Free Custom Domain (Optional)

### Option 1: Free Subdomain

GitHub gives you: `yourusername.github.io/clickstorm-website`

### Option 2: Custom Domain

1. Buy a domain from [Namecheap](https://namecheap.com) (~$10/year)
2. In your GitHub repository, go to **Settings** → **Pages**
3. Add your custom domain (e.g., `clickstorm.com`)
4. Update your domain's DNS settings (GitHub provides instructions)

## 📊 Analytics & Tracking (Optional)

### Add Google Analytics

1. Create [Google Analytics](https://analytics.google.com) account
2. Get your tracking ID (e.g., `G-XXXXXXXXXX`)
3. Add this code before `</head>` in your HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📧 Lead Capture Integration

### Option 1: Formspree (Free)

1. Go to [Formspree.io](https://formspree.io)
2. Create free account
3. Get your form endpoint
4. Update your forms:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <button type="submit">Get Started</button>
</form>
```

### Option 2: Netlify Forms (If using Netlify)

Simply add `netlify` attribute to your forms:

```html
<form netlify>
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <button type="submit">Get Started</button>
</form>
```

## 🚀 Advanced Deployment Options

### Netlify (Recommended for Advanced Features)

1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub account
3. Click **"New site from Git"**
4. Choose your GitHub repository
5. Deploy automatically!

**Benefits:**
- Custom domains
- Form handling
- Analytics
- Faster global CDN

### Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Import your GitHub repository
4. Deploy with one click!

## 🔧 Troubleshooting

### Common Issues:

**Website not loading:**
- Make sure file is named `index.html`
- Check that GitHub Pages is enabled
- Wait 5-10 minutes after making changes

**Images not showing:**
- Use full URLs for images
- Make sure images are uploaded to repository

**Forms not working:**
- Set up Formspree or Netlify forms
- Add proper form action URLs

## 📞 Need Help?

If you need assistance:
1. Check GitHub's [Pages documentation](https://docs.github.com/en/pages)
2. Watch GitHub Pages tutorials on YouTube
3. GitHub support is very responsive

## 🎯 Next Steps

1. ✅ Deploy your website using Option 1 (easiest)
2. ✅ Test all pages and forms
3. ✅ Set up analytics (optional)
4. ✅ Configure lead capture forms
5. ✅ Share your live website URL!

---

**🎉 Congratulations! Your ClickStorm website is now live and ready to generate leads!**

**Live Website**: `https://yourusername.github.io/clickstorm-website`

*Update this with your actual URL once deployed.*
