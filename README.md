# react-access-guard &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fe-jhw/react-access-guard/blob/main/LICENSE) [![codecov](https://codecov.io/gh/fe-jhw/react-access-guard/graph/badge.svg?token=LW734XEYVM)](https://codecov.io/gh/fe-jhw/react-access-guard) [![NPM badge](https://img.shields.io/npm/v/react-access-guard?logo=npm)](https://www.npmjs.com/package/react-access-guard)
`react-access-guard` is a library for managing user access permissions in React applications. 

With this library, you can easily control access to specific components and provide fallback components for users without the required permissions. The component will render its children if the user has ANY of the specified permissions.

## Installation
You can install `react-access-guard` via npm, yarn, or pnpm:
```bash
npm install react-access-guard
```
or 
```bash
yarn add react-access-guard
```
or
```bash
pnpm add react-access-guard
```

## Usage
To use the react-access-guard library, you need to wrap your root component with the AccessProvider and provide an accessMap containing the permission information.

### Step 1: Wrap with AccessProvider
```jsx
import { AccessProvider } from 'react-access-guard';

const accessMap = {
  users: ['CREATE', 'READ', 'UPDATE'],
  posts: ['READ', 'COMMENT']
};

const App = () => {
  return (
    <AccessProvider accessMap={accessMap}>
      <YourApp />
    </AccessProvider>
  );
};
```

### Step 2: Protect Components with AccessGuard
Next, you can wrap the components that you want to protect with the AccessGuard. The component will check if the user has any of the specified permissions and render the appropriate content.

```jsx
import { AccessGuard } from 'react-access-guard';

const PostList = () => {
  return (
    <AccessGuard
      entityCode="posts"
      access={['READ', 'COMMENT']}
      fallback={<div>Access denied.</div>}
    >
      <div>Posts list visible to users with either READ or COMMENT permission.</div>
    </AccessGuard>
  );
};
```

## Contributing
If you would like to contribute, please fork this repository and submit a pull request. 

Bug reports and feature requests are also welcome!
Please see our [Contributing Guidelines](https://github.com/fe-jhw/react-access-guard/blob/main/.github/CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Use this library to effectively manage access permissions in your React applications!