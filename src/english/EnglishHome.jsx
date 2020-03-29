import React, { Component } from 'react';
import {Link} from "react-router-dom";
import EnglishNavbar from "./EnglishNavbar"

class Home extends Component {
  constructor(props){
    super();
    const currentURL = localStorage.clientUrl;

    this.state = {
      rangeValue: 0,
      specialImageSource: [`${currentURL}/images/special_effect/tribe1.png`, `${currentURL}/images/special_effect/it1.png`],
      beautyImageSource: [`${currentURL}/images/beauty/beauty1.png`, `${currentURL}/images/beauty/marylyn.png`],
      currentImage: 0
    }
  }

  switchImage = () => {
    if (this.state.currentImage < this.state.beautyImageSource.length -1 ){
      this.setState({
        currentImage: this.state.currentImage + 1
      })
    } else {
        this.setState({
          currentImage: 0
        });
      }
      return this.currentImage;
    }

  componentDidMount(){
    setInterval(this.switchImage, 5000);

  }

  changeValue = (event) => {
      this.setState({
        rangeValue: event.target.value
      })
      console.log(event.target.value);
  }

  render() {
    const {rangeValue, specialImageSource, beautyImageSource, currentImage} = this.state;
    const currentURL = localStorage.clientUrl;

    return (
      <div className="container">
        <p className = "upper-left-bracket">「</p>
        <p className = "lower-left-bracket">「</p>
        <p className = "upper-right-bracket">「</p>
        <p className = "lower-right-bracket">「</p>
        <div className="row">
          <div id="left-side">
            <div className = {rangeValue <= 50 ? "special-effect-name" : "beauty-name" } id="name">
              <h1>MUTSUKI</h1>
              <h1>UCHIYAMA</h1>
            </div>
            <div id="slider">
              <input type="range" className="custom-range" id="customRange1" onChange={this.changeValue} value={rangeValue}></input>
            </div>
            <div className = {rangeValue <= 50 ? "special-effect-arrow" : "beauty-arrow" } id="arrow-down">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-down"></i>
            </div>
            <div className="row">
            <Link to="/en"><h2 className="active-language">EN</h2></Link>
            <h2> | </h2>
            <Link to="/jp"><h2>JP</h2></Link>
            </div>
          </div>
          <div id="right-side">
          <Link to="/en/projects">
          <img src={`${localStorage.clientUrl}/images/special_effect/test2.JPG`} alt=""/>
            <img className="img-fluid" src={rangeValue <= 50 ? specialImageSource[currentImage] : beautyImageSource[currentImage] } alt="image" id="special-effect-image"/>
          </Link>
          <EnglishNavbar />
          <div id="content" class="content">
            <div id="slider" data-images={`[${currentURL}/images/special_effect/tribe1.png`, `${currentURL}/images/special_effect/it1.png]`}></div>
          </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Home;
