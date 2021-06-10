function addItem() {
    console.log('TODO:...');
    let newText = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.textContent ='[Delete]';
    anchor.addEventListener('click', function deleteMe(e) {
        e.target.parentNode.remove()
    })
    newLi.textContent= newText.value;
    newLi.appendChild(anchor);
    document.getElementById('items').appendChild(newLi);
    newText.value = '';


    
}