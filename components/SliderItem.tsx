import styled from "@emotion/styled";
import Link from 'next/link';

export  default function SliderItem(props: {item: any}) {
    return (
        <StyledItem >
                <img src={props.item.assets[0].url} alt="" />
                <h5>{props.item.name}</h5>
            <p>Od {props.item.price.formatted}</p>
            <Link href="">
                <button>Do Koszyka</button>
            </Link>
        </StyledItem>
    )
}

const StyledItem = styled.div`
  text-align: center;
    
    img{
      width: 300px;
    }
    
`