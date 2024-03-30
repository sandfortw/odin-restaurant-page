import PizzaPic from "./pizza_image.jpeg"


function pageLoadComponent() {
  const div = document.createElement('div')

  function headerComponent() {
    const header = document.createElement("H1")
    header.textContent = "Weston's Spicy Italian Restaurant"
  
    return header
  }

  let imgNode = new Image()
  imgNode.src = PizzaPic
  div.appendChild(imgNode)
  div.appendChild(headerComponent())
  return div
}

export default pageLoadComponent()