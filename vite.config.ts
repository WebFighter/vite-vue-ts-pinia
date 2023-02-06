import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";
import { settings } from "./src/config/index";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: settings.base,
  //解决“vite use `--host` to expose”
  // base: "./", //不加打包后白屏
  server: {
    host: "0.0.0.0",
    // 是否主动唤醒浏览器
    open: true,
    // 占用端口
    port: settings.port,
    // 是否使用https请求
    https: settings.https,
    // 扩展访问端口
    // host: settings.host,
    proxy: settings.proxyFlag
      ? {
          "/api": {
            target: "http://127.0.0.1:8080", // 后台接口
            changeOrigin: true, // 是否允许跨域
            // secure: false,                    // 如果是https接口，需要配置这个参数
            rewrite: (path: any) => path.replace(/^\/api/, ""),
          },
        }
      : {},
  },
  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias: {
      "@": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      config: path.resolve(__dirname, "src/config"),
      router: path.resolve(__dirname, "src/router"),
      tools: path.resolve(__dirname, "src/tools"),
      views: path.resolve(__dirname, "src/views"),
      plugins: path.resolve(__dirname, "src/plugins"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
  build: {
    target: "modules",
    outDir: "dist", // 指定输出路径
    assetsDir: "static", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器,terser构建后文件体积更小
    sourcemap: false, // 输出.map文件
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true, // 生产环境移除debugger
      },
    },
  },
});
