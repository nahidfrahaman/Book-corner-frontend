
## React-redux-setup with vite
#### steps :  01
```
$ yarn create vite 
```
#### steps : 02 : reinstall dependecis
```
yarn install 
```
#### steps : 03 : you can change ur port  vite.config.ts folder
```
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

```


#### steps : 04 : setup tailwind in your project
```
yarn add -D tailwindcss postcss autoprefixer   
yarn tailwindcss init -p

```
#### setup tailwind.config.js
```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
#### configure index.css file 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```



#### steps : 05 : setup react-router

```
yarn add -D react-router-dom
--> follow the documentation 

```

#### steps : 06 : setup redux

```
yarn add -D @reduxjs/toolkit
yarn add -D react-redux
-->  follow the documentation
```
