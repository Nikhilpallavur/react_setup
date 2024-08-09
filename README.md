# React Setup

## Overview

This project is a boilerplate setup for a React application with TypeScript. It includes configurations for Vite, ESLint, Prettier, and Tailwind CSS to streamline development and ensure code quality.

## Features

- **TypeScript**: Strongly-typed programming language for better development experience.
- **Vite**: Fast and modern build tool for development and production.
- **ESLint & Prettier**: Code linting and formatting to maintain code quality and consistency.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Husky**: Git hooks to enforce pre-commit checks.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Nikhilpallavurk/react_setup.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react_setup
    ```
3. Install dependencies using `pnpm`:
    ```bash
    pnpm install
    ```

## Scripts

- **`pnpm dev`**: Starts the development server with Vite.
- **`pnpm build`**: Builds the project for production using TypeScript and Vite.
- **`pnpm lint`**: Runs ESLint to check for code quality issues. Only warns on issues with `--max-warnings 0`.
- **`pnpm preview`**: Previews the built project locally.
- **`pnpm prepare`**: Runs Husky to set up Git hooks.
- **`pnpm format`**: Formats code using Prettier.

## Dependencies

- **React**: `^18.3.1` - JavaScript library for building user interfaces.
- **Axios**: `^1.7.2` - Promise-based HTTP client for making API requests.
- **CryptoJS**: `^4.2.0` - Library for cryptographic operations.
- **React Router DOM**: `^6.24.0` - Declarative routing for React.

## Dev Dependencies

- **TypeScript**: `^5.5.3` - TypeScript language support.
- **Vite**: `^5.3.1` - Build tool and development server.
- **ESLint**: `^8.57.0` - Linting for JavaScript and TypeScript.
- **Prettier**: `^3.3.2` - Code formatting tool.
- **Tailwind CSS**: `^3.4.4` - Utility-first CSS framework.
- **Husky**: `^9.0.11` - Git hooks for running scripts before commits.

## Configuration

### ESLint

Configured with:
- **@typescript-eslint/eslint-plugin**: Linting rules for TypeScript.
- **eslint-plugin-react-hooks**: Linting rules for React Hooks.
- **eslint-plugin-prettier**: Integrates Prettier with ESLint.

### Prettier

Configured to format TypeScript files and integrate with Tailwind CSS.

### Tailwind CSS

Integrated into the project for utility-first styling.

## Contributing

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -am 'Add new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/) - Fast and modern build tool.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Prettier](https://prettier.io/) - Code formatter.
- [ESLint](https://eslint.org/) - Linting tool for JavaScript and TypeScript.

