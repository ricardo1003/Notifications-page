const markAllButton = document.getElementsByClassName("readAll")[0]
const notificationElements = [...document.getElementsByClassName("notification")]
const notificationNumber = document.getElementById("notificationNumber")


const unreadedNotis = notificationElements.filter(checkNotis)
function checkNotis(value){
    return value.classList.contains("unread")
}

markAllButton.addEventListener("click",()=>{
    notificationElements.forEach(notification => {
        if(notification.classList.contains("unread")){
            notification.classList.remove("unread")
        }
    });
    const unreadedNotis = notificationElements.filter(checkNotis)
    notificationNumber.innerHTML = unreadedNotis.length
})
notificationNumber.innerHTML = unreadedNotis.length