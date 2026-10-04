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

            // https://vite.dev/config/
            export default defineConfig({
            plugins: [react(), tailwindcss()],
            });
        - Import Tailwind CSS (index.css)
            @import "tailwindcss";
4. install daisyUI as a tailwind plugin.
    -  npm i -D daisyui@latest


