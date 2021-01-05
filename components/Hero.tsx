import styled from "@emotion/styled";
import {breakpoints} from "../styles/theme";

export default function Hero() {
    return (
        <StyledHero>
            <div className="half__holder">
            <h1 className="page__header">
                Sklep na chillu
            </h1>
            <p className="caption">
                Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
            </p>

            <div className="button__holder">
                <button className="button">
                            Poznaj Nas
                </button>
                <button className="button button--secondary">
                            Sklep
                </button>


            </div>
            </div>
            <div className="half__holder">
                <img src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc" />
            </div>
        </StyledHero>
    )
}

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
      }
      .caption{
        margin-right: 5em;
      }
      
      img{
          float: right;
          width: 98%;
        margin-left: auto;
      }
    }
  
  .button__holder{
    margin-top: 2em ;
    
    @media only screen and (max-width: ${breakpoints.mobile}) {
      margin: 1em 0em;
    }
    .button{
      text-transform: uppercase;
      font-weight: 800;
      padding: 0.7em 3em;
      margin-right: 1em;
      border: 2px solid #FF6C6C;
      background-color: #FF6C6C; ;
      color:white;
      cursor: pointer;
      @media only screen and (max-width: ${breakpoints.mobile}) {
        margin: 0.5em 0;
      }
      &--secondary{
        background-color: white;
        color: #FF6C6C;
      }
    }
    
    
  }
    
`