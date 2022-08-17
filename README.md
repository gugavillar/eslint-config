# Helpmydesk ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint eslint-config-helpmydesk
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "eslint-config-helpmydesk/react"
}
```

3. Your root imports is order by internal group, but you have to add in your tsconfig.json file in root folder

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
