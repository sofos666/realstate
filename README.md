# For Sale: 15,000 m² Land in La Clara, Ebéjico (Colombia) - Landing Page

This is a modern, responsive, and interactive single-page application built to showcase a 15,000 m² plot of land for sale in La Clara, Ebéjico, Antioquia, Colombia. The landing page is designed to provide potential buyers with a comprehensive and engaging overview of the property.

**Note:** This project is a static web application built with React, TypeScript, and Tailwind CSS, without a traditional build setup (like Webpack or Vite). It relies on modern browser capabilities and an environment that can handle ESM and JSX transformation on the fly.

## ✨ Live Demo

A live version of this project can be viewed here after deployment: **`https://<your-github-username>.github.io/<your-repo-name>/`**

*(You need to deploy it to your own GitHub Pages to see it live. See instructions below.)*

## 🚀 Features

-   **Fully Responsive Design:** Looks great on desktops, tablets, and mobile devices.
-   **Engaging Hero Section:** A compelling header and an introductory aerial video.
-   **Interactive 360° Panorama:** An immersive panorama viewer (using Pannellum.js) allows users to explore the property virtually.
-   **Dynamic Image Gallery:** Showcases high-quality images of the land with smooth hover and on-scroll animations.
-   **Detailed Specifications:** Clearly lists the key features of the land with custom icons.
-   **Performance Optimized:**
    -   Lazy loading for the interactive Google Map to improve initial page load speed.
    -   On-scroll animations powered by the `IntersectionObserver` API for a smooth user experience without performance penalties.
-   **Clear Call-to-Action:** Provides easy-to-use contact buttons, including direct links to WhatsApp.
-   **Modern Tech Stack:** Built with React, TypeScript, and styled with Tailwind CSS for a clean and maintainable codebase.

## 🛠️ Tech Stack

-   **Frontend:** React, TypeScript
-   **Styling:** Tailwind CSS
-   **360° Viewer:** Pannellum.js
-   **Icons:** Heroicons (via custom SVG components)
-   **Hosting:** GitHub Pages

## 📂 Project Structure

```
.
├── components/          # Reusable React components
│   ├── icons/           # SVG icon components
│   ├── App.tsx          # Main application component
│   ├── CallToAction.tsx # Contact section
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── HeroVideo.tsx
│   ├── LocationMap.tsx
│   ├── PanoramaViewer.tsx
│   ├── PriceBanner.tsx
│   ├── Specifications.tsx
│   └── StrategicLocation.tsx
├── hooks/
│   └── useIntersectionObserver.ts # Custom hook for on-scroll animations
├── index.html           # The main HTML file
├── index.tsx            # React app entry point
├── metadata.json        # Project metadata
└── README.md            # This file
```

## 🚀 Deployment to GitHub Pages

This project is ready to be deployed directly to GitHub Pages.

1.  **Create a GitHub Repository:**
    Create a new public repository on your GitHub account.

2.  **Push the Code:**
    Push all the files from this project to your new repository.

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
    git push -u origin main
    ```

3.  **Configure GitHub Pages:**
    -   In your repository on GitHub, go to the **Settings** tab.
    -   In the left sidebar, navigate to the **Pages** section.
    -   Under "Build and deployment", for the **Source**, select **"Deploy from a branch"**.
    -   Under "Branch", select your `main` branch and the `/(root)` folder.
    -   Click **Save**.

4.  **Done!**
    GitHub will now build and deploy your site. After a minute or two, your landing page will be live at the URL shown in the GitHub Pages settings (e.g., `https://<your-github-username>.github.io/<your-repo-name>/`).

## 📄 License

This project is licensed under the MIT License.
