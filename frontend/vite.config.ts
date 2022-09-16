import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import { transformSync } from '@babel/core'
import path from 'path'

const relay: PluginOption = {
  name: "vite:relay",
  transform(src, id) {
    let code = src;

    if (/.(t|j)sx?/.test(id) && src.includes("graphql`")) {
      const out = transformSync(src, {
        plugins: [["babel-plugin-relay"]],
        code: true,
        filename: id,
      });

      if (!out?.code) {
        throw new Error(`vite-plugin-relay: Failed to transform ${id}`);
      }

      code = out.code;
    }

    return {
      code,
      map: null,
    };
  },
}

export default defineConfig({
  plugins: [relay, react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
