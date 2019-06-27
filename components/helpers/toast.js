let toast = _ => {
    let toastList = document.getElementById("toastList")
    let toast = document.createElement('li')
    let toastText = document.createTextNode("Log succesfull added ")
    toast.appendChild(toastText)
    toastList.appendChild(toast)
    toast.classList.add('toastLi')
}

export default toast