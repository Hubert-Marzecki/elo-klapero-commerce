import styled from "@emotion/styled";
import Link from 'next/link';

export default function CategoriesDisplayRiverse() {

    return (
        <StyledContainer>
            <div className="grid-container">
                <div className="grid__element Big"> <span className="button"><Link href="/ ">INNE</Link></span></div>
                <div className="grid__element Small1"> <span className="button"><Link href="/ ">BLUZY </Link></span> </div>
                <div className="grid__element Small2"> <span className="button"><Link href="/ ">KOSZULKI</Link></span> </div>
            </div>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
  padding: 1em 0;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
    "Small1 Big"
    "Small2 Big ";
  }
  .grid__element{
    cursor: pointer;
    position: relative;
    
    .button{
      position: absolute;
      color:white;
      font-weight: 600;
      padding: 0.7em 2em;
      right: 10px;
      bottom: 10px;
      background-color: rgba(10,10,10,0.6);
      
    }
  }
  .Big { grid-area: Big;
    height: 500px;
    background-image: url("https://picsum.photos/id/1011/500/500");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .Small1 { grid-area: Small1;
    height: 250px;
    background-image: url("https://picsum.photos/id/1005/500/250");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .Small2 { grid-area: Small2;
    height: 240px;
    background-image: url("https://picsum.photos/id/10/500/240");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`