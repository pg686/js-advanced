function getArticleGenerator(articles) {
    // TODO
    let list =[];

      function solve() {
          if(articles.length >0){
          let current = articles.shift()
        list.push(current);
      
            let newArticle = document.createElement("ARTICLE");
            let div = document.getElementById('content');
            newArticle.textContent = current;
            div.appendChild(newArticle)
      }
          
    }
    return solve;

}
