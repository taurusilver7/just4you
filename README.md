# Just 4 You

> A React-Typescript based single-page fitness application.

There will be Typescript elements, and a lot of layout fundamentals to go with while building a SPA.

We will be using [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/docs/getting-started.html) framework, [Vite](https://vitejs.dev/guide/) starter pack, [Framer motion](https://www.framer.com/docs/) for animation, [tailwindcss](https://tailwindcss.com/docs/installation) for styling.

The SPA is deployed on [Cloudflre](https://dash.cloudflare.com/)

## Scripts

```bash
npm create vite@latest <app_name> --template typescript
#and
yarn dev
#and
yarn add framer-motion react-anchor-link-smooth-scroll @heroicons/react (dependencies)
# and
yarn add @types/react @types/react-anchor-links-smooth-scroll@1.0.2 @types/node -D (dev dependencies)

```

## Build

- Initial Setup

Scaffold a starter template and refactor the file structure to suit the necessary.

Set up the `vite.config.ts`. Import path package and restructure an alias for the components path in src directory. Replace the /src directory with a keyword '@' to an absolute path.

Configure the `tsconfig.json` object. Set the paths in the configure file to take effect immediately.

`"paths": {
			"@/*": ["./src/*"]
		},
`

Install and configure tailwind [setup](https://tailwindcss.com/docs/guides/vite) & add suitable extensions to work with tailwindcss utility classes. Add `Tailwind documentation` and `Tailwind CSS Intellisense`

```bash
yarn add tailwindcss postcss autoprefixer -D
# and
npx tailwindcss init -p (creates two config files)

```

Add a `prettier` & `prettier-plugin-tailwindcss` dev dependencies to the build. This plugin formats tailwind utility classes in a particular way.

Create a prettier-plugin exports configure file, and configure the tailwind configure file by adding custom color & styling data.

Set the [font](https://fonts.google.com/specimen/Montserrat?query=monts) and set the default font-family for the application.

- Build

Create a Navbar component in /scenes directory. Populate & style the standard business navbar regarding mobile & desktop resolution.

Use pesticide chrome widget, and react-anchor-links-smooth-scroll dependency to create a link component. Use props, states to populate the nav menu elements dynamically.

Create a selected page state in main component & pass it down to the Navbar & Link component to redirect the links to their respective sub-sections in the main page.

Create an enum to describe the nav-menu elements to make them more dynamical and their types more explicit. Modify the props in Navbar, Link components to that of the enum for a error-free reusable components.

Create a custom hook to manually set the media query breakpoint for larger screen resolutions.

Create a custom button component to add to the navbar menu. Populate the mobile version of the navmenu & style the nav menus. Build the sidebar underneath the desktop-version navbar with a condition for screen resolution.


