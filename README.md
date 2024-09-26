## Original Design Url

[https://nest-frontend-v6.netlify.app/](https://nest-frontend-v6.netlify.app/)

## Module Structure

```
|-- moduleName
|   |-- atoms
|   |   |-- atom-name.ts
|   |   |-- index.ts
|   |-- components
|   |   |-- AnyReusableComponent.tsx
|   |   |-- index.ts
|   |-- pages
|   |   |-- PageComponent
|   |   |   |-- components
|   |   |   |   |-- PrivatePageComponent.tsx
|   |   |   |-- PageComponent.tsx
|   |   |   |-- index.ts
|   |-- services
|   |   |-- auth.service.ts
|   |-- hooks
|   |   |-- use-hook-name.ts
|   |   |-- index.ts
|   |-- types
|   |   |-- product.entity.ts
|   |   |-- class.contract.ts
|   |   |-- index.ts
|   |-- utils
|   |   |-- helpers.ts
|   |   |-- some-helper-class.ts
|   |   |-- some-helper-function.ts
|   |   |-- flags.ts
|   |   |-- types.ts
|   |-- main.ts
|   |-- routes.ts
```

## How components Should work

Every logic must be encapsulated inside a `hook`, make as much as possible reusable components and dumb components (stateless components).

## Use atoms to handle state management and re-renders

Use atoms as much as you could to avoid any unnecessary re-renders, and to handle the state management.

## TODO

- Fix eslint errors: Done
- Rebuild tailwind config
- Rebuild form components
- Rebuild buttons
- Rebuild links
- Reorganizing the localization
