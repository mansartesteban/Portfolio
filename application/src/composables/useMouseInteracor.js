
export default (mountOn = "body") => {
    let position = {
        x: 0,
        y: 0
    }
    let mouse = {
        x: 0,
        y: 0
    }

    if (!(mountOn instanceof Element)) {
        mountOn = document.querySelector(mountOn)
    }

    let movingElement = document.createElement("div")
    movingElement.classList.add("mouse-interactor")

    mountOn.appendChild(movingElement)

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
    })


    const loop = () => {
        let factor = .02

        position.x = position.x * (1 - factor) + mouse.x * factor
        position.y = position.y * (1 - factor) + mouse.y * factor
        movingElement.style.top = `${position.y}px`
        movingElement.style.left = `${position.x}px`

        console.log("in loop")
        window.requestAnimationFrame(loop)
    }
    loop()


    // return 

}