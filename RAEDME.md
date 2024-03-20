# Production learning project

This is an intensive learning project focused on honing my skills in React and Redux Toolkit, utilizing the Feature Sliced Design methodology to ensure a modular and scalable codebase. The project aimed at reinforcing my proficiency in building sophisticated web applications with a focus on maintainability and efficiency.

Technologies and methodologies used:

- React
- Webpack, Vite, Babel
- Redux Toolkit
- Jest, loki
- Storybook
- Feature Sliced Design
- CSS Modules
- React-spring, use-gesture
- i18next
- Headlessui
- Typescript
- Eslint, prettier, stylelint, husky

## Usage

To start this project, follow these steps:

1. Run `npm install` to install npm packages.
2. Run `npm run start` to start project with Webpack or run `npm run start:vite` to start project using Vite. Navigate to `http://localhost:4200/`.

## Project architecture

The project was created in accordance with Feature-Sliced Design (FSD) methodology. It helps to make the project more understandable and structured in the face of ever-changing business requirements. The link to documentation - [FSD](https://feature-sliced.design)

## Development

### Testing

3 types of tests are used in the project:

1. Unit tests with Jest and test for components with React Testing Library. To start run `npm run test:unit`
2. UI tests with Storybook and Loki. To start run storybook `npm run storybook` and than run Loki `npm run test:ui`
3. e2e tests with Cypress. To start test run `npm run test:e2e`

To simplify development, the project uses visual reports for unit- and UI-tests. Visual HTML reports for unit tests are updated after each `npm run test:unit` run. But to generate a visual HTML report for UI tests, you need to run `npm run test:ui:report` after running UI tests.

All visual HTML reports located in `./reports` folder.

### Linting and code formatting

The projects uses Eslint, Prettier and Stylelint, including custom Eslint plugin for checking correct path imports proceeding FSD methodology.

To start Eslint run `npm run lint:ts`.
To run Stylelint and check files with styles run `npm run lint:scss`.
To start Prettier run `npm run prettier`

Also you can run `npm run lint:ts:fix`, `npm run lint:scss:fix` and `npm run prettier:fix` for auto fixing founded problems.

The project uses Husky for pre-commit checkings. The pre-commit hooks starts all linters and code formatter

### CI/CD

The project uses GitHub Actions for [CI/CD](.github/workflows/main.yml). It runs on any pushed commit and opened Pull Request.
It starts production build, run unit and UI tests and linters

### Project configurations

For development the project contains 2 configs with Webpack and Vite. Both configs are adapted to the application. All configurations located in the `./config` folder.

- `./config/babel` - configurations for Babel
- `./config/build` - configurations for Webpack
- `./config/jest` - test environment configuration
- `./config/storybook` - configurations for Storybook

The `./scripts` folder contains various scripts for generating visual reports, refactoring, simplifying code writing, etc.

### Data handling

Interacting with data is done using the Redux Toolkit. if possible, reused entities should be normalised using EntityAdapter.
Requests to the server are sent using RTK Query.
[DynamicReducerLoader](src/shared/lib/components/DynamicReducerLoader.tsx) is used for asynchronous connection of reducers
