function lockedProfile() {
    console.log('TODO...');
    let buttons = [...document.getElementsByTagName('button')];
    let profiles = document.querySelectorAll('.profile')
    buttons.forEach((button,index) => {
        buttons[index].addEventListener('click' , ()=>{
            let lockedValue = profiles[index].children[2]
            let hiddenFields = document.getElementById(`user${index+1}HiddenFields`)
        if(!lockedValue.checked){
            hiddenFields.style.display=  hiddenFields.style.display === 'block' ? 'none' : 'block'
        button.textContent = hiddenFields.style.display === 'block' ? 'Hide it' : 'Show more'
        }
        
             }
        )
    })
}