function create(words) {
   console.log('TODO:...');
   let content = document.getElementById('content');
   words.forEach(element => {
      let newDiv = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = 'none';
      newDiv.appendChild(paragraph);
      newDiv.addEventListener('click', function click(e){
         e.target.children[0].style.display = 'block';
      })
      content.appendChild(newDiv);

   });

   
}