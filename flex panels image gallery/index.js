

// make panels respond to click


const panel = document.querySelectorAll(".panel");

function toggleOpen()
{
     this.classList.toggle("open");
}

function toggleActive(e)
{
console.log(e.propertyName);
if(e.propertyName.includes("flex"))
{
    this.classList.toggle("open-active");
}
}

panel.forEach(function (panel){
    panel.addEventListener("click",toggleOpen)});

    panel.forEach(function (panel){
        panel.addEventListener("transitionend",toggleActive)});