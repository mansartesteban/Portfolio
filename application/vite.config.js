import { defineConfig } from "vite"
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Component from "unplugin-vue-components/vite"
const root = path.resolve(__dirname)

export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/]
        }),
        AutoImport({
            imports: [
                "vue",
            ]
        }),
        Component(),

    ],
    publicDir: path.join(root, "src/assets"),
    assetsInclude: ["**/*.md"],
    build: {
        outDir: "../"
    },
    resolve: {
        alias: {
            "@": path.join(root, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern"
            }
        }
    },

})
