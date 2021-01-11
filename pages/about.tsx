import Kivi from "../components/Kivi";
import Header from "../components/Header";
import styled from "@emotion/styled";
import {breakpoints} from "../styles/theme";
import JoinUsBanner from "../components/JoinUsBanner";

export  default function About() {
    return (
        <>

            <StyledContainer>
                <Kivi url="https://picsum.photos/id/1006/2000/700" />
            <StyledHero>
                <div className="half__holder ">
                    <h1 className="page__header">
                        Sklep na chillu
                    </h1>
                    <p className="caption">
                        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
                    </p>
                </div>
                <div className="half__holder">
                    <div className="grid-container">
                        <div className="One"><img src="https://picsum.photos/id/79/300" /></div>
                        <div className="Two"><img src="https://picsum.photos/id/227/300"/></div>
                        <div className="Three"><img src="https://picsum.photos/id/37/300" /></div>
                        <div className="Four"><img src="https://picsum.photos/id/27/300"/></div>
                    </div>
                </div>

                <StyledTriptic >
                <div className="img__holder img__one">
                    <img src="https://picsum.photos/id/237/300/600" />
                </div>
                <div>
                    <h3 className=""> BLA BLA BLA</h3>
                    <p className="">
                        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
                    </p>
                </div>
                <div className={"img__holder"}>
                    <img src="https://picsum.photos/id/237/300/600" />
                </div>
                </StyledTriptic>
            </StyledHero>
                <JoinUsBanner />

            </StyledContainer>
            </>
    )
}
const StyledContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  overflow-x: hidden;
  max-width: 100vw;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100vw;
  }
`
const StyledHero = styled.div`
            max-width: 100vw;
            display: flex;
            justify-content: center;
            margin: 6em auto;
            flex-wrap:  wrap;
            @media only screen and (max-width: ${breakpoints.mobile}) {
            width: 90vw;
        }

            .half__holder{
            width: 50%;
            display: flex;
            flex-direction: column;
            margin: auto 0em;
            @media only screen and (max-width: ${breakpoints.mobile}) {
            width: 100%
        }
            .page__header{
            font-size: 3em;
            font-weight: 700;
              margin-right: 5em;
              @media only screen and (max-width: ${breakpoints.mobile}) {
                margin-right: 0;
              }
            }
        }
            .caption{
            margin-right: 5em;
              @media only screen and (max-width: ${breakpoints.mobile}) {
             margin: 2em 0 ;
              }
            }
        }

              .grid-container {
                
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 0px 0px;
                grid-template-areas:
    "One Two"
    "Three Four";
              }
              .One { grid-area: One; }
              .Two { grid-area: Two;
                @media only screen and (max-width: ${breakpoints.mobile}) {
                  display: none;
                }
              }
              }
              .Three { grid-area: Three; }
              .Four { grid-area: Four;
                @media only screen and (max-width: ${breakpoints.mobile}) {
                 display: none;
                }
              }
@media only screen and (max-width: ${breakpoints.mobile}) {
  img{
    width: 90vw;
  }
}


            `

const StyledTriptic = styled.div`
    display: flex;
  align-items: center;
  margin-top: 100px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
  flex-wrap: wrap;
    .img__one{
      display: none;
    }
  }
  
.img__holder{
  
}  
  
  h3{
    text-align: center;
  }

  p{
    text-align: justify;
    margin: 2em;
  }
`