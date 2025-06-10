# CubeKit Website

A marketing website for CubeKit - Premium components for Cube.dev applications.

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will be here]

## 📋 Features

- **Modern Design**: Built with Tailwind CSS and DaisyUI
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Live previews and demonstrations
- **Comprehensive Documentation**: Complete API reference and examples
- **Email Capture**: Integrated Kit.com waitlist form
- **Theme Support**: Official CubeKit DaisyUI theme

## 🏗️ Project Structure

```
cubekit-website/
├── index.html              # Main landing page
├── docs.html               # Documentation page
├── styles.css              # Custom CSS and CubeKit theme
├── script.js               # JavaScript functionality
├── logo.svg                # CubeKit logo
├── favicon.ico             # Website favicon
├── screenshots/            # Component screenshots
│   ├── schema-visualizer.png
│   └── [other component screenshots]
└── README.md               # This file
```

## 🚀 GitHub Pages Deployment

### Method 1: Deploy from main branch

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/yourusername/cubekit-website.git
   cd cubekit-website
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your website**
   - Your site will be available at: `https://yourusername.github.io/cubekit-website/`
   - It may take a few minutes for the site to be live

### Method 2: Deploy from docs folder

If you prefer to keep source files separate:

1. Create a `docs/` folder and move all HTML/CSS/JS files there
2. In GitHub Pages settings, select **main** branch and **/docs** folder
3. Your site structure would be:
   ```
   cubekit-website/
   ├── docs/
   │   ├── index.html
   │   ├── docs.html
   │   ├── styles.css
   │   └── ...
   ├── src/              # Source files (optional)
   └── README.md
   ```

## 🛠️ Local Development

To run the website locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cubekit-website.git
   cd cubekit-website
   ```

2. **Serve the files**
   
   Using Python (if installed):
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (if installed):
   ```bash
   npx serve .
   ```
   
   Using PHP (if installed):
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`

## 📝 Customization

### Update Content
- Edit `index.html` for the main landing page
- Edit `docs.html` for the documentation
- Modify `styles.css` for custom styling

### Replace Logo
- Replace `logo.svg` with your own logo
- Update the favicon by replacing `favicon.ico`

### Update Kit.com Form
- Replace the form code in `index.html` with your own Kit.com form
- Update the form ID and data attributes

### Add Screenshots
- Add component screenshots to the `screenshots/` folder
- Update image references in the documentation

## 🎨 Theme Customization

The website uses the official CubeKit DaisyUI theme. To customize:

1. **Edit theme colors** in `styles.css`:
   ```css
   [data-theme="cubekit"] {
     --p: 210 11% 20%;     /* Primary color */
     --s: 147 100% 12%;    /* Secondary color */
     --a: 142 76% 36%;     /* Accent color */
     /* ... other theme variables */
   }
   ```

2. **Switch themes** by changing the `data-theme` attribute in HTML files

## 🔧 Technical Details

### Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **Kit.com**: Email capture and automation
- **Inter Font**: Google Fonts integration

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance
- Optimized images and assets
- CDN delivery for frameworks
- Minimal JavaScript for fast loading

## 📞 Support

For questions about CubeKit components or this website:

- **Email**: [your-email@domain.com]
- **GitHub**: [Your GitHub profile]
- **Website**: [Your main website]

## 📄 License

This website template is open source. CubeKit components require a commercial license.

---

Built with ❤️ for the Cube.dev community 