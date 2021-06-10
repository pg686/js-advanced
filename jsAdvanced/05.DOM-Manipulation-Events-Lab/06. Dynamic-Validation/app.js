function validate() {
    console.log('TODO:...');
    let text = document.getElementById('input');
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    
    text.addEventListener('change', function change(e) {
     let getText =   e.target.value;
    if(getText.test(regex)){
        e.target.className = '';
    }else{
        e.target.className = 'error';
    }
    })
}