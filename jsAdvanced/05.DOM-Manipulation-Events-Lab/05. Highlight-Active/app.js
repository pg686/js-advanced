function focused() {
    console.log('TODO:...');
    let divs= [...document.querySelectorAll('input')];
    divs.forEach(el => el.addEventListener('focus',function focused(e) {
e.target.parentNode.classList.add('focused')
    }))
    divs.forEach(el => el.addEventListener('blur',function blured(e) {
        e.target.parentNode.classList.remove('focused')
            }))

}