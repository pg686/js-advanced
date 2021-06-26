const { describe }  = require('mocha');
const { assert }  = require('chai');

class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}

describe("Tests …", function() {
    let instance = undefined;
   // describe("constructor", function() {
   //     it("constructor", () =>{
   //         // TODO: …
   //       // this.movieCollection = [];
   //       // this.watched = {};
   //       // this.actors = [];
   //         let instance = new ChristmasMovies();
   //         assert.deepEqual(instance.movieCollection, []);
   //         assert.deepEqual(instance.watched, {});
   //         assert.deepEqual(instance.actors, []);
   //     });
   //  });
     describe("buyMovie", function() {
        it("test with new actors", () =>{
        
            let instance = new ChristmasMovies();

            let firstArg = 'Last Christmas';
         let actors =  ['Madison Ingoldsby', 'Emma Thompson', 
         'Boris Isakovic', 'Madison Ingoldsby'];
         let expectedActors = ['Madison Ingoldsby', 'Emma Thompson', 
         'Boris Isakovic']
        assert.equal(instance.buyMovie(firstArg,actors),`You just got ${firstArg} to your collection in which ${expectedActors.join(', ')} are taking part!` )
        });
        it("test with movie that is already added", () =>{
        
            let instance = new ChristmasMovies();
instance.movieCollection.push('Last Christmasasd')
            let firstArg = 'Last Christmasasd';
         let actors =  ['Madison Ingoldsby', 'Emma Thompson', 
         'Boris Isakovic', 'Madison Ingoldsby'];
         instance.buyMovie(firstArg,actors)
        assert.throw(() => instance.buyMovie(firstArg,actors),`You already own ${firstArg} in your collection!` )
        });
        
     });
     describe("discardMovie", function() {
        it("test with movie not in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch';
            assert.throw(()=> instance.discardMovie(movieName),`${movieName} is not at your collection!` )

        });
        it("test with movie in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch';
            let actors = ['blq', 'blqq'];
            instance.buyMovie(movieName,actors);
            assert.throw(()=> instance.discardMovie(movieName),`${movieName} is not watched!` )

        });
        it("test with movie in movies and is watched", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch1';
            let actors = ['blq', 'blqq'];
            instance.buyMovie(movieName,actors);
            instance.watchMovie(movieName);
            assert.equal(instance.discardMovie(movieName),`You just threw away ${movieName}!` )

        });
        
    });
    describe("watchMovie", function() {
        it("test with movie not in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch123';
        
assert.throw(() =>  instance.watchMovie(movieName) , 'No such movie in your collection!' )
        });
        it("test with movie  in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch123';
            let actors = ['actor1', 'axtor2']
        instance.buyMovie(movieName,actors);
assert.equal( instance.watchMovie(movieName) , null )
        });
        it("test with watching movie  in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'The Grinch123';
            let actors = ['actor1', 'axtor2']
        instance.buyMovie(movieName,actors);
        instance.watchMovie(movieName)
        instance.watchMovie(movieName)
        instance.watchMovie(movieName)
assert.deepEqual( instance.watched[movieName] , 3 )
        });
    });
    describe("favouriteMovie", function() {
        it("test with movie1 and movie2 in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie1';
            let movieName2 = 'movie2';
            let actors1 = ['actor1', 'a' , 'blq']
            let actors2 = ['actor1', 'blq'];
            instance.buyMovie(movieName,actors1)
            instance.buyMovie(movieName2,actors2);
            instance.watchMovie(movieName);
            instance.watchMovie(movieName2);
            instance.watchMovie(movieName2);
            instance.watchMovie(movieName2);
            assert.equal(instance.favouriteMovie(), `Your favourite movie is ${movieName2} and you have watched it 3 times!`)

        });
        it("test with movie  in movies", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie12';
            let actors1 = ['actor1', 'a' , 'blq'];
            instance.buyMovie(movieName,actors1);   
            instance.watchMovie(movieName);
            assert.equal(instance.favouriteMovie(), `Your favourite movie is ${movieName} and you have watched it 1 times!`)

        });

        it("test with movie throws an error", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie12';
            let actors1 = ['actor1', 'a' , 'blq'];
            instance.buyMovie(movieName,actors1);   
            assert.throw(() =>instance.favouriteMovie(), 'You have not watched a movie yet this year!')

        });
        it("test with movie throws an error2", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie12';
            let actors1 = ['actor1', 'a' , 'blq'];
             
            assert.throw(() =>instance.favouriteMovie(), 'You have not watched a movie yet this year!')

        });
    });
    describe("favouriteMovie", function() {
        it("test with movie1 and movie2 in movies", () =>{


            let instance = new ChristmasMovies();
         let movieName = 'movie1';
         let movieName2 = 'movie2';
         let actors1 = ['actor1', 'a' , 'blq']
         let actors2 = ['actor1', 'blq'];
            let movieName3 = 'movie3';
            let actors3 = ['actor1','else']
           instance.buyMovie(movieName,actors1)
           instance.buyMovie(movieName2,actors2);
            instance.buyMovie(movieName3,actors3);
        instance.watchMovie(movieName);
       instance.watchMovie(movieName2);
       instance.watchMovie(movieName2);
       instance.watchMovie(movieName2);
            instance.watchMovie(movieName3);
            instance.watchMovie(movieName3);

            assert.equal(instance.mostStarredActor(), `The most starred actor is actor1 and starred in 3 movies!`)

        

        });

        
        it("test with movie throws an error212", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie12';
            let actors1 = ['actor1', 'a' , 'blq'];
             
            assert.throw(() =>instance.favouriteMovie(), 'You have not watched a movie yet this year!')

        });
        it("test with movie throws an error2", () =>{
            let instance = new ChristmasMovies();
            let movieName = 'movie12';
            let actors1 = ['actor1', 'a' , 'blq'];
             instance.buyMovie(movieName,actors1)
            assert.throw(() =>instance.favouriteMovie(), 'You have not watched a movie yet this year!')

        });
    });
     // TODO: …
});
