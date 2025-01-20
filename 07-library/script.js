const myLibrary=[];

function Book (title,author,page,read){
    this.title=title;
    this.author=author;
    this.page=page;
    this.read=read;
}



function addBookToLibrary(){
    let title=document.querySelector("#title").value
    let author=document.querySelector("#author").value
    let page=document.querySelector("#page").value
    let read=document.querySelector("#read").checked
    const newBook= new Book(title,author,page,read);
    myLibrary.push(newBook);
}

const table=document.querySelector(".table")

const thead=document.querySelector("thead")

const tbody=document.querySelector("tbody")

const addBook=document.querySelector(".add-book")

const question=document.querySelector(".question")

const confirm=document.querySelector(".confirm")

function toggleRead () {
    myLibrary[i].read=!myLibrary[i].read;
    show()
}

function show(){
    tbody.innerHTML=""

    for (let i=0;i<=myLibrary.length-1;i++){
        if (myLibrary[i].read){

            const newRow =document.createElement("tr")
            tbody.appendChild(newRow)
            newRow.classList.add("row-read")

            const rowTitle =document.createElement("td")
            const rowAuthor=document.createElement("td")
            const rowPage=document.createElement("td")
            const rowRead=document.createElement("td")
            const rowDelete=document.createElement("td")

            rowTitle.textContent=`${myLibrary[i].title}`
            rowAuthor.textContent=`${myLibrary[i].author}`
            rowPage.textContent=`${myLibrary[i].page}`

            const readCheck=document.createElement("input")
            readCheck.classList.add("readCheck")
            readCheck.checked=true
            readCheck.type="checkbox"
            rowRead.appendChild(readCheck)
            readCheck.addEventListener("change",()=>{
                myLibrary[i].read=!myLibrary[i].read;
                show()

            })

            const deleteButton=document.createElement("button")
            deleteButton.classList.add("deleteButton")
            deleteButton.textContent="X"
            deleteButton.addEventListener("click",()=>{
                deleteBook(i)
            })
            rowDelete.appendChild(deleteButton)

            newRow.appendChild(rowTitle)
            newRow.appendChild(rowAuthor)
            newRow.appendChild(rowPage)
            newRow.appendChild(rowRead)
            newRow.appendChild(rowDelete)

        } else {     
            const newRow =document.createElement("tr")
            tbody.appendChild(newRow)
            newRow.classList.add("row-unread")

            const rowTitle =document.createElement("td")
            const rowAuthor=document.createElement("td")
            const rowPage=document.createElement("td")
            const rowRead=document.createElement("td")
            const rowDelete=document.createElement("td")

            rowTitle.textContent=`${myLibrary[i].title}`
            rowAuthor.textContent=`${myLibrary[i].author}`
            rowPage.textContent=`${myLibrary[i].page}`

            const readCheck=document.createElement("input")
            readCheck.classList.add("readCheck")
            readCheck.checked=false
            readCheck.type="checkbox"
            rowRead.appendChild(readCheck)
            readCheck.addEventListener("change",()=>{
                myLibrary[i].read=!myLibrary[i].read;
                show()
            })

            const deleteButton=document.createElement("button")
            deleteButton.classList.add("deleteButton")
            deleteButton.textContent="X"
            deleteButton.addEventListener("click",()=>{
                deleteBook(i)
            })
            rowDelete.appendChild(deleteButton)

            newRow.appendChild(rowTitle)
            newRow.appendChild(rowAuthor)
            newRow.appendChild(rowPage)
            newRow.appendChild(rowRead)
            newRow.appendChild(rowDelete)
        }

    }
}

function deleteBook(index){
    myLibrary.splice(index,1);
    show()
}

addBook.addEventListener("click",()=>{
    document.querySelector("#title").value=""
    document.querySelector("#author").value=""
    document.querySelector("#page").value=""
    document.querySelector("#read").checked=false
    question.showModal()
})

confirm.addEventListener("click", ()=>{
    if (document.querySelector("#title").value==""||document.querySelector("#author").value==""||isNaN(document.querySelector("#page").value)||document.querySelector("#page").value==""||Number(document.querySelector("#page").value)<1||Number(document.querySelector("#page").value)>2000){
    } else {
        addBookToLibrary()
        show()
    }

})

