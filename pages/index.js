import styled from "@emotion/styled";
import {commerce} from "../lib/commerce";
import {useState} from "react";
import Products from "../components/products/Products";

export default function Home() {
const [state, setState] = useState();

    return (
         <>
             <Products />
        <div>E-commerce</div>
        </>
  )


}
