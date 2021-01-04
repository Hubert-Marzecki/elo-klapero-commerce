import styled from "@emotion/styled";

export default function SectionTitle(props: {text:string}) : JSX.Element {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    )
}
const StyledTitle = styled.div`
    font-size: 2em;
    text-align: center;
  font-weight: 600;
  margin-top: 2em;
`