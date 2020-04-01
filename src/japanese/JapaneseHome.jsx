import React, { Component } from 'react';
class Home extends Component {
  constructor(props){
    super();
    const currentURL = localStorage.clientUrl;

    this.state = {
      rangeValue: 0,
      specialImageSource: [`${currentURL}/images/special_effect/afrika.jpg`, `${currentURL}/images/special_effect/IT.jpg`],
      beautyImageSource: [`${currentURL}/images/beauty/beauty1.jpg`, `${currentURL}/images/beauty/marylyn.jpg`],
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
    return (
      <div className="container">
      <p className = "upper-left-bracket">「</p>
      <p className = "lower-left-bracket">「</p>
      <p className = "upper-right-bracket">「</p>
      <p className = "lower-right-bracket">「</p>
<div className="row">
        <div id="left-side">
          <div className = {this.state.rangeValue <= 50 ? "special-effect-name" : "beauty-name" } id="name">
            <h1>MUTSUKI</h1>
            <h1>UCHIYAMA</h1>
          </div>
          <div id="slider">
            <input type="range" className="custom-range" id="customRange1" onChange={this.changeValue} value={this.state.rangeValue}></input>
          </div>
          <div className = {this.state.rangeValue <= 50 ? "special-effect-arrow" : "beauty-arrow" } id="arrow-down">
          <i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-down"></i>
          </div>
          <div className="row">
          <h2 className="active-language">EN</h2>
          <h2>JP</h2>
          </div>
        </div>
        <div id="right-side">
        <button className = "btn btn-primary">hello world</button>
          <img className="image" src={this.state.rangeValue <= 50 ? this.state.specialImageSource[this.state.currentImage] : this.state.beautyImageSource[this.state.currentImage] } alt="image" id="special-effect-image"/>
          {/* navbar */}
        </div>
      </div>        
      </div>
    );
  }
}

export default Home;
