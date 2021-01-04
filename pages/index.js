import styled from "@emotion/styled";
import {commerce} from "../lib/commerce";
import {useState} from "react";
import Products from "../components/products/Products";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoriesDisplay from "../components/CategoriesDisplay";
import CategoriesDisplayRiverse from "../components/CathegoriesDisplayRiverse";
import JoinUsBanner from "../components/JoinUsBanner";
import ProductSlider from "../components/ProductsSlider";

export default function Home({info,res})  {
const [state, setState] = useState(res);
    console.log(state)

    return (
         <>
             <Header />
             <StyledContainer>
             <Hero />
            <SectionTitle text="COŚ NA NOGI" />
            <CategoriesDisplay />
                 <SectionTitle text="COŚ NA CIAŁKO" />
                 <CategoriesDisplayRiverse />
                 <JoinUsBanner />
                 <ProductSlider items={state.data} />
             </StyledContainer>

         </>
  )
}

export const getServerSideProps = async () =>  {
    // Fetch data from external API
    const res =await commerce.products.list().then(res => {return res})
    console.log(`{$res} dupa`)
    // const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            info: 1,
            res: res,
        }
    }
}
const StyledContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
`