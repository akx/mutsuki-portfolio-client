import React, { Component } from 'react';
import {Link} from "react-router-dom";
import EnglishNavbar from "./EnglishNavbar";
import BeautyEffectHomeImage from '../BeautyEffectHomeImage';
import SpecialEffectHomeImage from '../SpecialEffectHomeImage';

class Home extends Component {
  constructor(props){
    super();
    // const currentURL = localStorage.clientUrl;
    this.state = {
      rangeValue: 0,
      specialImageSource: '["/images/special_effect/tribe1.png", "/images/special_effect/it1.png"]',
      beautyImageSource: '["/images/beauty/beauty1.png", "/images/beauty/marylyn.png"]',
    }
    // this.canvas = document.getElementById("special-effect-image");
  }

  componentDidMount(){

    let triggerButton = document.getElementById("button-trigger");
    setInterval(()=> {
      triggerButton.click()
    }, 5000)

    this.specialCanvas = document.getElementById("special-effect-slider");
    this.beautyCanvas = document.getElementById("beauty-slider");
  }
  
  changeValue = (event) => {
      this.setState({
        rangeValue: event.target.value
      })
      console.log(this.state.rangeValue);
  }

  render() {
    const {rangeValue, specialImageSource, beautyImageSource} = this.state;

    return (
      <div className="container">
        <p className = "upper-left-bracket">「</p>
        <p className = "lower-left-bracket">「</p>
        <p className = "upper-right-bracket">「</p>
        <p className = "lower-right-bracket">「</p>
        <div className="d-flex justify-content-center">
          <div id="left-side">
            <div className = {rangeValue <= 50 ? "special-effect-name" : "beauty-name" } id="name">
              <h1>MUTSUKI</h1>
              <h1>UCHIYAMA</h1>
            </div>
            <div className = {rangeValue <= 50 ? "special-effect-arrow" : "beauty-arrow" } id="arrow-down">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-down"></i>
            </div>
            <input type="range" className="custom-range" id="range-slider" step = "0.1" min="0" max="100" onChange={this.changeValue} value={rangeValue}></input>
            <div className="row">
            <Link to="/en"><h2 className="active-language">EN</h2></Link>
            <h2> | </h2>
            <Link to="/jp"><h2>JP</h2></Link>
            </div>
          </div>

          <div className="right-side">
          <button className="d-none" id="button-trigger"></button>
          <Link to="/projects">
            <div id="content" className="content">
              <SpecialEffectHomeImage images={specialImageSource} range={rangeValue}/> 
              <BeautyEffectHomeImage images={beautyImageSource} range={rangeValue}/>
            </div>
          </Link>

            <EnglishNavbar />
          </div>
        </div>        
      </div>
    );
  }
}

export default Home;
