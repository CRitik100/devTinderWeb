# Let's Start..🚀

## How to start the Vite + React Project.

1. run the command: npm create vite@latest
   - This will configure the project so select the appropriate options.
   - Once the configuration is completed, you can see basic structure of the project, remove the unnecessary files which are not req.
2. git init.
   - This will intialize the git in your project.
   - And also push the changes to remote repo.
3. install tailwindcss.
   - npm install tailwindcss @tailwindcss/vite
     Add the @tailwindcss/vite plugin to your Vite configuration.
     - import react from "@vitejs/plugin-react";
       import tailwindcss from "@tailwindcss/vite";
       import { defineConfig } from "vite";
       export default defineConfig({
       plugins: [react(), tailwindcss()],
       });
     - Import Tailwind CSS (index.css)
       @import "tailwindcss";
4. install daisyUI as a tailwind plugin.
   - npm i -D daisyui@latest
5. install react-router libraray for creating the routes in the project.(npm i react-router)
   - At different we want different componenet to load.
     for ex. / -> Home component
     /dashboard -> DashBoard component
     /about. -> About component
6. Install Axios for making an API Call.
      - API calls can be done even using fetch.
      - To save the token you have to pass the {
        withCredentials: true,
      }, in axios, and in the backend the cors middleware must be setup.

## 📝 Notes

- **Use ES Modules, not CommonJS.** Use `import` / `export` instead of `require` / `module.exports`. Vite projects already set `"type": "module"` in `package.json`.
- When you wrap your component in <StrictMode> <App/> </StrictMode> then react will runs components and effects twice. but why is the question ? It is doing to check whether by running two times are you getting the same result or diffent to catch the bugs early. Remember it renders no UI and has no effect on build productions.
