
function dropdown(containerid) {
    const dropdowncontainer = document.getElementById(containerid)
    dropdowncontainer.style.display ="flex"


}

const menu = document.getElementById("menu")
menu.addEventListener("mouseover", function(){dropdown("menucontainer")})
menu.addEventListener("mouseout", function() {
    this.removeEventListener('mouseover', function() {dropdown("menucontainer")})
})

