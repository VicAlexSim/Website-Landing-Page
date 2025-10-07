# Victor Sim's Portfolio Website

A modern, minimal portfolio website built with HTML5, CSS3, and JavaScript, inspired by Apple's design principles.

## 🚀 Features

- **Modern Design**: Clean, minimal interface inspired by Apple's design language
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Easy to Manage**: Simple structure for easy content updates
- **Blog Ready**: Built-in blog system for sharing thoughts and insights
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
html5up-solid-state/
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   └── main-backup.css   # Original template backup
│   └── js/
│       ├── main.js           # Main JavaScript functionality
│       └── ...               # Other JS files
├── blog/
│   └── index.html            # Blog page
├── images/                   # All images and assets
├── index.html               # Main portfolio page
└── PORTFOLIO_README.md      # This file
```

## 🎨 Design Philosophy

The website follows a minimal, modern design approach with:

- **Typography**: Inter font family for clean, readable text
- **Color Scheme**: 
  - Primary: #007aff (Apple Blue)
  - Text: #1d1d1f (Dark Gray)
  - Secondary Text: #6e6e73 (Light Gray)
  - Background: #ffffff (White) / #f5f5f7 (Light Gray)
- **Spacing**: Generous white space for breathing room
- **Animations**: Subtle, purposeful animations that enhance UX
- **Cards**: Clean card-based layout for content organization

## 📝 Adding New Content

### Adding New Projects

1. Open `index.html`
2. Find the `.projects-grid` section
3. Add a new `.project-card` with the following structure:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-image.jpg" alt="Project Name" />
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="live-demo-url" class="project-link">Live Demo</a>
            <a href="github-url" class="project-link">View Code</a>
        </div>
    </div>
</div>
```

### Adding New Blog Posts

1. Open `blog/index.html`
2. Find the `.blog-grid` section
3. Add a new `.blog-card` with the following structure:

```html
<article class="blog-card">
    <div class="blog-meta">
        <span class="blog-date">Date</span>
        <span class="blog-category">Category</span>
    </div>
    <h2>Blog Post Title</h2>
    <p>Blog post excerpt...</p>
    <a href="blog-post-url" class="blog-link">Read More</a>
</article>
```

### Updating Personal Information

1. **About Section**: Update the `.about-text` content in `index.html`
2. **Experience**: Modify the `.experience-timeline` section
3. **Contact Info**: Update the `.contact-details` section
4. **Social Links**: Update the `.footer-links` section

## 🎯 Key Sections

### Hero Section
- Personal introduction
- Professional title
- Call-to-action buttons
- Profile image

### About Section
- Personal story
- Skills showcase
- Professional background

### Experience Section
- Work experience timeline
- Research projects
- Internships and achievements

### Projects Section
- Featured projects
- Technology stack
- Live demos and code links

### Blog Section
- Latest blog posts
- Categories and dates
- Easy content management

### Contact Section
- Contact form
- Social media links
- Professional contact information

## 🛠️ Customization

### Colors
Update the CSS custom properties in `assets/css/main.css`:

```css
:root {
    --primary-color: #007aff;
    --text-color: #1d1d1f;
    --secondary-text: #6e6e73;
    --background: #ffffff;
    --light-background: #f5f5f7;
}
```

### Typography
Change the font family in the CSS:

```css
body {
    font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Animations
Modify or disable animations in the CSS and JavaScript files.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🚀 Deployment

This website is designed to work with GitHub Pages:

1. Push your changes to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as the source
4. Your site will be available at `https://yourusername.github.io/repository-name`

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This portfolio is based on the Solid State template by HTML5 UP, modified and customized for Victor Sim's personal use.

## 🤝 Contributing

This is a personal portfolio website. If you'd like to use this as a template for your own portfolio, feel free to fork and customize it!

## 📞 Contact

- **Email**: vikktorasim@gmail.com
- **LinkedIn**: [linkedin.com/in/victorasim](https://www.linkedin.com/in/victorasim/)
- **GitHub**: [github.com/VicAlexSim](https://github.com/VicAlexSim/)

---

*Last updated: September 2024*
