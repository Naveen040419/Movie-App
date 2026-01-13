import { Component } from "react";
import MovieCard from "./MovieCard";   

class MovieList extends Component{

    constructor(){
        super();
        this.state = {
            // title: "The Avengers", 
            // plot: "Supernatural powers shown in movie",
            // price: 199,
            // rating: 8.5,
            // stars: 0,
            // fav : false,
            // cart : false
            movies : [
                { 
                title: "The Avengers", 
                plot: "Supernatural powers shown in movie",
                price: 199,
                rating: 8.5,
                stars: 0,
                fav : false,
                cart : false,
                poster : "https://m.media-amazon.com/images/I/71niXI3lxlL._SL1181_.jpg" 
                },
                {
                title: "The Matrix", 
                plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                price: 199,
                rating: 8.5,
                stars: 0,
                fav : false,
                cart : false,
                poster : "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
                },
                {
                title: "The Hulk", 
                plot: "Bruce Banner, a scientist on the run from the U.S. Government, must find a way to cure himself of the gamma radiation that contaminated his cells and transformed him into a raging green monster.",
                price: 199,
                rating: 8.5,
                stars: 0,
                fav : false,
                cart : false,
                poster : "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
                },
                {
                title: "The IronMan", 
                plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                price: 199,
                rating: 8.5,
                stars: 0,
                fav : false,
                cart : false,
                poster : "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
                }
            ]
        }
    }

     // Arrow function to retain the context of 'this'
    // Arrow functions do not have their own 'this', 
    // they use the 'this' from the surrounding lexical context
    addStars = () =>{

        // form1 : Using a function inside setState to get the previous state
        // and return the updated state...

        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // form2 : Using object directly inside setState

        if( this.state.stars <=5 ) return;

        this.setState( (prevState)=> {
            return {
                stars: prevState.stars + 0.5
            }
        })
    }

    subStars = ()=>{

        if( this.state.stars <=0 ) return;

        this.setState( (prevState)=>{
            return{
                stars: prevState.stars - 0.5
            },
            () => { console.log("stars: ", this.state.stars)}
        })
    }

    handleFavourite = () => {
        this.setState( {
            fav : !this.state.fav
        })
    }

    addToCartChange = () => {
        this.setState({
            cart : !this.state.cart
        })
    }


    render(){

        // destructuring the state object to get movies array

        const { movies } = this.state; 
        return(
            <>

            { /* Iterating over the movies array using map function */}
            {
              movies.map( (movie) => (
                <MovieCard data = {movie} />
              ))  
            }
            </>
        )
    }
}

export default MovieList;