import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base:
    process.env.GITHUB_PAGES === 'true'
      ? `/${process.env.GITHUB_REPOSITORY?.split('/').pop() ?? 'LeadProGroup'}/`
      : '/',
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
