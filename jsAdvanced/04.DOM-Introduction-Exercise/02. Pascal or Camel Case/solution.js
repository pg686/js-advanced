function solve() {
  //TODO...
  let text = document.getElementById('text').value;
  let covertTo = document.getElementById('naming-convention').value;
  let result = applyNamingConvenntion(text,covertTo);
document.getElementById('result').textContent = result;
  function applyNamingConvenntion(text, convention){
    const conventionSwitch = {
      'Pascal Case': () => text.toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(''),
      'Camel Case': () => text.toLowerCase().split(" ").map((el,index) =>el = index !== 0 ? el[0].toUpperCase() + el.slice(1) : el).join(''),
      default: () => 'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)()
  }
}