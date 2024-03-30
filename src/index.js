import pageLoad from "./pageLoad"
import menu from "./menu"
import './style.css'

const content_node = document.querySelector('#content')
content_node.appendChild(pageLoad)

const menuButton = document.querySelector('#menu-button')
menuButton.addEventListener('click', () => {
  content_node.innerHTML = "";
  content_node.appendChild(menu)
})