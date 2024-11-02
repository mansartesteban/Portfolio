import Article1 from "./articles/enhance-your-github-profile.md"

export const articles = ref(Array(4).fill([
    {
        title: "Améliorez votre profil Github",
        date: new Date(),
        public: "Tout le monde",
        link: "http://google.com",
        subtitle: "Débutant",
        markdown: Article1,
        contentPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium facere hic maxime aliquid. Veritatis ut ullam eum animi quam, officia dicta rerum delectus! "
    },
    // {
    //     title: ""
    // }
]).flat())