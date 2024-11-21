import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // @를 src로 매핑
    },
  },
});
