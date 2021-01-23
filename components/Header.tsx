import styled from "@emotion/styled";
import logo from '../public/logo.png';
import Link from 'next/link';
import {useContext, useState} from "react";
import {CartContext} from "./store";


export default function Header(): JSX.Element {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {cart} : any = useContext(CartContext);

    return (
        <StyledHeader>
            <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar bg-white shadow">
                <div className="container d-flex ">
                    <Link href="/">
                        <a className="navbar-brand" href="/">
                            <img src={logo}/>
                            &nbsp;
                        </a>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={isOpen ? " navbar-collapse" : " collapse  navbar-collapse"} id="basicExampleNav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link href="/store">
                                    <a href="#" className="nav-link waves-effect">
                                        Sklep
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a href="#" className="nav-link waves-effect">
                                        O nas
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item text-black">
                                <Link href="/contact">
                                    <a href="#" className="nav-link waves-effect text-black">
                                        Kontakt
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <a href="#!" className="nav-link waves-effect text-black">
                                    Items: {cart.length}
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

  nav {
  }

  .nav-item {
    margin: 1em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .nav-link {
    color: black !important;
  }

  img {
    display: inline-block;
    width: 200px;
  }


`