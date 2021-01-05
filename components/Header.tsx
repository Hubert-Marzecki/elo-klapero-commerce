import styled from "@emotion/styled";
import logo from '../public/logo.png';
import Link from 'next/link';
import {useState} from "react";

export  default  function Header() : JSX.Element{

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <StyledHeader>

            <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar bg-white shadow">
                <div className="container d-flex ">

                    <a className="navbar-brand" href="/">
                        <img src={logo} />
                        &nbsp;
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className={ isOpen ? " navbar-collapse" : " collapse  navbar-collapse"} id="basicExampleNav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Sklep
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    O nas
                                </a>
                            </li>
                            <li className="nav-item text-black">
                                <a href="#!" className="nav-link waves-effect text-black">
                                    Kontakt
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#!" className="nav-link waves-effect text-black">
                                    ICONS
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </StyledHeader>

    )
}

const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  z-index: 1000;
  width: 100%;
  nav{
  }
  .nav-item{
    margin: 1em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .nav-link{
    color: black !important;
  }
  
  img{
    display: inline-block;
    width: 200px;
  }
 

`