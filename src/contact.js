function contact(){
  const contactDiv = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = "Contact"
  contactDiv.appendChild(h1)
  return contactDiv
}

export default contact()