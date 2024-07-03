## lazar-veselinovic-factcat-task

-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [License](#license)

## Instalation

1. **Clone the repository:**

```bash
git clone https://github.com/vesa193/lazar-veselinovic-fatcat-task.git
```

2. **Install the packages**

```bash
cd lazar-veselinovic-fatcat-task
npm install
```

## Usage

When packages installed successfully, then run the app with script below.

```bash
npm run dev
```

## Features

-   **Transfer the project to TypeScript**: Include typescript extension and definitions (interfaces, types) into components, convert whole project from JavaScript to TypeScript.
-   **Create a List Component**: Make List Component, that fetches data, renders data into component.
-   **Create a Form Generator Component**: Purpose of this is to simulates form wrapper for input fields. Form uses `react-hook-form` stuffs and provide them down to the nested component (e.g. TextField). Form Validation makes with `zod` package, it designed to work properly with `react-hook-form`. Besides all, the form has option to submit data via POST request to the server uses `react-query` package.

-   **Create a Page Generator Component**: Designed to renders dynamically components per structure it contains. It allows to components, to receive all props they needs, and render them all per order it mentioned in data array of objects (components) with relevant props.

## Demo

Demo of the applcation could be seen on `localhost:3000`, after user run `npm run dev` script, as described above.

All features are displayed in the App component.
