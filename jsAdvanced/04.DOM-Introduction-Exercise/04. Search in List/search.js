function search() {
   // TODO
   let count = 0;
   let towns = document.querySelectorAll('#towns li');
   let townToFind = document.getElementById('searchText').value;
Array.from(towns).filter((el) => el.textContent.match(townToFind))
.forEach(el=> {el.style='text-decoration: underline;font-weight: bold';
count++;
}

   );
   document.getElementById('result').textContent = `${count} matches found`


}
