function solve(){
    class Post {
        constructor(title,content){
            this.title = title;
            this.content = content;
        }

    toString(){ 
        return `Post: ${this.title}\nContent: ${this.content}`

    }

}
class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes){
        super(title,content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }
    addComment(newComment) {
        this.comments.push(newComment);
    }
 

    toString() {
        let baseString  = super.toString();
        let allComments =`Comments:\n`
        allComments += this.comments.map(x => ` * ${x}`).join('\n');
        allComments  =  this.comments.length > 0 ? allComments : '';
      return  `${baseString}\nRating: ${this.likes - this.dislikes}\n${allComments}`
    }

}
class BlogPost extends Post {
    constructor(title,content,views){
        super(title,content);
        this.views = views;
    }

    view() {
        this.views++;
        return this;
    }

    toString() {
        let baseToString = super.toString();
        return  `${baseToString}\nViews: ${this.views}`
      }

}
return {
    Post,
    SocialMediaPost,
    BlogPost
}
}
const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
