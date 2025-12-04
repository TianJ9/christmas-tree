import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/christmas-tree/', // 这里填你的仓库名，注意前后都有 / 
  plugins: [react()],
})