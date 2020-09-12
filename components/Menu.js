import Link from "next/link";
import styled from 'styled-components'
import React from "react";

const Menu_style = styled.div`

  background: black;
  font-size: 2em;


.btn-menu, .hidden-menu-ticker{
  display: none;
}
.hidden-menu{
  cursor: default;
  display: flex;
  justify-content: space-around;

  &>li{
    display: flex;
    align-items: center;
    justify-content: center;
     
  }
  &>li>a:hover{
   border-bottom:1px solid #ffa500;
   color:#ffa500;
   transition: color 0.3s linear;
   transition: border-bottom 0.3s linear; 
  }
  
  &>li>a{
    color: white;
    border-bottom:1px solid transparent;
  }
}
@media (max-width : 768px) {
  
   background: rgba(0,0,0,0);
  
  .hidden-menu {
    display: block;
    text-align: center;
    position: fixed;
    list-style:none;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    width: 200px;
    background-color: rgba(0,0,0,0.7);
    height: 100%;
    top: 0;
    right: -200px;
    transition: right .2s;
    z-index: 2;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    &>li{
      margin: 10px 0;
    }
  }
  .hidden-menu-ticker {
    display: none;
  }
  .btn-menu {
    display: block;
    color: #fff;
    background-color: black;
    padding: 5px;
    position: fixed;
    top: 5px;
    right: 5px;
    cursor: pointer;
    transition: right .23s;
    z-index: 3;
    width: 35px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .btn-menu span {
    display: block;
    height: 5px;
    background-color: #fff;
    margin: 5px 0 0;
    transition: all .1s linear .23s;
    position: relative;
  }
  .btn-menu span.first {
    margin-top: 0;
  }
  .hidden-menu-ticker:checked ~ .btn-menu {
    right: 160px;
  }
  .hidden-menu-ticker:checked ~ .hidden-menu {
    right: 0;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.first {
    -webkit-transform: rotate(45deg);
    top: 10px;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.second {
    opacity: 0;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.third {
    -webkit-transform: rotate(-45deg);
    top: -10px;
  }
}
`

export default function Menu({children}){
    return(
        <>
            <Menu_style>
                    <input type="checkbox" id="hmt" className="hidden-menu-ticker" />
                        <label className="btn-menu" htmlFor="hmt">
                            <span className="first"/>
                            <span className="second"/>
                            <span className="third"/>
                        </label>
                        <ul className="hidden-menu">
                            <li><Link href='/i'><a>I</a></Link></li>
                            <li><Link href='/work'><a>work</a></Link></li>
                            <li><Link href='/library/home' as={'/library/home'}><a>library</a></Link></li>
                        </ul>
            </Menu_style>
                {children}
        </>

    )
}
