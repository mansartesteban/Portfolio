<template>
  <TechStack title="Outils" :stack="stack"></TechStack>
</template>

<script setup>
import TechStack from "@/views/Home/TechStack.vue"

const stack = [
  {
    alt: "notion",
    href: "https://www.notion.so",
    src: "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/notion-icon.svg",
  },
  {
    alt: "trello",
    href: "https://trello.com",
    src: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg",
  },
  {
    alt: "jira",
    href: "https://www.atlassian.com/fr/software/jira",
    src: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
  },
  {
    alt: "slack",
    href: "https://slack.com",
    src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
  },
  {
    alt: "inkscape",
    href: "https://inkscape.org",
    src: "https://www.vectorlogo.zone/logos/inkscape/inkscape-icon.svg",
  },
  {
    alt: "adobe xd",
    href: "https://adobexdplatform.com",
    src: "https://vectorwiki.com/images/afpgO__adobe-xd.svg",
  },
  {
    alt: "figma",
    href: "https://www.figma.com",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    alt: "font awesome",
    href: "https://fontawesome.com",
    src: "https://www.vectorlogo.zone/logos/font-awesome/font-awesome-icon.svg",
  },
  {
    alt: "zero height",
    src: "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/zeroheight-icon.svg",
    href: "https://zeroheight.com",
  },
  {
    alt: "plane",
    href: "https://plane.so",
    src: "https://raw.githubusercontent.com/loganmarchione/homelab-svg-assets/745e5d9249f2c847d58de5f1fd7ba4de2f63918e/assets/plane.svg",
  },
]
</script>