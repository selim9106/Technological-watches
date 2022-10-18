import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
});


// https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/