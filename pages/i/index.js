import React from "react";
import {inject, observer} from "mobx-react";
import Layout from "../../components/Layout";
import styled from 'styled-components'
import I_back from "../../components/I_back";


let I_style = styled.div`
  height:100%;
  font-size:2em;
  display: grid;
  background:rgba(0,0,0,0);

  grid-template-columns: 1em auto 1em;
  grid-template-rows: 1em auto 1em;
  grid-template-areas:
      'a   d  b'
      'a cent b'
      'a   c  b';

  & > div {
    overflow: hidden;
  }

  & > .content {
    grid-area: cent;
    display: flex;
    align-items: center;
    justify-content: center;
    &>.I_text{
        font-size:3em;
        color:white;
    &:hover{
        color:#ffa500;
    }
  }
 
  }

  & > div:nth-child(1) {
    grid-area: a;
  }

  & > div:nth-child(2) {
    grid-area: b;
  }

  & > div:nth-child(3) {
    grid-area: c;
  }

  & > div:nth-child(4) {
    grid-area: d;
  }

.lineString{
  display: flex;
  position: relative;
  background: black;
  color: #f2f2f2;
  &>div{
    position: absolute;
    text-align: center;
    letter-spacing: 5px;
  }
}

.lineString_ver{
  color: #ffff;
  width: 100%;
  transform:  rotate(90deg);
  &:nth-child(2){
    animation-delay: 10s;
    opacity: 0;
  }
}

.lineString_gor{
  width: fit-content;
  &:nth-child(2){
    animation-delay: 10s;
    opacity: 0;
  }
}

.lineString_1{
  animation: chet linear 20s infinite;
}
.lineString_2{
  animation: tree linear 20s infinite;
}
.lineString_3{
  animation: odi linear 20s infinite;
}
.lineString_4{
  animation: dva linear 20s infinite;
}

//========================================>

@keyframes odi {
  0% {
    opacity: 1;
    left: 0;
    transform: translate(100%, 0);
  }
  50% {
    opacity: 1;
    left:0;
  }
  100% {
    opacity: 1;
    transform: translate(-100%, 0);
  }
}
@keyframes dva {
  0% {
    opacity: 1;
    transform: translate(-100%, 0);
  }
  50% {
    opacity: 1;
    left:0;
  }
  100% {
    opacity: 1;
    transform: translate(100%, 0);
  }
}
@keyframes tree {
  0% {
    opacity: 1;
    transform: translate(0, -4500%)  rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translate(0, 4500%)  rotate(90deg);
  }
}
@keyframes chet {
  0% {
    opacity: 1;
    transform: translate(0, 4500%) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translate(0, -4500%) rotate(90deg);
  }
}
video{
    width:100%;
    height:100%;
   object-fit:cover;
    
}
`

@inject('store') @observer
class I extends React.Component{
    inte;
    constructor(props) {
        super(props);
        this.state={
            listWord:['Hi', 'welcome','to Me']
            ,list:'Hi'
            ,count:0
        }
        this.edit = this.edit.bind(this)
    }

    componentDidMount() {
       this.inte=setInterval(()=>this.edit(),2000)
    }

    componentWillUnmount() {
        clearInterval(this.inte)
    }
    edit(){
        this.setState((state,props)=>{
            let r;
            state.count === state.listWord.length-1 ?r=0 :r=state.count+1;
            return{list: state.listWord[r], count: r,}
        })
    }


render() {

    return (
        <I_back>
            <Layout>
                <I_style>
                    <div className="lineString">
                        <div
                            className="lineString_ver lineString_1 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                        <div
                            className="lineString_ver lineString_1 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                    </div>
                    <div className="lineString">
                        <div
                            className="lineString_ver lineString_2 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                        <div
                            className="lineString_ver lineString_2 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                    </div>
                    <div className="lineString">
                        <div
                            className="lineString_gor lineString_3 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                        <div
                            className="lineString_gor lineString_3 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                    </div>
                    <div className="lineString">
                        <div
                            className="lineString_gor lineString_4 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                        <div
                            className="lineString_gor lineString_4 ">LoremipsumdolorsitametconsecteturadipisicLoremipsumdolorsitametconsecteturadipisic
                        </div>
                    </div>
                    <section className="content">
                        <div className="I_text" id={'stepSlide'}>{this.state.list}</div>
                    </section>
                </I_style>
            </Layout>
        </I_back>


        )

}
}
export default I

