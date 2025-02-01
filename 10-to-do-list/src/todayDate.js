const todayDate = ()=>{
    const today =new Date()
    let day
    if (today.getDay()=="1"){
        day="Monday"
    } else if (today.getDay()=="2"){
        day="Tuesday"
    } else if (today.getDay()=="3"){
        day="Wednesday"
    } else if (today.getDay()=="4"){
        day="Thursday"
    } else if (today.getDay()=="5"){
        day="Friday"
    } else if (today.getDay()=="6"){
        day="Saturday"
    } else if (today.getDay()=="7"){
        day="Sunday"
    } 
    const date=today.getDate()
    const month=today.getMonth()+1
    const year=today.getFullYear()
    document.querySelector(".currentDate").textContent=`Today's day and date: ${day}, ${date}-${month}-${year}`
}

export {todayDate}