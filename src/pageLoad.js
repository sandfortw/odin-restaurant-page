import PizzaPic from "./pizza_image.jpeg"


function pageLoadComponent() {
  const div = document.createElement('div')

  function headerComponent() {
    const div = document.createElement('div')
    const header = document.createElement("H1")
    header.textContent = "Weston's Spicy Italian Restaurant"
    let imgNode = new Image()
    imgNode.src = PizzaPic
    div.setAttribute("id", "title-container")
    div.appendChild(imgNode)
    div.appendChild(header)
    return div
  }
  div.appendChild(headerComponent())
  return div
}

export default pageLoadComponent()