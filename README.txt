# ELLIE FOURFOURIS – DIGITAL TEACHING PORTFOLIO WEBSITE

## 1. Overview

This project is a professional teaching portfolio created as part of **Assessment Task 3 (AT3)** for the **Digital Technologies** unit within the **Bachelor of Education (Secondary) / Bachelor of Arts (Design Innovation and Technologies)** degree.

The purpose of the website is to showcase my teaching practice, project work, and resources as a pre-service **Technology and Applied Studies (TAS)** teacher specialising in **Food Technology** and **Textiles**.  
It demonstrates digital literacy, creative design, and programming skills using **HTML**, **CSS**, and **JavaScript**.

---

## 2. Key Features

- Fully responsive website with six linked pages  
- Clear and consistent navigation system  
- Use of semantic HTML for accessibility  
- Responsive layout (desktop, tablet, mobile)  
- Form validation for user interaction and data accuracy  
- Downloadable teaching resources and resume  
- Lightbox image viewer for project gallery  
- JavaScript quote generator on the teaching page  
- Accessible design with alt text and logical heading structure  

---

## 4. Page Descriptions

### 🏠 **Home (index.html)**
- Introduces the portfolio and its purpose.  
- Provides links to all main pages through a top navigation bar.  
- Uses clear, centred layout for readability on all devices.  

### 👩‍🏫 **About (about.html)**
- Includes biography, degree, teaching areas, and professional philosophy.  
- Displays a practicum placement overview table (schools, subjects, year levels, terms).  
- Contains a profile image with alt text for accessibility.  

### 💡 **Teaching (teaching.html)**
- Outlines **core beliefs** and **teaching philosophy**.  
- Includes a JavaScript **quote generator** that displays a random teaching quote when clicked.  
- Highlights focus areas such as explicit instruction, inclusion, and reflection.  

### 🧵 **Projects (projects.html)**
- Features projects from **Textiles** and **Food Technology**.  
- Displays 3 projects per row in a **responsive card grid**.  
- Each card contains:
  - An image thumbnail  
  - Project title and short description  
  - Click-to-enlarge functionality using a **lightbox modal**.  

### 📘 **Resources (resources.html)**
- Provides downloadable teaching materials (PDFs) with thumbnails and summaries.  
- Includes units of work, lesson plans, and activity booklets.  
- Opens each resource in a new tab when clicked.  

### 📄 **Resume (resume.html)**
- Shows a thumbnail preview of the resume.  
- “Download Resume (PDF)” button opens the full document in a new tab.  
- “Show/Hide Details” button reveals extra qualifications:
  - WWCC  
  - First Aid  
  - ASCIA Training  
  - Child Protection  
  - Safe Food Handling  

### 💬 **Contact (contact.html)**
- Interactive contact form with:
  - Full name, email, and message fields.  
  - Placeholder text for guidance.  
  - Submit button (linked to FormSubmit service).  
  - Reset button to clear fields.  
- **Form validation (JavaScript):**
  - Ensures no empty fields.  
  - Checks valid email format.  
  - Displays inline error messages.  
  - Prevents submission until inputs are valid.

---

## 5. How HTML, CSS, and JavaScript Work Together

| Component | Role | Example in Site |
|------------|------|-----------------|
| **HTML (Structure)** | Provides the semantic skeleton of the website: headers, sections, articles, and forms. | `<section class="white-box">` for page content; `<form>` for contact page. |
| **CSS (Presentation)** | Defines styling, layout, colours, spacing, and responsive design using grid and flexbox. | White content boxes match nav width; project grid responsive across devices. |
| **JavaScript (Interactivity)** | Adds behaviour and logic for user interaction. | Quote generator, show/hide resume details, form validation, image lightbox. |

**Integration example:**  
- The teaching quote generator uses:
  - HTML data attributes (`data-quote-btn`, `data-quote-out`)  
  - CSS for button styling  
  - JavaScript for random selection and DOM updates  

Together, these layers form an accessible, responsive, and interactive web application.

---

## 6. User Instructions

### Viewing the Site
1. Open `index.html` in a browser (or access via GitHub Pages).  
2. Use the top navigation bar to move between pages.  

### Using Key Features
- **Teaching Page:** Click “New Quote” for a random motivational quote.  
- **Projects Page:** Click an image to view an enlarged version in a lightbox.  
- **Resources Page:** Click thumbnails to open/download PDF teaching materials.  
- **Resume Page:** Use “Show/Hide Details” to view extra qualifications; click the button to download the PDF.  
- **Contact Page:** Fill out the form → validation checks → click “Submit” to send via FormSubmit.  

---

## 7. Accessibility & Design

- Semantic HTML tags improve screen reader compatibility.  
- Alt text for all images.  
- Logical heading hierarchy.  
- High-contrast text and large buttons for mobile usability.  
- Consistent visual design with clear spacing, alignment, and hierarchy.

---

## 8. Future Improvements

- Optimise image sizes for faster mobile loading.  
- Refactor JavaScript to be more modular and reusable.  
- Add animations or transitions for smoother user experience.  
- Expand resources section with filters or subject tags.  
- Integrate backend database for dynamic content submission.

---

## 9. Tools & Technologies

- **HTML5** – Semantic markup and structure  
- **CSS3** – Layout, colour palette, responsive design  
- **JavaScript (ES6)** – DOM manipulation and event handling  
- **HTML5 UP (Stellar Template)** – Base responsive framework  
- **FormSubmit** – Handles contact form email submission  
- **GitHub Pages** – Web hosting platform for deployment  
- **VS Code** – Development environment  

---

## 10. How to View / Run the Website

### Locally:
1. Download the folder containing all files.  
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.  

### Online (GitHub Pages):
1. Push all files to a **public repository**.  
2. Enable **GitHub Pages** under Settings → Pages → “Deploy from branch (main / root)”.  
3. Access via `https://username.github.io/repository-name/`.

---

## 11. Reflection (Summary)

Developing this website allowed me to integrate **design thinking** and **programming skills**.  
I successfully built a functional, aesthetic, and professional portfolio that demonstrates both my technical and educational competencies.

- **Strengths:** Effective navigation, clear layout, accessibility, responsive design.  
- **Improvement Area:** Simplifying CSS and JavaScript for greater efficiency and reusability.  
- **Learning Outcome:** Deepened understanding of how front-end technologies integrate to produce dynamic, user-friendly digital products.

---

## 12. Credits

- **Template:** *Stellar* by [HTML5 UP](https://html5up.net) – CC BY 3.0  
- **Adaptation & Content:** © 2025 Ellie Fourfouris  
- **Images:** Original project and resource materials for educational use.  

---

*End of Documentation.*

## 3. File Structure

