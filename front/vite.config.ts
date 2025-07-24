// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { mochaPlugins } from "@getmocha/vite-plugins";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [...mochaPlugins(process.env), react()],
//   server: {
//     allowedHosts: true,
//   },
//   build: {
//     chunkSizeWarningLimit: 5000,
//     base: './',
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mochaPlugins, MochaEnv } from '@getmocha/vite-plugins';

// Definí explícitamente las variables que necesites, o un objeto vacío
const mochaEnv: MochaEnv = {
  // Por ejemplo:
  // VITE_API_URL: process.env.VITE_API_URL ?? '',
};

export default defineConfig({
  base: './',  // importante para rutas relativas
  plugins: [...mochaPlugins(mochaEnv), react()],
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
});
