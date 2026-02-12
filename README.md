# Age Calculator

A web-based age calculator built as part of the [roadmap.sh Age Calculator Project](https://roadmap.sh/projects/age-calculator). This project demonstrates the use of external NPM packages, DOM manipulation, and date handling in JavaScript.

## Project Overview

This project is a solution to the roadmap.sh beginner-level frontend challenge. It calculates a user's exact age based on their birthdate, utilizing modern JavaScript libraries and tools.

**Live Demo:** [https://deyperfect.github.io/age-calculator/](https://deyperfect.github.io/age-calculator/)  
**Challenge Link:** [https://roadmap.sh/projects/age-calculator](https://roadmap.sh/projects/age-calculator)

## Features

- Calculate exact age in years, months, and days
- JavaScript datepicker for birthdate input 
- Powered by Luxon for accurate date calculations
- Form validation to ensure valid birthdates
- Clean, responsive, and visually appealing UI
- Mobile-friendly interface

## Technologies Used

- **HTML** - Structure and content
- **CSS** - Styling and layout
- **JavaScript** - Age calculation logic and DOM manipulation
- **Vite** - Build tool and development server
- **[Luxon](https://www.npmjs.com/package/luxon)** - Date and time manipulation library
- **[js-datepicker](https://www.npmjs.com/package/js-datepicker)** - JavaScript datepicker component

## Project Requirements

This project implements the following requirements from the roadmap.sh challenge:

✅ Form with JavaScript datepicker for birthdate input  
✅ Integration with Luxon library for precise age calculation  
✅ Display of exact age in years, months, and days  
✅ Form validation to ensure valid birthdate input  
✅ Responsive and visually appealing design  
✅ Result displayed on the same page after form submission

## Project Structure

```
age-calculator/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── calculator.js       # Age calculation logic
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies
├── package-lock.json   # Locked dependency versions
└── .github/
    └── workflows/      # GitHub Actions workflows
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deyperfect/age-calculator.git
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/age-calculator/` (or another port if 5173 is in use).

## Usage

1. Open the application in your web browser
2. Click on the date input field to open the JavaScript datepicker
3. Select your date of birth from the calendar
4. Click the "Calculate" button
5. View your exact age displayed in years, months, and days

## What I Learned

Through this project, I gained hands-on experience with:

- Installing and using external NPM packages
- Working with JavaScript date libraries (Luxon)
- Implementing custom datepicker components
- Form validation and user input handling
- Creating responsive and user-friendly interfaces
- Setting up and configuring Vite for modern web development

## Development

This project uses Vite for a fast development experience with hot module replacement (HMR). Any changes you make to the source files will be instantly reflected in the browser.

## Author

**deyperfect**
- GitHub: [@deyperfect](https://github.com/deyperfect)

## Related Resources

- [roadmap.sh Frontend Projects](https://roadmap.sh/frontend/projects)
- [Luxon Documentation](https://moment.github.io/luxon/)
- [js-datepicker Documentation](https://www.npmjs.com/package/js-datepicker)
