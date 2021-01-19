import styled from "@emotion/styled";
import {commerce} from "../lib/commerce";
import {useContext, useState} from "react";
import {CartContext} from "./store";




export default function StoreElement(props: {item: any}) {

    const [mouseOver, setMouseOver] = useState(false);
    const context = useContext(CartContext);
    function addToCard(prod_id:string,e:Event) : void {
        e.preventDefault();
        commerce.cart.add(prod_id)
            .then((cart:any) => console.log(cart));
    }

    return (
        <StyledStoreElement>
            <div className="image__holder" onMouseOver={() => setMouseOver(true)}
            onMouseLeave={()=> setMouseOver(false)}
            >
                <img className="image" src={props.item.assets[0].url} alt="" />
                <button className={mouseOver ? "button button--visible" : "button button--hidden" }> Do koszyka </button>

            </div>
            <h5 className="name">{props.item.name}</h5>
            <p className="price">Od {props.item.price.formatted}</p>
                {/*<button onClick={(e) => addToCard(props.item.id,e)}> DODAJ DO KOSZYKA </button>*/}
            </StyledStoreElement>
    )
}

const StyledStoreElement = styled.div`
        background-color: #0070f3;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin: 20px;
         text-align: center;
        .name{
          font-weight: 700;
        }
  .price{
    font-weight: 300;
    font-size: 1.2em;
  }
  .image__holder{
    position: relative;
  }
.image{
  width: 20vw;
}
  .button {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: all 0.4s ease;
  &--visible{
    opacity: 1;
    transition: all 0.4s ease;
  }
  }

`