import home from "./home"
import menu from "./menu"
import contact from "./contact"
import './style.css'

const content_node = document.querySelector('#content')
content_node.appendChild(home)

const menuButton = document.querySelector('#menu-button')
menuButton.addEventListener('click', () => {
  content_node.innerHTML = "";
  content_node.appendChild(menu)
})

const homeButton = document.querySelector("#home-button")
homeButton.addEventListener('click', () => {
  content_node.innerHTML = "";
  content_node.appendChild(home)
})

const contactButton = document.querySelector("#contact-button")
contactButton.addEventListener('click', () => {
  content_node.innerHTML = "";
  content_node.appendChild(contact)
})