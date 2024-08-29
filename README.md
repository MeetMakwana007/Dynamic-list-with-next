This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

This Next.js project provides a web application with interactive functionalities for managing page selections and input validation. The primary features include:

1. **Page Selection Menu**: A multi-select menu that allows users to choose from a list of options. Users can select individual items or use a select-all option.
2. **Number Input with Validation**: An input field for specifying the number of pages to be kept, with validation to ensure the input is within a specified range.

### Check live website demo here: ### https://taskina-frontend-test.vercel.app/

Steps: 
1. **Type any number from 1 to 100 in input box.**
2. **Select Pages from below list.**
3. **Hit Done button 🚀🚀🚀, You'll see amazing notification about your selection.**


## Getting Started

Follow these instructions to set up and run the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Clone the Repository

Clone the repository using Git:

```bash
git clone <repository-url>
cd <repository-directory>
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Start the Development Server

Launch the Next.js development server:

```bash
npm run dev
```

Open your browser and go to http://localhost:3000 to view the application.

## Features

### Page Selection Menu

The Page Selection Menu allows users to:

- **Select Multiple Options**: Users can choose from a list of pages.
- **Select/Deselect All**: A special option to select or deselect all available options at once.
- **Receive Notifications**: A button displays a notification showing the currently selected options.

### Number Input with Validation

The Number Input component provides:

- **Input for Page Count**: Users can specify how many pages they want to keep.
- **Validation**: The input is validated to ensure the number is between 1 and 100. An error message is shown if the input is out of range or invalid.

## Testing

To ensure the functionality of the application, tests are provided for key features:

### Run Tests

Execute the following command to run the tests:

```bash
npx jest <path to .test.tsx file> 
```

## Testing Features

- **Page Selection Menu**: Tests cover selection logic and notification display.
- **Number Input Validation**: Tests ensure correct validation of input values and error handling.

## Contribution

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch for your changes**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes and commit them**:
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push your changes to the branch:**:
   ```bash
   git push origin feature-branch
   ```
5. **Submit a pull request.**
