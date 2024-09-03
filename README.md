# Blog Frontend Project

Welcome to the Blog Frontend project! This project is a modern, responsive blog application built with React, leveraging ShadCN for enhanced UI components and styling. 

## Features

- **Responsive Design**: Adapts to various screen sizes for an optimal viewing experience.
- **Dark Mode Support**: Easily switch between light and dark themes.
- **Modern UI**: Utilizes ShadCN components for a polished look and feel.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **ShadCN**: A library of reusable components for a streamlined UI development process.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Recoil**: A state management library for React.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or Yarn) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blog-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blog-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Your app should now be running on `http://localhost:3000`.

## Project Structure

- `components/`: Contains reusable UI components.
- `pages/`: Contains the page components.
- `public/`: Contains static assets like images.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `Recoil/`: Contains Recoil state management setup.

## Using ShadCN

ShadCN provides a set of customizable UI components to speed up development and maintain consistency across the application. Here’s a brief overview of how it’s integrated into this project:

1. **Installation**: Ensure ShadCN is added to your project dependencies:
    ```bash
    npm install @shadcn/ui
    # or
    yarn add @shadcn/ui
    ```

2. **Usage**: Import and use ShadCN components as needed:
    ```jsx
    import { Button } from '@shadcn/ui/button';
    import { Card } from '@shadcn/ui/card';
    ```

3. **Customization**: Components can be styled and customized using Tailwind CSS classes. Adjust the classes as per your design requirements.

## Dark Mode Implementation

The project supports dark mode, which is managed using Recoil for state management. The dark mode state is toggled through a button in the Navbar, and styles adapt accordingly based on the mode.

### Navbar Component

The Navbar component includes a button for toggling dark mode:

```jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { ModeAtom } from '../Recoil/atom';

const Navbar: React.FC = () => {
    const [mode, setMode] = useRecoilState(ModeAtom);

    const toggleMode = () => {
        setMode(!mode);
    };

    return (
        <div className="w-full h-16 flex items-center justify-between bg-white dark:bg-gray-800">
            <button onClick={toggleMode} className="p-2 bg-blue-500 text-white rounded">Toggle Dark Mode</button>
        </div>
    );
};

export default Navbar;
```

### BlogCard Component

The `BlogCard` component adjusts its styling based on the dark mode state:

```jsx
import { Card } from '@shadcn/ui/card';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ModeAtom } from '../Recoil/atom';

const BlogCard: React.FC<{ title: string; body: string }> = ({ title, body }) => {
    const mode = useRecoilValue(ModeAtom);

    return (
        <Card 
            className={`cursor-pointer mt-5 mb-3 w-[90%] md:w-[60%] ${mode ? '' : 'border-b-3 border-b-slate-900'} 
            ${mode ? 'bg-black text-white' : 'bg-white text-black'} 
            ${mode ? '' : 'hover:border-slate-800'} hover:shadow-lg transition-shadow duration-500`}
        >
            <div className="flex items-center p-4">
                <div className={`h-8 w-8 ${mode ? 'bg-slate-600' : 'bg-slate-800'} rounded-full text-white flex justify-center items-center`}>
                    J
                </div>
                <div className="ml-3">
                    <p className={`font-semibold ${mode ? 'text-slate-200' : 'text-black'}`}>John Doe</p>
                    <p className={`text-sm ${mode ? 'text-slate-400' : 'text-gray-500'}`}>11-9-2023</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className={`text-lg font-semibold ${mode ? 'text-slate-100' : 'text-gray-900'}`}>{title}</h2>
                <p className={`text-slate-300 ${mode ? 'text-slate-300' : 'text-gray-700'}`}>{body} ...</p>
                <p className={`mt-2 text-sm ${mode ? 'text-slate-400' : 'text-gray-500'}`}>1 minute read</p>
            </div>
        </Card>
    );
}

export default BlogCard;
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Please follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
