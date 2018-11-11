let holder

window.onload = function() {
    holder = document.getElementsByClassName('popup')[0];
    const chck = document.cookie;
    console.log(chck.username);
    setTimeout(() => {
        holder.classList.remove('popup');
    }, 1000);
}

document.querySelector('.hidePopup').addEventListener('click', () => {
    holder.style.display = 'none'
})

document.querySelector('.removePopup').addEventListener('click', () => {
})
document.cookie = "username=John Doe";
