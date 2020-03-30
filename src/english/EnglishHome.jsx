import React, { Component } from 'react';
import {Link} from "react-router-dom";
import EnglishNavbar from "./EnglishNavbar";
import Sketch from "../sketch";

class Home extends Component {
  constructor(props){
    super();
    const currentURL = localStorage.clientUrl;

    this.state = {
      rangeValue: 0,
      specialImageSource: '["/images/special_effect/tribe1.png", "/images/special_effect/it1.png"]',
      beautyImageSource: '["/images/beauty/beauty1.png", "/images/beauty/marylyn.png"]',
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

    let sketch = new Sketch({
      debug: true,
      uniforms: {
        intensity: {value: 0.3, type:'f', min:0., max:2},
      },
      fragment: `
        uniform float time;
        uniform float progress;
        uniform float width;
        uniform float scaleX;
        uniform float scaleY;
        uniform float transition;
        uniform float radius;
        uniform float intensity;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D displacement;
        uniform vec4 resolution;
        varying vec2 vUv;
    
        void main()	{
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    
             vec4 d1 = texture2D(texture1, newUV);
             vec4 d2 = texture2D(texture2, newUV);
    
             float displace1 = (d1.r + d1.g + d1.b)*0.33;
             float displace2 = (d2.r + d2.g + d2.b)*0.33;
             
             vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
             vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));
    
             gl_FragColor = mix(t1, t2, progress);
        }
      `
    });

    let canvas = document.getElementsByTagName("canvas");
    console.log(canvas[0]);
    setInterval(()=> {
      canvas[0].click()
    }, 3000)
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
            <div id="content" className="content">
              <div id="slider" data-images={specialImageSource}>
              <input type="range" className="custom-range" id="customRange1" onChange={this.changeValue} value={rangeValue}></input>
              </div>
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
          <EnglishNavbar />
        </div>        
      </div>
    );
  }
}

export default Home;
