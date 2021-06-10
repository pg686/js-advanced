function addItem() {
    console.log('TODO:...');
    let newText = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent= newText.value;
    document.getElementById('items').appendChild(newLi);
    newText.value = '';
}