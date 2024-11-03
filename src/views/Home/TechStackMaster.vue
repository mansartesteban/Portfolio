<template>
  <TechStack title="Mes technologies" :stack="stack"></TechStack>
</template>

<script setup>
import TechStack from "@/views/Home/TechStack.vue"

const stack = [
  {
    alt: "css3",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    href: "https://www.w3schools.com/css",
  },
  {
    alt: "html5",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    href: "https://www.w3.org/html",
  },
  {
    alt: "javascript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    alt: "vite",
    src: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg",
    href: "https://vite.dev",
  },
  {
    alt: "vuetify",
    src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vuetify/vuetify-original.svg",
    href: "https://vuetifyjs.com",
  },
  {
    alt: "vuejs",
    src: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
    href: "https://vuejs.org",
  },
  {
    alt: "tailwind",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    href: "https://tailwindcss.com/"
  },
  {
    alt: "vscode",
    src: "https://raw.githubusercontent.com/bestofjs/bestofjs/78c0bf1f9691f623d06566fbf7442922b8fd771f/apps/bestofjs-nextjs/public/logos/vscode.svg",
    href: "https://code.visualstudio.com"
  },
  {
    alt: "nodejs",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    href: "https://nodejs.org",
  },
  {
    alt: "sass",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    href: "https://sass-lang.com",
  },
  {
    alt: "typescript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org",
  },
  {
    alt: "bootstrap",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    href: "https://getbootstrap.com",
  },
  {
    alt: "express",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    href: "https://expressjs.com",
  },
  {
    alt: "git",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    href: "https://git-scm.com",
  },
  {
    alt: "mongodb",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    href: "https://www.mongodb.com",
  },
  {
    alt: "mysql",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    href: "https://www.mysql.com",
  },
  {
    alt: "php",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    href: "https://www.php.net",
  },
  {
    alt: "postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    href: "https://postman.com",
  },
  {
    alt: "gitkraken",
    src: "https://www.vectorlogo.zone/logos/gitkraken/gitkraken-icon.svg",
    href: "https://www.gitkraken.com",
  },
  {
    alt: "three js",
    src: "https://upload.vectorlogo.zone/logos/threejs/images/83129207-9005-4463-8181-65a3cc3bf8fd.svg",
    href: "https://threejs.org",
  },
  {
    alt: "webpack",
    src: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    href: "https://webpack.js.org",
  },
  {
    alt: "primevue",
    src: "https://raw.githubusercontent.com/dochne/wappalyzer/953a28c681b9a0d829a81a1174ec14e975eee245/src/images/icons/PrimeVue.svg",
    href: "https://primevue.org",
  },

  {
    alt: "bitbucket",
    src: "https://upload.vectorlogo.zone/logos/bitbucket/images/11915f2e-3287-46b6-a81d-0daad8160e11.svg",
    href: "https://bitbucket.org",
  },
  {
    alt: "vitest",
    src: "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/vitest.svg",
    href: "https://vitest.dev",
  },
  {
    alt: "aws",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    href: "https://aws.amazon.com",
  },
]
</script>