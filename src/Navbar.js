import React from "react";
import styled from "styled-components";

// Styled Components styling...

const Nav = styled.div` 
  width : 100%;
  height : 70px;
  background-color: rgb(44, 44, 227);
  display: flex;
  justify-content: space-between;`

const Title = styled.div`
  color : white;
  font-size : 24px;
  margin-left : 20px;
  align-self : center;
  font-weight : bold;
  &:hover{ color : orange; cursor : pointer; }` 

// Dynamic styling based on props can also be done like this  

const CartContainer = styled.div`
  color : ${ (props) => props.color };
  font-size : 18px;
  margin-right : 20px;
  visibility : ${ (props) => props.show ? "visible" : "hidden" };
  &:hover{ color : orange; cursor : pointer; }`    

class Navbar extends React.Component{
    render(){
        return(
            <>
            <Nav>
            <Title>
                Movie-App
            </Title>

            <CartContainer color = "yellow" show = {true}>
                <img style = {styles.cartContainerImg} src = "https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt = "cart icon" />
                {/* <span style = {styles.cartCount} className="styles.cartCount"> 3 </span> */}
            </CartContainer> 

            </Nav>
            </>
        )
    }
}

export default Navbar;

// Inline styles....
const styles = {

    navbar : {
        width : "100%",
        height : "70px",
        backgroundColor: "rgb(44, 44, 227)",
        display: "flex",
        justifyContent: "space-between"
    },
    title : {
        color : "white",
        fontSize : "24px",
        marginLeft : "20px",
        alignSelf : "center",
        fontWeight : "bold"
    },
    cartContainer : {
        color : "white",
        fontSize : "18px",
        marginRight : "20px",
    },
    // cartCount : {
    //     marginTop : "-10px",
    //     fontWeight : "bold"
    // },
    cartContainerImg : {
        margin : "20px",
        width : "24px",
        height : "24px"
    }
}