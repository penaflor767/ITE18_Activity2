# Northstar Student Hub

A responsive Nuxt student information website demonstrating reusable Vue components and props, styled with Tailwind CSS.

The interface uses the P&P Logistics-inspired midnight navy, orange, and cyan palette.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Nuxt. Use `npm run build` to create a production build.

## Project structure

```text
app/
  app.vue
  assets/css/main.css
  components/
    AppButton.vue
    AppFooter.vue
    AppHeader.vue
    InfoCard.vue
    StudentCard.vue
  layouts/default.vue
  pages/
    index.vue
    students.vue
public/
  favicon.svg
screenshots/
  homepage.png
  project-structure.png
  students-page.png
.gitignore
nuxt.config.ts
tailwind.config.js
package.json
package-lock.json
```

The shared default layout places the same header and footer around each route. Pages own the displayed content and pass student, title, description, label, and color values to their reusable child components through props.
