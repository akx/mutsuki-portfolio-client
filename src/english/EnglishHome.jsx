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
      if (this.state.rangeValue >= 50){
        document.body.style.backgroundColor="#FFFDF7"
      } else {
        document.body.style.backgroundColor = "#000"
        
      }
  }

  render() {
    const {rangeValue, specialImageSource, beautyImageSource} = this.state;

    return (
      <div className="container">
        <p className = { rangeValue >= 50 ? "black-bracket" : "white-bracket"} id= "upper-left-bracket">「</p>
        <p className = { rangeValue >= 50 ? "black-bracket" : "white-bracket"} id= "lower-left-bracket">「</p>
        <p className = { rangeValue >= 50 ? "black-bracket" : "white-bracket"} id= "upper-right-bracket">「</p>
        <p className = { rangeValue >= 50 ? "black-bracket" : "white-bracket"} id= "lower-right-bracket">「</p>
        <div className="d-flex justify-content-between">
          <div id="left-side">
            <div className = "mutsuki-uchiyama" id={rangeValue <= 50 ? "white-mutsuki" : "black-mutsuki" }>
              <h1>MUTSUKI</h1>
              <h1>UCHIYAMA</h1>
            </div>
            <div className = {rangeValue <= 50 ? "special-effect-arrow" : "beauty-arrow" } id="arrow-down">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="34" viewBox="0 0 59.084 37.566">
                <path id="ic_expand_more_24px" d="M55.646,8.59,34.128,30.061,12.61,8.59,6,15.2,34.128,43.328,62.256,15.2Z" transform="translate(-4.586 -7.177)" fill="rgba(0,0,0,0)" stroke={rangeValue >= 50? "#ffb762" : "#ff4646"} strokeWidth="2"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="34" viewBox="0 0 59.084 37.566">
                <path id="ic_expand_more_24px" d="M55.646,8.59,34.128,30.061,12.61,8.59,6,15.2,34.128,43.328,62.256,15.2Z" transform="translate(-4.586 -7.177)" fill="rgba(0,0,0,0)" fill={rangeValue >= 50? "#ffb762" : "#ff4646"} strokeWidth="2"/>
              </svg>
            </div>
            <input type="range" className={`custom-range ${rangeValue >= 50? "orange-slider" : "red-slider"}`} id="range-slider" step = "0.1" min="0" max="100" onChange={this.changeValue} value={rangeValue}></input>
            <p className = "range-direction" id={rangeValue >= 50? "black-range-direction" : "white-range-direction"}>{rangeValue >= 50? "slide to the left" : "slide to the right"}</p>
            <div className="row">
              <Link to="/en"><h2 className={rangeValue <= 50 ? "white-language-text" : "black-language-text"} id="active-language">EN</h2></Link>
              <h2 className={rangeValue <= 50 ?"white-language-text" : "black-language-text"}> | </h2>
              <Link to="/jp"><h2 className={rangeValue <= 50 ? "white-language-text" : "black-language-text"} id="non-active-language">JP</h2></Link>
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

            <EnglishNavbar range={rangeValue}/>
          </div>
        </div>        
      </div>
    );
  }
}

export default Home;
