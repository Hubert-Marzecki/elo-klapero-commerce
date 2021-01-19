import styled from "@emotion/styled";
import Link from 'next/link';
import {commerce} from "../lib/commerce";
import addToCart from '../pages/_app'
export  default function SliderItem(props: {item: any}) : JSX.Element {


    // function addToCard(prod_id:string,e: Event) : void {
    //     e.preventDefault();
    //       commerce.cart.add(prod_id)
    //         .then((cart:any) => console.log(cart));
    //              console.log(commerce.cart)
    // }

    return (
        <StyledItem >
            <div className="content__holder">
                <img className="image" src={props.item.assets[0].url} alt="" />
                <h5 className="name">{props.item.name}</h5>
                <p className="price">Od {props.item.price.formatted}</p>
            </div>

                <button className="add__to__cart" onClick={(e) => addToCart(props.item.id)}>Do koszyka</button>
        </StyledItem>
    )
}

const StyledItem = styled.div`
  text-align: center;
  margin-bottom: 4em;
  cursor: pointer;
  .content__holder{
    height: 400px;
  }
    .image{
      width: 300px;
      margin: 0 1em;
    }
  .name{
    text-transform: uppercase;
  }
  .price{
    margin-top: 3em;
    color: gray;
    font-weight: bold;
  }
  .add__to__cart{
    background: black;
    border: none;
    padding: 1em 2em;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
    
`