function menu(){
  const menuDiv = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = "Menu"
  menuDiv.appendChild(h1)
  return menuDiv
}

export default menu()