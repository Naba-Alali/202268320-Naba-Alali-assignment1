# Technical Documentation

## Project Overview
This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The main purpose of this assignment is to demonstrate foundational front-end development skills, apply responsive design principles, and implement basic client-side interactivity.
The website includes three main sections: an introduction (About Me), a Projects section showcasing academic course projects, and a Contact section with client-side form validation. The design supports both light and dark themes and ensures usability across different screen sizes.

## Technologies Used
- HTML: 
    -Used for structuring the webpage.
    -Semantic elements such as <nav>, <header>, <section>, <article>, and <footer> were used to improve structure and readability.
- CSS: 
    -Used for styling and layout.
    -CSS variables were implemented for theme management.
    -CSS Grid and Flexbox were used for layout structure.
    -Media queries were used to ensure responsiveness.
- JavaScript: 
    -Used for theme toggling (light/dark mode).
    -Used for displaying a time-based greeting.
    -Used to open and close a modal window for project details.
    -Used to implement client-side form validation.
- Git & GitHub:
    -Used for version control and repository management.

## Folder Structure
- index.html: Main page
- css/styles.css: Styling, themes, and responsive layout
- js/script.js: Interactivity and validation logic
- assets/images/: Project screenshots
- docs/ : Documentation files for AI usage and technical details
   ├── ai-usage-report.md
   └── technical-documentation.md
- README.md: General project documentation



## Layout and Responsive Design
The layout was implemented using modern CSS techniques.

### Grid Layout
    - CSS Grid is used for structuring the hero section.
    - CSS Grid is also used for displaying project cards in two columns on larger screens.

### Flexbox Layout
    - Navigation bar alignment
    - Button grouping
    - Contact form layout
    - Footer alignment

### Responsive Behavior
Media queries were implemented to ensure the layout adapts to smaller screens.
Example behavior:
    - On screens below 900px, the hero section switches to a single-column layout.
    - Project cards stack vertically on smaller devices.

The website was tested by resizing the browser window and using Chrome DevTools mobile simulation. No layout breaking or horizontal scrolling occurs on smaller screens.

## Theme System (Light and Dark Mode)
The project supports both light and dark themes.
    - Dark theme variables are defined inside the :root selector.
    - Light theme overrides are defined using [data-theme="light"].
    - JavaScript dynamically switches themes by modifying the data-theme attribute.
    - The selected theme is saved using localStorage to preserve user preference.

This approach improves user experience and demonstrates understanding of dynamic styling.




## Key Features
### Responsive Layout
    - Fully responsive across desktop, tablet, and mobile devices.
    - No layout breaking on smaller screens.
    - Clean content stacking on mobile.

### Project Modal
    - Clicking “Details” opens a modal window.
    - Modal content updates dynamically depending on the selected project.
    - Modal can be closed using a button or by clicking outside.

### Time-Based Greeting
    - Displays “Good morning,” “Good afternoon,” or “Good evening” based on system time.

### Contact Form Validation
    - Name must contain at least 2 characters.
    - Email must match a valid pattern using regular expressions.
    - Message must contain at least 5 characters.
    - Displays error messages under invalid inputs.
    - Displays success message upon valid submission.


## Accessibility Considerations
- All images include descriptive alt attributes.
- Semantic HTML elements improve accessibility.
- Buttons use proper type attributes.
- Form labels are correctly linked to input fields.
- Sufficient contrast between text and background in both themes.


## Code Quality Practices
The project follows clean coding standards:
- Consistent indentation and formatting.
- Clear and meaningful class names.
- Logical separation of HTML, CSS, and JavaScript.
- Important sections are commented.
- No unused code or redundant styles.
- No console errors during execution.


## Performance and Compatibility
- The project uses lightweight vanilla JavaScript (no external frameworks).
- CSS and JavaScript are separated into external files.
- Images are locally stored.
- Tested on modern browsers (Chrome, Edge).
- No broken links or script errors.


## How to Run Locally
Option A :
1. Download the repository as a ZIP
2. Extract it
3. Open index.html in a browser

Option B :
1. Clone the repository
2. Open the folder in VS Code
3. Run using a simple live server extension 

## Testing Checklist
The following tests were performed:
- Resized browser for desktop, tablet, and mobile views.
- Verified theme toggle functionality.
- Verified modal open and close behavior.
- Tested form validation with invalid inputs.
- Tested form submission with valid inputs.
- Checked browser console for errors (none found).


## Learning Outcomes
Through this project, I strengthened my understanding of:
- Semantic HTML structure
- CSS Grid and Flexbox layout techniques
- Responsive design implementation
- Theme switching using CSS variables
- JavaScript DOM manipulation and event handling
- Client-side form validation
- Code organization and documentation practices
