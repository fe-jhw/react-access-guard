# Contributing to react-access-guard

Thank you for considering contributing to react-access-guard! This document provides guidelines for contributing to the project.

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the project
2. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/react-access-guard.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. Create an issue to discuss your proposed changes before writing code
2. Branch naming conventions:
   - `feature/*`: New features
   - `fix/*`: Bug fixes
   - `docs/*`: Documentation updates
   - `ci/*`: CI/CD related changes
   - `refactor/*`: Code refactoring

## Commit Message Convention

Follow the Conventional Commits format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- **Types**:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation changes
  - `style`: Code formatting
  - `refactor`: Code refactoring
  - `test`: Test cases
  - `ci`: CI/CD changes
  - `deps`: Dependency updates

## Pull Request Guidelines

1. PR title should follow the commit message convention
2. PR description must include:
   - Summary of changes
   - Related issue number
   - Testing instructions
3. PR requirements:
   - All tests passing
   - Maintain/improve code coverage
   - Bundle size optimization

## Testing

- All code must include tests
- Write tests using Vitest
- Run tests:
  ```bash
  npm test
  ```

## Documentation

- Document all new features in README.md
- TypeScript type definitions must be clear and detailed
- Use comments to explain complex logic

## License

By contributing to this project, you agree that your contributions will be licensed under its license terms. 