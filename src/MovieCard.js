import React from "react";
import {Component} from "react";

// class MovieCard extends React.Component {
//     render(){

//     }
// }

class MovieCard extends Component{

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

        // Destructuring the object to get the values...
        const {title, plot, price, rating, stars, fav, cart, poster} = this.props.data;

        return (
        <div className="main">
            <div className="movie-card">

                <div className="left">
                    <img src = {poster} 
                    className="Movie icon" />
                </div>
                <div className="right">
                    <div className="title"> {title} </div>
                    <div className="plot"> {plot} </div>
                    <div className="price"> Price: ${price} </div>

                    <div className="footer"> 
                    <div className="rating"> Rating: {rating} </div>
                    <div className="star-dis"> 
                    <img className="str-btn" 
                    src="https://cdn-icons-png.flaticon.com/128/4721/4721635.png" 
                    onClick={this.addStars}
                    alt="increase"/>  

                    <img src="https://cdn-icons-png.flaticon.com/512/616/616489.png" 
                    class="stars" />

                    <img className="str-btn" 
                    src="https://cdn-icons-png.flaticon.com/128/4721/4721635.png"
                    onClick = {this.subStars}
                    alt="decrease"/>

                    <span className="starCount"> {stars} </span>
                    </div>

                    { /* Conditional Rendering */ }

                    {/* { fav ? <button onClick = { this.handleFavourite } className="unfavourite-btn"> UnFavourite </button> :    
                    <button onClick = { this.handleFavourite } className="favourite-btn"> Favourite </button>} */}

                    <button className = { fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFavourite}> 
                    { fav ? "unfavourite" : "favourite"} </button>
                 
                    <button onClick = {this.addToCartChange} className = { cart ? "remove-btn" : "cart-btn"}>
                    { cart ? "Remove" : "Add to cart"} </button>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default MovieCard;