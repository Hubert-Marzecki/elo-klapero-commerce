import {commerce} from "../lib/commerce";
import {useState} from "react";
import {Dropdown, Form} from "react-bootstrap";
import styled from "@emotion/styled";
import {log} from "util";
import StoreElement from "../components/StoreElement";
import {breakpoints} from "../styles/theme";

export  default function Store({res}) {
    const [state] = useState(res.data);
    const [selectedCathegory, setSelecetedCathegory] = useState<string>("bluza")
    const [visibleProducts, setVisibleProducts] = useState<Array<any>>(state)
    const [sortDown, setSortDown] = useState<boolean>(true);

    function filterByCategory (e) {
        const newSelected = e.target.value;
        if(newSelected === "Brak filtra") {
            setSelecetedCathegory("");
            setVisibleProducts(state)
        } else {
            const filteredItems = state.filter(item => {
                return item.categories[0].slug === newSelected
            })
            setVisibleProducts(filteredItems)
        }
    }

    function sortItems (e) {
        const selectedPrice = e.target.value;
        const copy = [...visibleProducts];

        switch (selectedPrice) {
            case "Od najtańszych" :
                const newVisbleProd = copy.sort((a,b) => {return a.price.raw - b.price.raw})
                setVisibleProducts(newVisbleProd)
            break;

            case "Od najdroższych" :
                const newVisibleProd = copy.sort((a,b) => {return b.price.raw - a.price.raw})
                setVisibleProducts(newVisibleProd)
                break;
        }
    }

    return (
        <>
            <StyledContainer>
                <div className={"store__control"}>

                <Form.Control className={"select"} as="select" onClick={(e) => filterByCategory(e)}>
                    <option>Brak filtra</option>
                    <option>koszulka</option>
                    <option>bluza</option>
                </Form.Control>

                <Form.Control className={"select"} as="select" onClick={(e) => sortItems(e)}>
                    <option>Od najtańszych</option>
                    <option>Od najdroższych</option>
                </Form.Control>
                </div>

<div className={"store__container"}>
            {visibleProducts.map(item => {
                return (
                        <StoreElement item={item} key={item.id}/>
                )
            })}
</div>
            </StyledContainer>
        </>
    )
}
const StyledContainer = styled.div`
  width: 70vw;
  margin: 140px auto;
  overflow-x: hidden;
  max-width: 100vw;
  
  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100vw;
  }
  .store__control{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .store__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .select{
    width: fit-content;
  }
`

export const getServerSideProps = async () =>  {
    // Fetch data from external API
    const res =await commerce.products.list().then((res:any) => {return res})
    // const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            res: res,
        }
    }
}
