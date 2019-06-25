let toast = _ => {
    let count = 0
    count++
    let toastList = document.getElementById("toastList")
    let toast = document.createElement('li')
    let toastText = document.createTextNode("Log succesfull added " + count)
    toast.appendChild(toastText)
    toastList.appendChild(toast)
    toast.classList.add('toastLi')
}

export default toast