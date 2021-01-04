import styled from "@emotion/styled";
import logo from '../public/logo.png';
import Link from 'next/link';

export  default  function Header() : JSX.Element{
    return (
        <StyledHeader>
                <nav>
                    <Link href="/" >
                        <li  className="link">
                            Sklep
                        </li>
                    </Link>
                    <Link href="/">
                        <li  className="link">
                            O nas
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="link link--logo">
                            <img src={logo} alt="" />
                        </li>
                    </Link>
                    <Link href="/" >
                        <li className="link">
                            Sale
                        </li>
                    </Link>

                    <Link href="/" >
                        <li  className="link">
                            Kontakt
                        </li>
                    </Link>



                </nav>
        </StyledHeader>

    )
}

const StyledHeader = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  
nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  
  .link{
    list-style: none;
    margin: 2em;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    
    &--logo{
      position: relative;
      margin: 1em 4em 0;
      
    }
  }
}
`