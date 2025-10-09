# Vishnuvarthan Portfolio

A clean, modern portfolio website built with React and vanilla CSS.

## Project Structure

```
├── App.tsx                    # Main application component
├── components/                # React components
│   ├── HeroSection.tsx       # Hero section with name and contact buttons
│   ├── AboutSection.tsx      # About me section
│   ├── SkillsSection.tsx     # Technical skills with images
│   ├── ExperienceSection.tsx # Professional experience
│   ├── ProjectsSection.tsx   # Projects showcase
│   ├── EducationSection.tsx  # Education and academic performance
│   ├── AchievementsSection.tsx # Achievements and certifications
│   └── ContactSection.tsx    # Contact information
├── styles/
│   ├── globals.css           # Global CSS variables and base styles
│   └── portfolio.css         # Main stylesheet for the portfolio
├── utils/
│   └── dataUtils.js          # Simple data fetching utility
└── public/
    └── portfolio-data.json   # Portfolio data source
```

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- 🚀 Fast loading with simple architecture
- 📊 Dynamic content from JSON
- ✨ Smooth hover animations
- 🎯 Professional blue accent color (#007BFF)

## Data Management

All portfolio content is stored in `public/portfolio-data.json`. Simply edit this file to update:
- Personal information
- Skills with images
- Work experience
- Projects
- Education details
- Achievements and certifications

## Styling

The project uses vanilla CSS with:
- CSS custom properties for theming
- Flexbox and Grid for layouts
- Smooth transitions and hover effects
- Mobile-first responsive design

## Usage

1. Update `public/portfolio-data.json` with your information
2. Customize colors and styling in `styles/portfolio.css`
3. The application will automatically load and display your data

No complex build processes or error handling - just simple, clean code for beginners to understand and modify.