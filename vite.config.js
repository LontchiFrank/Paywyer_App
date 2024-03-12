import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'core-js-pure/stable/object/assign.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
