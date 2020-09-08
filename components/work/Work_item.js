import styled from 'styled-components'
import React, {useState} from "react";

let Work_item_style = styled.div`
@media (max-width : 768px) {
    flex-direction:column;
}
 display:flex;

 &>.work_vi_photo{
    flex: 0 0 50%;
      &>img{
        width:100%;
        height:100%;
      }
  }
  &>.work_vi_desc{
   flex: 0 0 50%;
   display:flex;
   align-items: center;
   justify-content: center ;
   flex-direction: column;
   text-align: justify;
   padding: 0 10px;
  }
  
  



 
`
let Work_item;
export default Work_item=({i})=>{
let {ListPhoto,name,text} = i
   let Li=ListPhoto.photo,cont = 0

    return(
        <Work_item_style>
                <div className="work_vi_photo">
                    <img src={Li[cont].img} alt="pic"
                        onClick={()=>cont===Li.length?cont=0:cont++}/>
                </div>

                <div className="work_vi_desc">
                    <div><label>{name}</label></div>
                    <div>{text}</div>
                </div>
        </Work_item_style>
    )
}
// display: grid;
// grid-template-columns: 1fr 1fr;
// &>.work_vi_item:nth-child(even){
//     grid-template-areas: " first two";
//     background: rgba(0,0,0,0.2);
// }
// &>.work_vi_item:nth-child(odd){
//     grid-template-areas: " two first";
// }
//
// &>.work_vi_photo{
//     grid-area: first;
// &>img{
//         width:50%
//     }
// }
// &>.work_vi_desc{
//     grid-area: two;
//
//     display: flex;
//     align-items: center;
//     justify-content: center ;
//     flex-direction: column;
//     text-align: justify;
//     padding: 0 10px;
// }
// }



// display: flex;
// border: 1px solid gray;
//
// .work_vi_item > .work_vi_photo {
//     flex: 1 1 50%;
//     display: flex;
//     flex-wrap: wrap;
// }
// .work_vi_item > .work_vi_photo > img {
//     width: 50px;
// }
// .work_vi_item > .work_vi_desc {
//     flex: 1 1 50%;
// }
// .work_vi_item > .work_vi_desc > div {
//     margin: 0 0 10px 0;
// }
// .work_vi_item > .work_vi_desc > div:first-child {
//     text-align: center;
// }
//
// .work_vi_desc {
//     overflow-x: auto;
// }




//style
// display: flex;
// -webkit-box-shadow: 2px 4px 10px 9px rgba(38,115,40,1);
// -moz-box-shadow: 2px 4px 10px 9px rgba(38,115,40,1);
// box-shadow: 2px 4px 10px 9px rgba(38,115,40,1);
// //border: 3px solid darkgreen;
//
//
// // background:#e6e6e6;
// background:#F9E0BE;
//
//
//
// border-radius: 10px;
// & > .work_vi_photo {
//     flex: 1 1 50%;
//     display: flex;
//     flex-wrap: wrap;
// & > img {
//         width: 45%;
//         margin: 0 2.5%;
//         overflow:hidden;
//         filter:blur(0.5px);
//
//
//         -moz-transition: all 1s ease-out;
//         -o-transition: all 1s ease-out;
//         -webkit-transition: all 1s ease-out;
//     &:hover{
//             -webkit-transform: scale(1.2);
//             -moz-transform: scale(1.2);
//             -o-transform: scale(1.2);
//             filter:blur(0px);
//
//         }
//     }
// }
// @media (max-width : 768px) {
//
// & > .work_vi_photo > img:active {
//         -webkit-transform: scale(1.2);
//         -moz-transform: scale(1.2);
//         -o-transform: scale(1.2);
//         filter: blur(0px);
//     }
// & > .work_vi_photo {
//         flex-direction: column;
//         align-items: center;
//     &>img{
//             width: 90%;
//         }
//     }
// }
//
//
// & > .work_vi_desc {
//     flex: 1 1 50%;
// & > div {
//         margin: 0 0 10px 0;
//     &:nth-child(1) {
//             text-align: center;
//         }
//     &:nth-child(2) {
//             padding: 0 20px 0 0;
//             text-align: justify;
//             line-height: 150%;
//             border-bottom: 1px solid darkgreen;
//         }
//     &:nth-child(3) {
//             text-align: left;
//             ::before{
//                 content: '-';
//                 color: red;
//                 font-size: 200%;
//                 margin: 0 4px 0 0 ;
//                 font-weight: 900;
//             }
//         }
//     &:nth-child(4) {
//             text-align: left;
//             ::before{
//                 content: '+';
//                 color:green;
//                 font-size: 150%;
//                 font-weight: 900;
//                 margin: 0 4px 0 0 ;
//             }
//         }
//     }
// }
// .work_vi_desc {
//     overflow-x: auto;
// }
