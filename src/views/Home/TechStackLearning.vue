<template>
  <TechStack title="Apprentissage" :stack="stack"></TechStack>
</template>

<script setup>
import TechStack from "@/views/Home/TechStack.vue"

const stack = [
  {
    alt: "docker",
    href: "https://www.docker.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    alt: "jenkins",
    href: "https://www.jenkins.io",
    src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  },
  {
    alt: "kubernetes",
    href: "https://kubernetes.io",
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
  {
    alt: "unity",
    href: "https://unity.com",
    src: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
  },
  {
    alt: "unrealengine",
    href: "https://www.unrealengine.com",
    src: "https://vectorwiki.com/images/JyRje__unreal.svg",
  },
  {
    alt: "blender",
    href: "https://www.blender.org",
    src: "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/blender.svg",
  }
]
</script>