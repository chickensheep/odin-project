import { createMenuPage } from "./menu"
import { createRestaurantHomePage } from "./restaurant"
import { createContactPage } from "./contact"

const createTabs = ()=>{
    const tabs=document.querySelector("#tabs")

    const homeTab=document.createElement("div")
    homeTab.textContent="Home"
    homeTab.classList.add("tabs")
    homeTab.addEventListener("click",()=>{
        clearPage()
        createRestaurantHomePage()
    })

    const menuTab=document.createElement("div")
    menuTab.textContent="Menu"
    menuTab.classList.add("tabs")
    menuTab.addEventListener("click",()=>{
        clearPage()
        createMenuPage()
    })

    const contactTab=document.createElement("div")
    contactTab.textContent="Contact"
    contactTab.classList.add("tabs")
    contactTab.addEventListener("click",()=>{
        clearPage()
        createContactPage()
    })

    tabs.appendChild(homeTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)

}

const clearPage=()=>{
    const content=document.querySelector("#content")
    content.innerHTML=""
}

export {createTabs}