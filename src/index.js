alert("Hello World")



function contentComponent() {
  const header = document.createElement("H1")
  header.textContent = "Weston's Spicy Italian Restaurant"

  return header
}


const content_node = document.querySelector('#content')
content_node.appendChild(contentComponent())