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

export default function Home({info,res})  {
const [state, setState] = useState(res);
    console.log(state)

    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000))
        ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
        ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000))
    }, [])

    useEffect(() => void reset(), [])



    return (
         <>
             <PageWrapper>
                 <Header />

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