const createContactPage =()=>{
    const content=document.querySelector("#content")

    const form=document.createElement("form")
    form.classList.add("form")

    const nameDiv=document.createElement("div")
    const name=document.createElement("label")
    const nameInput=document.createElement("input")
    nameInput.id="nameInput"
    name.htmlFor="nameInput"
    nameInput.placeholder="Bob the builder"
    nameInput.type="text"
    nameInput.setAttribute("required","")
    name.textContent="Name: "
    nameInput.oninvalid =()=>{
        nameInput.setCustomValidity("What is ur name")
    }
    nameInput.oninput =()=>{
        nameInput.setCustomValidity("")
    }
    
    const phoneDiv=document.createElement("div")
    const phone=document.createElement("label")
    const phoneInput=document.createElement("input")
    phoneInput.id="phoneInput"
    phone.htmlFor="phoneInput"
    phoneInput.placeholder="012-5894249"
    phoneInput.type="tel"
    phoneInput.setAttribute("required","")
    phone.textContent="Phone: "
    phoneInput.oninvalid =()=>{
        phoneInput.setCustomValidity("Gimme ur fone number")
    }
    phoneInput.oninput =()=>{
        phoneInput.setCustomValidity("")
    }
    
    const emailDiv=document.createElement("div")
    const email=document.createElement("label")
    const emailInput=document.createElement("input")
    emailInput.id="emailInput"
    email.htmlFor="emailInput"
    emailInput.placeholder="abc@gmail.com"
    emailInput.type="email"
    emailInput.setAttribute("required","")
    email.textContent="Email: "
    emailInput.oninvalid =()=>{
        emailInput.setCustomValidity("Pls enter ur email")
    }
    emailInput.oninput =()=>{
        emailInput.setCustomValidity("")
    }

    const submit=document.createElement("input")
    submit.type="submit"
    submit.classList.add("submit")

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