import { defineConfig } from "vite"
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Component from "unplugin-vue-components/vite"
const root = path.resolve(__dirname)

export default defineConfig({
    plugins: [
        Vue(),
        AutoImport({
            imports: [
                "vue",
            ]
        }),
        Component({
            extensions: ["vue"],
            include: [/\.vue$/, /\.vue\?vue/],
        }),


    ],
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
