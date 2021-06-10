function solve() {
   //TODO...
   let button = [...document.querySelectorAll('.add-product')];
   let textarea = document.getElementsByTagName('textarea')[0];
   let products = [];
  button.forEach(e=> e.addEventListener('click',function click(e){
   let parentDiv = e.target.parentNode.parentNode;
   let productName = parentDiv.querySelector('.product-title').textContent;
   let productPrice = Number(parentDiv.querySelector('.product-line-price').textContent);
products.push({productName,productPrice});
textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
}));

document.querySelector('.checkout').addEventListener('click', function checkout(e){
   let totalPrice = products.reduce((acc, curr) => {
    acc += curr.productPrice ;
    return acc;
   },0)
   let list = products.reduce((acc,curr) => {
      if(!acc.includes(curr.productName)){
         acc.push(curr.productName)
      }
      return acc;
   }, [])
   textarea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`

});

}