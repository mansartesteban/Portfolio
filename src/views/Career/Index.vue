<template>
    <div class="snap-proximity scroll-y-auto h-full ">
        <Timeline :items="experiences">
            <template #item-content="{ item }">
                <p v-html="item.content"></p>
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import Gtp from "@/assets/images/career/gtp.svg"
import Nibelis from "@/assets/images/career/nibelis.png"
import Maxinfoweb from "@/assets/images/career/maxinfoweb.png"
import Timeline from "./Timeline.vue"

import { BriefcaseIcon } from '@heroicons/vue/16/solid'

function duration(startDate, endDate) {
    if (startDate > endDate) {
        console.error("Start date must be before end date")
        return null
    }
    var startYear = startDate.getFullYear()
    var startMonth = startDate.getMonth()
    var startDay = startDate.getDate()

    var endYear = endDate.getFullYear()
    var endMonth = endDate.getMonth()
    var endDay = endDate.getDate()

    // We calculate February based on end year as it might be a leep year which might influence the number of days.
    var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28
    var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay
    var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0)

    var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12

    // (12 + …) % 12 makes sure index is always between 0 and 11
    var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay

    return {
        years: years,
        months: months,
        days: days
    }
}

const experiences = ref([
    {
        title: "Nibelis",
        subtitle: "Solution Paie & RH",
        image: Nibelis,
        content: "Chez Nibelis, j'ai intégré l'équipe Innovation, dédiée à une transition technologique majeure. Les défis et obstacles rencontrés ont nourri mon ambition d'aller toujours plus loin pour concevoir des solutions plus modernes et intuitives. J'ai également eu l'occasion de collaborer avec des personnes dont l'approche a renforcé mon envie de progresser et de perfectionner mes compétences.",
        subitems: [
            "Développement d'un outil de documentation semi-automatisée sur mesure",
            "Développement d'un framework vue interne à destination des équipes internes d'intégrateurs",
        ],
        link: "https://nibelis.com/",
        dateFrom: "Décembre 2022",
        dateTo: "Aujourd'hui",
        duration: duration(new Date("2022-12-01"), new Date()),
        icon: BriefcaseIcon
    },
    {
        title: "GTP-Conseil",
        subtitle: "Solution RH",
        image: Gtp,
        content: "C'est au travers de cette expérience que j'ai découvert ma vocation pour la spécialisation en front-end. Constatant que la solution en place manquait de modernité, j'ai spontanément proposé des améliorations tant au niveau des outils que du design<br><br>J'ai conçu et réalisé plusieurs maquettes, les mettant en œuvre bien que ces travaux ne soient pas explicitement inclus dans mes missions. Ces initiatives ont été bien accueillies et ont enrichi l'ensemble du projet.",
        subitems: [
            "Création d'une nouvelle interface d'accueil personnalisable",
            "Création d'un outil de suivi de formation avec règles de calculs personnalisables",
            "Création de nombreuses maquettes internes sous Figma",
        ],
        link: "https://planete-online.fr/",
        dateFrom: "Mai 2019",
        dateTo: "Novembre 2022",
        duration: duration(new Date("2019-05-20"), new Date("2022-11-23")),
        icon: BriefcaseIcon
    },
    {
        title: "Maxinfoweb",
        subtitle: "Télécom & applications web",
        image: Maxinfoweb,
        content: "Ma première expérience professionnelle dans le domaine du web fut des plus formatrices et a profondément contribué à faire de moi la personne que je suis aujourd'hui. <br><br>J'y ai acquis les bases de cet univers, découvert ce que signifie réellement répondre aux attentes d'un client, et développé l'art de trouver des solutions adaptées aux défis qui se présentent.",
        subitems: [
            "Rénovation du logo de la société",
            "Migration technique vers symfony",
            "Création d'une interface LDAP"
        ],
        link: "https://www.maxinfoweb.com/",
        dateFrom: "Février 2017",
        dateTo: "Mai 2019",
        duration: duration(new Date("2017-02-01"), new Date("2019-05-10")),
        icon: BriefcaseIcon
    },
])
</script>