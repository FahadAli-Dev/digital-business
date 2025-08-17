# 📌 Digital Business

A modern, responsive, and animated web application built with **Next.js 15**, **React 19**, and **custom CSS modules**. This project demonstrates professional frontend development practices with perfect design, smooth animations, and modular component structure.

---

## 🌍 Live Demo

🔗 [https://digital-business-rho.vercel.app/](https://digital-business-rho.vercel.app/)

---

## 🚀 Features

- **Next.js 15 (App Router)** for optimized routing and server rendering.
- **React 19** with the latest features.
- **Custom CSS Modules** for component‑level styling.
- **Responsive Layout** – optimized for mobile, tablet, and desktop.
- **Animated UI** using `motion` for smooth transitions.
- **Image Optimization** with Next.js `<Image />` component.
- **Interactive Slider** using `react-slick` and `slick-carousel`.
- **SEO‑friendly** with Next.js best practices.
- **Deployed on Vercel** for global performance.

---

## 📂 Project Structure

```
📦 digital-business
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📜 layout.js          # Root layout file
 ┃ ┃ ┣ 📜 page.jsx           # Homepage entry
 ┃ ┃ ┣ 📜 page.module.css    # Page-specific styles
 ┃ ┃
 ┃ ┣ 📂 style
 ┃ ┃ ┗ 📜 global.css         # Global styles
 ┃
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Hero
 ┃ ┃ ┃ ┣ 📜 Hero.jsx
 ┃ ┃ ┃ ┗ 📜 Hero.module.css
 ┃ ┃ ┣ 📂 Navbar
 ┃ ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┃ ┗ 📜 Navbar.module.css
 ┃ ┃ ┣ 📂 Testimonials
 ┃ ┃ ┃ ┣ 📜 Testimonials.jsx
 ┃ ┃ ┃ ┣ 📜 Testimonials.module.css
 ┃ ┃ ┃ ┗ 📂 SlickSlider
 ┃ ┃ ┃   ┣ 📜 SlickSlider.jsx
 ┃ ┃ ┃   ┗ 📜 SlickSlider.module.css
 ┃ ┃ ┣ 📂 BrandingVideo
 ┃ ┃ ┃ ┣ 📜 BrandingVideo.jsx
 ┃ ┃ ┃ ┗ 📜 BrandingVideo.module.css
 ┃ ┃ ┗ ... (other components with same structure)
 ┃
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📜 data.jsx           # Centralized data/config
 ┃ ┃ ┗ 📜 animation.js      # Centralized animation variants
 ┃
 ┣ 📂 public
 ┃ ┣ 📂 images              # Project images/assets
 ┃ ┗ favicon.ico
 ┃
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

> 🔑 Each component has its **own folder** with a `.jsx` file and a `.module.css` file to keep the structure modular and scalable.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** Custom CSS Modules
- **Animations:** [motion](https://motion.dev/)
- **Slider:** [react-slick](https://react-slick.neostack.com/) + slick-carousel
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/digital-business.git
   cd digital-business
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

   Project will be available at: [http://localhost:3000](http://localhost:3000)

4. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

---

## 📦 Dependencies

From `package.json`:

```json
{
  "dependencies": {
    "motion": "^12.23.12",
    "next": "15.4.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-icons": "^5.5.0",
    "react-slick": "^0.31.0",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "eslint": "^9",
    "eslint-config-next": "15.4.2"
  }
}
```

---

## ✨ Author

**Fahad Ali**\
Frontend Developer | Pakistan
📧 [fa6084904@gmail.com](mailto:fa6084904@gmail.com)\
🔗 [LinkedIn Profile](https://www.linkedin.com/in/fahad-ali-759700369/)

---

## 📌 Notes

- This project follows **best industry practices** for folder structure, styling, and component modularity.
