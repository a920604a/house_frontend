import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 替換為你的 GitHub Repo 名稱
const repoName = 'house_frontend'

export default defineConfig({
  base: `/${repoName}/`, // GitHub Pages 路徑
  plugins: [react()],
})
