// import http from 'http'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import http from 'http'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
        // secure:false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // agent: new http.Agent()
      },
    },
  },
});
