const createContactPage =()=>{
    const content=document.querySelector("#content")

    const form=document.createElement("form")

    const nameDiv=document.createElement("div")
    const name=document.createElement("label")
    const nameInput=document.createElement("input")
    nameInput.id="nameInput"
    name.htmlFor="nameInput"
    nameInput.placeholder="Bob the builder"
    nameInput.type="text"
    nameInput.setAttribute("required","")
    name.textContent="Name: "

    
    const phoneDiv=document.createElement("div")
    const phone=document.createElement("label")
    const phoneInput=document.createElement("input")
    phoneInput.id="phoneInput"
    phone.htmlFor="phoneInput"
    phoneInput.placeholder="012-5894249"
    phoneInput.type="tel"
    phoneInput.setAttribute("required","")
    phone.textContent="Phone: "

    
    const emailDiv=document.createElement("div")
    const email=document.createElement("label")
    const emailInput=document.createElement("input")
    emailInput.id="emailInput"
    email.htmlFor="emailInput"
    emailInput.placeholder="abc@gmail.com"
    emailInput.type="email"
    emailInput.setAttribute("required","")
    email.textContent="Email: "

    const submit=document.createElement("input")
    submit.type="submit"
    // submit.addEventListener("click", function(event){
    //     event.preventDefault()
    // });

    nameDiv.appendChild(name)
    nameDiv.appendChild(nameInput)
    phoneDiv.appendChild(phone)
    phoneDiv.appendChild(phoneInput)
    emailDiv.appendChild(email)
    emailDiv.appendChild(emailInput)
    form.appendChild(nameDiv)
    form.appendChild(phoneDiv)
    form.appendChild(emailDiv)
    form.appendChild(submit)
    content.appendChild(form)
}

export {createContactPage}