//your JS code here. If required.
onst panels = document.querySelectorAll('.panel')
 
 
panels.forEach(panel=>{
    panel.addEventListener("click",function(){
        removeActiveClasses()
        panel.classList.add("active")
    })
})
 
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })
}
