# react-access-guard
`react-access-guard` is a library for managing user access permissions in React applications. 

With this library, you can easily control access to specific components and provide fallback components for users without the required permissions.

## Installation
You can install `react-access-guard` via npm, yarn, pnpm:
```bash
npm install react-access-guard
```
or 
```bash
yarn(or pnpm) add react-access-guard
```

## Usage
To use the react-access-guard library, you need to wrap your root component or the component where you want to manage access with the AccessProvider. 

This provider will receive an accessMap prop containing the permission information.

### Step 1: Wrap with AccessProvider
```jsx
import React from 'react';
import { AccessProvider, AccessMap } from 'react-access-guard';

// Generally, you will fetch permission information from the server and then transform it to match the type of AccessMap for use.
const accessMap: AccessMap = {
  myEntity: ['CREATE', 'UPDATE'],
};

const App = () => {
  return (
    <AccessProvider accessMap={accessMap}>
      <MyComponent />
    </AccessProvider>
  );
};
```
### Step 2: Protect Components with AccessGuard
Next, you can wrap the components that you want to protect with the AccessGuard. 

This component will check the user's permissions and render the appropriate content based on their access level.
```jsx
import React from 'react';
import { AccessGuard } from 'react-access-guard';

const MyComponent = () => {
  return (
    <AccessGuard
      entityCode="myEntity"
      access={['CREATE', 'UPDATE']}
      fallback={<div>Access denied.</div>}
    >
      <div>Content accessible to authorized users.</div>
    </AccessGuard>
  );
};
```

## Contributing
If you would like to contribute, please fork this repository and submit a pull request. 

Bug reports and feature requests are also welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Use this library to effectively manage access permissions in your React applications!