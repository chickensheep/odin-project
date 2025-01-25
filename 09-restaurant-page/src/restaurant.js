const createRestaurantHomePage = ()=>{
    const content =document.querySelector("#content");
    
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline =document.createElement("h1");
    headline.textContent="Welcome to our restaurant!"
    pageContent.appendChild(headline)

    const image=document.createElement("img")
    image.src="https://media.istockphoto.com/id/637275080/photo/mcdonalds-exterior.jpg?s=612x612&w=0&k=20&c=2boXi-q35Isycmmte3vpnyo3FTtnGrpo6TxHzh-EZ30="
    pageContent.appendChild(image)
    image.style.height="300px"

    const text =document.createElement("p")
    text.textContent="The food here are very healthy and delicious. Come and try now!!"
    pageContent.appendChild(text)

    content.appendChild(pageContent)
}

export {createRestaurantHomePage}