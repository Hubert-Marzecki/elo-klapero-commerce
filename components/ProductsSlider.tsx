import styled from "@emotion/styled";
import SliderItem from "./SliderItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export  default function ProductSlider( props: {items: [any]}) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <StyledSlider>
            <Carousel
                responsive={responsive}
                ssr={true}
                showDots={true}
            >
                {props.items.map((item: any) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
                {props.items.map((item: any) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
                {props.items.map((item: any) => {
                    return (
                        <SliderItem item={item} key={item.id}/>
                    )
                })}
            </Carousel>
            <button className="cta">Zobacz wszystkie</button>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
margin: 3em 0;
  
  .cta{
    text-align: center;
    display: block;
    margin: 2em auto;
    background-color: #FF6C6C;
    border: none ;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`