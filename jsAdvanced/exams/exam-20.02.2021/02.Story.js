class Story {
    // TODO: implement this class...
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];

    }
    get likes(){
        if(this._likes.length === 0){
            return `${this.title} has 0 likes`
        }
        if(this._likes.length === 1){
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`

    }


    like(username){
        if(this._likes.find(x => x === username)){
            throw new Error(`You can't like the same story twice!`)
        }
        if(username === this.creator){
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike (username){
if(!this._likes.find(x => x === username)){
    throw new Error(`You can't dislike this story!`)
}
let index = this._likes.findIndex(x => x === username);
this._likes.splice(index,1);
return `${username} disliked ${this.title}`

    }
    comment (username, content, id){
        if(id === undefined || !this.comments.find(x=> x.Id == id)){
            this.comments.push({Id: `${this.comments.length+1}`, Username: `${username}`, Content: `${content}` , Replies: []})
    return `${username} commented on ${this.title}`        
        }
      let comment =   this.comments.find(x => x.Id == id)
      let repliesCount = comment.Replies.length;
        comment.Replies.push({Id: `${comment.Id}.${repliesCount+1}`,Username: `${username}`, Content: `${content}` });
   return `You replied successfully`
    }

    toString(sortingType){
        let sortType = {
            "asc" : (a,b) => a.Id - b.Id,
            "desc":(a,b) => b.Id-a.Id,
            "username" : (a,b) => a.Username.localeCompare(b.Username)
        }
let result = `Title: ${this.title}
Creator: ${this.creator}
Likes: ${this._likes.length}
Comments:`


this.comments.sort(sortType[sortingType]).forEach(x=> 
    { result += `\n-- ${x.Id}. ${x.Username}: ${x.Content}`;
if(x.Replies.length > 0){
     x.Replies.sort(sortType[sortingType]).forEach(x => {
        
        result += `\n--- ${x.Id}. ${x.Username}: ${x.Content}`
})
}});
    return result;
`
-- {id}. {username}: {content}
-- {id}. {username}: {content}
--- {replyId}. {username}: {content}
--- {replyId}. {username}: {content} 
-- {id}. {username}: {content}
..."
`

        
    }


}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
