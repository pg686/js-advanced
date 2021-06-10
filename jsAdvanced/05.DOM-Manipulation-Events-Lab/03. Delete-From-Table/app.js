function deleteByEmail() {
    console.log('TODO:...');

    let email = document.querySelector('label input').value;
    let table = [...document.querySelectorAll('tbody tr td:nth-child(2)')];
  //let arr=  table.filter(e => e.textContent ==email)
  let result = 'Not found.'
  for(let el of table){
      if(el.textContent == email){
          el.parentNode.parentNode.removeChild(el.parentNode)
          result='Deleted.';
      }
  }
  document.getElementById('result').textContent = result
}


//element[1].textContent.match(email).map(e => e.parentNote.remove(e)))
//)