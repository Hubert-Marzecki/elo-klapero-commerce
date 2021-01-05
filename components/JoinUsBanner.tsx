import styled from "@emotion/styled";

export default function JoinUsBanner() {
    return (
        <StyledBanner>
                    <h2 className="header">
                        POZOSTAŃMY W KONTAKCIE!
                    </h2>
            <div className="social__icon__holder">
            </div>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
  height: 500px;
  background: url("https://picsum.photos/id/1016/2000/1000");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
     background-size: cover; /* Resize the background image to cover the entire container */

  display: flex;
  justify-content: center;
  align-items: center;
  
  .header{
    font-size: 3em;
    color: white;
    margin-top: -4em;
    font-weight: 600;
    max-width: 80%;
    text-align: center;
  }
`