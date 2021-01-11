import styled from "@emotion/styled";
import {commerce} from "../lib/commerce";
import {useCallback, useEffect, useRef, useState} from "react";
import Products from "../components/products/Products";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoriesDisplay from "../components/CategoriesDisplay";
import CategoriesDisplayRiverse from "../components/CathegoriesDisplayRiverse";
import JoinUsBanner from "../components/JoinUsBanner";
import ProductSlider from "../components/ProductsSlider";
import Kivi from "../components/Kivi";
import {useTransition,  animated } from "react-spring";
import {breakpoints} from "../styles/theme";

export default function Home({res})  {
const [state, setState] = useState(res);



    return (
         <>
             <PageWrapper>
                 <Kivi url="https://picsum.photos/id/1006/2000/700" />
                 <StyledContainer>
                 <Hero />
            <SectionTitle text="COŚ NA NOGI" />
            <CategoriesDisplay />
                 <SectionTitle text="COŚ NA CIAŁKO" />
                 <CategoriesDisplayRiverse />
                 <JoinUsBanner />
                 <SectionTitle text="NOWE " />
                 <ProductSlider items={state.data} />
             </StyledContainer>
             </PageWrapper>
             {/*<div>*/}
             {/*    {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (*/}
             {/*        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>*/}
             {/*            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>*/}
             {/*        </animated.div>*/}
             {/*    ))}*/}
             {/*</div>*/}
         </>
  )
}
// TODO - Expreiment https://www.npmjs.com/package/react-scrolling-color-background

export const getServerSideProps = async () =>  {
    // Fetch data from external API
    const res =await commerce.products.list().then(res => {return res})
    // const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            info: 1,
            res: res,
        }
    }
}

const PageWrapper = styled.div`
    max-width: 100vw;
  overflow-x: hidden;
`
const StyledContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  overflow-x: hidden;
  max-width: 100vw;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100vw;
  }
`