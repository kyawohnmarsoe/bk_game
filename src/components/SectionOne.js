import React, { Component } from 'react'
import SectionTwo from './SectionTwo'

export class SectionOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customer1: true,
             customer2: false,
             customer3: false,
             customer4: false,
             customer5: false,
             drink1:false,
             drink2:false,
             drink3:false,
             drink4:false,
             pizza1:false,
             pizza2:false,
             pizza3:false,
             pizza4:false,
             chips1:false,
             chips2:false,
             chips3:false,
             chips4:false,
        }
    }

    drinkChoose = (drink) => {
        if (drink === "1"){
           this.setState({
            drink1:true,
            drink2:false,
            drink3:false,
            drink4:false,
           })
        }else if (drink === "2"){
            this.setState({
             drink1:false,
             drink2:true,
             drink3:false,
             drink4:false,
            })
         }else if (drink === "3"){
            this.setState({
             drink1:false,
             drink2:false,
             drink3:true,
             drink4:false,
            })
         }else if (drink === "4"){
            this.setState({
             drink1:false,
             drink2:false,
             drink3:false,
             drink4:true,
            })
         }
    }

    pizzaChoose = (pizza) => {
        if (pizza === "1"){
           this.setState({
            pizza1:true,
            pizza2:false,
            pizza3:false,
            pizza4:false,
           })
        }else if (pizza === "2"){
            this.setState({
             pizza1:false,
             pizza2:true,
             pizza3:false,
             pizza4:false,
            })
         }else if (pizza === "3"){
            this.setState({
             pizza1:false,
             pizza2:false,
             pizza3:true,
             pizza4:false,
            })
         }else if (pizza === "4"){
            this.setState({
             pizza1:false,
             pizza2:false,
             pizza3:false,
             pizza4:true,
            })
         }
    }

    chipsChoose = (chips) => {
        if (chips === "1"){
           this.setState({
            chips1:true,
            chips2:false,
            chips3:false,
            chips4:false,
           })
        }else if (chips === "2"){
            this.setState({
             chips1:false,
             chips2:true,
             chips3:false,
             chips4:false,
            })
         }else if (chips === "3"){
            this.setState({
             chips1:false,
             chips2:false,
             chips3:true,
             chips4:false,
            })
         }else if (chips === "4"){
            this.setState({
             chips1:false,
             chips2:false,
             chips3:false,
             chips4:true,
            })
         }
    }
    
    render() {
        return (
            <div>
                <div className="section-one-wapper">
                    {/* <div className="timer-wapper" >00:00</div> */}
                    <img src="../img/Timer.png" alt="" className="timer" />
                    <div className="timer-text" >00:00</div>
                    { this.state.customer1 && <img src="../img/Customer_01.png" alt="" className="customer" /> }
                    { this.state.customer2 && <img src="../img/Customer_02.png" alt="" className="customer" /> }
                    { this.state.customer3 && <img src="../img/Customer_03.png" alt="" className="customer" /> }
                    { this.state.customer4 && <img src="../img/Customer_04.png" alt="" className="customer" /> }
                    { this.state.customer5 && <img src="../img/Customer_05.png" alt="" className="customer" /> }

                    <img src="../img/ready.png" alt="" className="game-text d-none" />
                    <img src="../img/1.png" alt="" className="game-text d-none" />
                    <img src="../img/2.png" alt="" className="game-text d-none" />
                    <img src="../img/3.png" alt="" className="game-text d-none" />
                    <img src="../img/start.png" alt="" className="game-text d-none" />
                    <img src="../img/times_up.png" alt="" className="game-text d-none" />
                    <img src="../img/good_job.png" alt="" className="game-text d-none" />

                </div>
                <SectionTwo 
                    data={this.state} 
                    drinkChoose={this.drinkChoose} 
                    pizzaChoose={this.pizzaChoose} 
                    chipsChoose={this.chipsChoose} 
                />
            </div>
        )
    }
}

export default SectionOne
