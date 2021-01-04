import styled from "@emotion/styled";
import SliderItem from "./SliderItem";
import Carousel from 'react-elastic-carousel';
import {useState} from "react";

export  default function ProductSlider( props: {items: [unknown]}) {

    const [brakePoints] = useState(
        [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 3
                , itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 },
        ]
    );


    return (
        <StyledSlider>
            <Carousel  breakPoints={brakePoints} >
                {props.items.map((item: unknown) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
                {props.items.map((item: unknown) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
                {props.items.map((item: unknown) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
            </Carousel>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    .rec-arrow{
      display: none;
    }
`