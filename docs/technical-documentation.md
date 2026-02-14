# Technical Documentation

## Project Overview
This is a simple responsive personal portfolio website built with HTML, CSS, and JavaScript. It includes About, Projects, and Contact sections, plus small interactive features.

## Technologies Used
- HTML5: Page structure and semantic sections
- CSS3: Styling, layout (Grid/Flexbox), responsive design (media queries)
- JavaScript: Theme toggle, time-based greeting, and contact form validation

## Folder Structure
- index.html: Main page
- css/styles.css: All styles including responsive rules
- js/script.js: Interactivity and validation logic
- assets/images/: Image folder (placeholder file included)
- docs/: Documentation files for AI usage and technical details

## Key Features
1. Responsive Layout
- Uses CSS Grid for the hero and project cards.
- Uses media queries to switch to single-column layout on smaller screens.

2. Interactivity
- Theme toggle (dark/light) stored in localStorage.
- Greeting message based on time of day.
- Contact form validation with user feedback (no backend).

## How to Run Locally
Option A (Simple):
1. Download the repository as a ZIP
2. Extract it
3. Open index.html in a browser

Option B (Recommended):
1. Clone the repository
2. Open the folder in VS Code
3. Run using a simple live server extension (optional)

## Testing Checklist
- Resize the browser (desktop/tablet/mobile)
- Test theme toggle button
- Submit form with missing/invalid data and confirm errors appear
- Submit form with valid inputs and confirm success message
