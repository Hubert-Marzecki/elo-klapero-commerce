import styled from "@emotion/styled";
import {breakpoints  } from '../styles/theme';

export default function Kivi(props: {url : string}) {
    return (
        <StyledKivi>
            <img src={props.url} />
            </StyledKivi>
    )
}

const StyledKivi = styled.div`
  margin-top: 80px;
  padding: 0;
  

img {
  width: 100vw !important;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 50vh;
    width: auto !important;
  }
}
`