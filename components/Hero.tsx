import styled from "@emotion/styled";

export default function Hero() {
    return (
        <StyledHero>
            <div className="half__holder">
            <h1 className="header">
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  font-family: 'Roboto', sans-serif;
  
        max-width: 100vw;
        display: flex;  
        justify-content: center;
        margin: 6em auto;
  
    .half__holder{
      width: 50%;
      display: flex;
      flex-direction: column;
      margin: auto 0em;
      
      .header{
        line-height: 0em;
        font-size: 3em;
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

    .button{
      text-transform: uppercase;
      font-weight: 800;
      padding: 0.7em 3em;
      margin-right: 1em;
      border: 2px solid #FF6C6C;
      font-family: 'Roboto', sans-serif;
      background-color: #FF6C6C; ;
      color:white;
      cursor: pointer;
      
      &--secondary{
        background-color: white;
        color: #FF6C6C;
      }
    }
    
    
  }
    
`