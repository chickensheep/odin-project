const createMenuPage=()=>{
    const content=document.querySelector("#content")


    const mcChicken = document.createElement("div")
    const mcChickenHead=document.createElement("h1")
    const mcChickenIngredient=document.createElement("p")
    mcChickenHead.textContent="McChicken"
    mcChickenIngredient.textContent="Ingredients: Burger, Chicken, Veggie"
    mcChicken.appendChild(mcChickenHead)
    mcChicken.appendChild(mcChickenIngredient)
    content.appendChild(mcChicken)
    mcChicken.classList.add("mcChicken")

    const filet = document.createElement("div")
    const filetHead=document.createElement("h1")
    const filetIngredient=document.createElement("p")
    filetHead.textContent="Filet O Fish"
    filetIngredient.textContent="Ingredients: Burger, Fish, TarTar Sauce"
    filet.appendChild(filetHead)
    filet.appendChild(filetIngredient)
    content.appendChild(filet)
    filet.classList.add("filet")

}

export {createMenuPage}