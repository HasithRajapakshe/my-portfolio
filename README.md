# Hasith Rajapakshe — Portfolio

A premium, modern developer portfolio built with React, Vite, and Tailwind CSS. Designed for AI/ML engineers, software engineers, and fintech professionals.

**Live:** [https://hasithrajapakshe.github.io/my-portfolio/](https://hasithrajapakshe.github.io/my-portfolio/)

---

## Tech Stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Framework  | React 19 + Vite                         |
| Styling    | Tailwind CSS v4                         |
| Animations | Framer Motion                           |
| Icons      | Lucide React                            |
| Deployment | GitHub Pages via GitHub Actions          |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav with active tracking
│   │   └── Footer.jsx          # Footer with dynamic year
│   ├── sections/
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # Bio & focus areas
│   │   ├── Experience.jsx      # Professional timeline
│   │   ├── FeaturedProjects.jsx # Featured project cards
│   │   ├── Projects.jsx        # All projects with filtering
│   │   ├── Research.jsx        # Research section
│   │   ├── Skills.jsx          # Categorized skills
│   │   ├── Achievements.jsx    # Awards & recognition
│   │   ├── Certifications.jsx  # Certificate grid
│   │   ├── Education.jsx       # Academic background
│   │   └── Contact.jsx         # Contact links
│   └── ui/
│       ├── SectionHeader.jsx   # Reusable section header
│       ├── ProjectCard.jsx     # Project card component
│       ├── CertificateCard.jsx # Certificate card
│       ├── TechBadge.jsx       # Technology tag
│       ├── Button.jsx          # Reusable button
│       └── SocialLink.jsx      # Social icon link
├── data/                       # ← EDIT THESE FILES TO UPDATE CONTENT
│   ├── profile.js              # Personal info, bio, social links
│   ├── experience.js           # Work experience
│   ├── projects.js             # All projects
│   ├── skills.js               # Skill categories
│   ├── certifications.js       # Certificates
│   ├── achievements.js         # Awards
│   ├── education.js            # Academic info
│   └── research.js             # Research projects
├── App.jsx
├── main.jsx
└── index.css                   # Design system & Tailwind config

public/
├── images/
│   ├── profile/                # Profile photos
│   ├── projects/               # Project screenshots
│   ├── certificates/           # Certificate images
│   └── achievements/           # Achievement images
├── resume/
│   └── Hasith-Rajapakshe-Resume.pdf
└── favicon.svg
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## How to Add a New Project

1. **Add a project screenshot** (optional) to `public/images/projects/`:
   ```
   public/images/projects/my-project.webp
   ```

2. **Add one object** to `src/data/projects.js`:
   ```js
   {
     id: "my-project",
     title: "My New Project",
     shortDescription: "Brief one-liner description.",
     description: "Detailed description of the project.",
     category: "AI / ML",           // Must match a value in projectCategories
     tags: ["Python", "FastAPI"],
     image: "/my-portfolio/images/projects/my-project.webp",  // or null
     github: "https://github.com/...",  // or null
     live: "https://...",               // or null
     featured: true,                    // true = shows in Featured Projects
     award: null,                       // or "1st Place – Event Name"
   }
   ```

3. **Push to GitHub** — the site redeploys automatically.

> **No component editing is needed.** The sections render from data files.

---

## How to Add a Certificate

1. **Add certificate image** (optional) to `public/images/certificates/`:
   ```
   public/images/certificates/my-cert.webp
   ```

2. **Add one object** to `src/data/certifications.js`:
   ```js
   {
     id: "my-cert",
     title: "Certificate Title",
     issuer: "Issuing Organization",
     date: "Month Year",
     image: "/my-portfolio/images/certificates/my-cert.webp",  // or null
     credentialUrl: "https://credential-link.com",             // or null
   }
   ```

3. **Commit and push.**

---

## How to Update Skills

Edit `src/data/skills.js`. Add/remove items in any category, or add a new category:

```js
{
  category: "New Category",
  items: ["Skill 1", "Skill 2"],
}
```

---

## How to Update Experience

Edit `src/data/experience.js`. Add a new object to the array:

```js
{
  id: "unique-id",
  role: "Job Title",
  company: "Company Name",
  location: "City, Country",
  period: "Month Year – Month Year",
  project: "Project Name",           // optional
  description: "What you did.",
  highlights: ["Achievement 1", "Achievement 2"],
  technologies: ["React", "Node.js"],
}
```

---

## How to Replace Resume

Replace the file at:
```
public/resume/Hasith-Rajapakshe-Resume.pdf
```

Keep the same filename, or update `resumeUrl` in `src/data/profile.js`.

---

## Deployment

This portfolio deploys automatically via **GitHub Actions** on every push to `main`.

### Setup (one-time)

1. Go to your repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow runs automatically

### Manual Deploy

Go to **Actions → Deploy Portfolio to GitHub Pages → Run workflow**

---

## Troubleshooting

| Issue                         | Solution                                             |
| ----------------------------- | ---------------------------------------------------- |
| Images not loading on Pages   | Ensure paths start with `/my-portfolio/`              |
| Build fails                   | Run `npm run build` locally and fix errors            |
| Blank page after deploy       | Check `base` in `vite.config.js` is `/my-portfolio/`  |
| Styles not applying           | Ensure `@import "tailwindcss"` is in `src/index.css`  |
| GitHub Actions not triggering | Ensure Pages source is set to "GitHub Actions"        |

---

## License

© Hasith Rajapakshe. All rights reserved.
