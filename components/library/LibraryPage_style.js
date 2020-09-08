import styled from "styled-components";

let LibraryPage_style = styled.div`

  width: 100%;
  height: 100%;
  color:white;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-areas:"menu page" ;
    
  &>div{
    margin: 1%;
    background: rgba(100,100,100,0.6)}
     border-radius: 10px;

  &>.menu_library_style{
    grid-area: menu;
    border-right: 1px solid orange;
   
  }
  &>.page_style{
    grid-area: page;
    overflow:auto;
  }
}


@media (max-width : 768px) {

    grid-template: 1fr/9fr 3fr;
    grid-template-areas: "page menu";
     &>div{
    margin: 2%;
    }
  
}


  
`
export default LibraryPage_style;
