const Markdown = (options) => {

    return {
        name: "vegaia-markdown",
        buildStart: (file) => {
            console.log("file", file)
        },
        transformInclude(id) {
            console.log("transformInclude(id)", id)
        }
    }
}

export default Markdown 