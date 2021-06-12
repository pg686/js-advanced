    function addItem() {
        console.log('TODO:...');
    let selectMenu = document.getElementById('menu')
        let newItemText = document.getElementById('newItemText').value;
        let newItemValue =  document.getElementById('newItemValue').value;
    let newOption = document.createElement('option');
    newOption.value = newItemValue;
    newOption.text = newItemText;
    selectMenu.appendChild(newOption);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
    }