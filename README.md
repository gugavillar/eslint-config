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

3. If you want to order you root imports you can use this config:
```
{
  "extends": "eslint-config-helpmydesk/react",
  "rules": {
    "import/order": [
      "error", {
        "pathGroups": [
          /*Example when have some root imports*/
          {
            "pattern": "@common/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@common/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@admin/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@admin/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@auth/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@auth/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@users/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@users/**",
            "group": "internal",
            "position": "after"
          }
        ]
      }
    ]
  }
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
