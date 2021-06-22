function solve() {
    console.log('TODO');

    let addButton = document.querySelector('.form-control button');
    let modules = document.querySelector('.modules')
    addButton.addEventListener('click' , addnewLecture)
    

    function addnewLecture(e){
        e.preventDefault();
        let lectureName = document.querySelector('input[name="lecture-name"]');
        let lectureDate = document.querySelector('input[name="lecture-date"]') ;
        let lectureModule = document.querySelector('select[name="lecture-module"]')   ;
        let lectureNameVal =lectureName.value;
        let lectureDateVal = lectureDate.value;
        let lectureModuleVal =lectureModule.value;
        if(lectureNameVal.trim() !==  '' &&
        lectureDateVal.trim() !== '' &&
        lectureModuleVal.trim() !== '' && !lectureModuleVal.includes('Select')
        ){
            

            let h3El = document.createElement('h3');
            h3El.textContent = `${lectureModuleVal.toUpperCase()}-MODULE`;

            let newUl = document.createElement('ul');
            let newLi = document.createElement('li');
            newLi.classList.add('flex');

            let h4El  = document.createElement('h4');
            let formatedDate = formatDate(lectureDateVal)
            h4El.textContent = `${lectureNameVal} - ${formatedDate}`;
newLi.title =`${formatedDate}`
            let delBtn = document.createElement('button');
            delBtn.classList.add('red');
            delBtn.textContent= 'Del';
delBtn.addEventListener('click' , deleteAction)
            newLi.appendChild(h4El);
            newLi.appendChild(delBtn);

        let h3Children = Array.from(document.querySelectorAll('.module h3'));
        console.log(!h3Children.find(x => x.textContent === `${lectureModuleVal.toUpperCase()}-MODULE`))
     
if(modules.children.length == 0 || !h3Children.find(x => x.textContent === `${lectureModuleVal.toUpperCase()}-MODULE`)){
    let newDivModule = document.createElement('div');
    newDivModule.classList.add('module');
    newDivModule.appendChild(h3El);
    newUl.appendChild(newLi);
    newDivModule.appendChild(newUl);
    modules.appendChild(newDivModule)
        }

        if(h3Children.find(x => x.textContent ===  `${lectureModuleVal.toUpperCase()}-MODULE`)){
let currentModuleIndex =       h3Children.findIndex(x => x.textContent ===  `${lectureModuleVal.toUpperCase()}-MODULE`)     
let currentModule = modules.children[currentModuleIndex];
let ul = currentModule.querySelector('ul');
ul.appendChild(newLi)
Array.from(ul.children).sort((a, b) =>  a.title.localeCompare(b.title)).forEach(x => ul.appendChild(x));
}

    }
}

function formatDate(date){
    let regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})/;
    let  match = date.match(regex);
    return `${match[1]}/${match[2]}/${match[3]} - ${match[4]}:${match[5]}`;
}
 
function deleteAction(e){

    if(e.target.parentElement.parentElement.children.length == 1){
        e.target.parentElement.parentElement.parentElement.remove();
    }
  else{
   e.target.parentElement.remove();

  }
}
}