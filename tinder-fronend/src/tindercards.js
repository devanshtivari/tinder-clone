import React, { Component } from 'react'
import { render } from "react-dom";
import { Card, CardWrapper } from "react-swipeable-cards";
import "./tindercards.css";
import axios from "./axios";

export default class Tindercards extends Component {

  constructor(){
    super();
    this.state={
      people : []
    };
  }

  async componentDidMount(){
    let req = await axios.get("/tinder/card");
    console.log(req.data)
    this.setState({people : req.data})
  }

  handleLeftSwipe(data){
    console.log(data.name+" was left swiped")
  }

  handleRightSwipe(data){
    console.log(data.name+" was right swiped")
  }
  

  renderCards() {
    return this.state.people.map((p) => {
      return (
        <Card
          className="card"
          key={p.name}
          onSwipeLeft={this.handleLeftSwipe.bind(this)}
          onSwipeRight={this.handleRightSwipe.bind(this)}
          data={p}
          style={{
            backgroundImage: `url(${p.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="details">
            <h3>{p.name}</h3>
            <p>{p.info}</p>
          </div>
        </Card>
      );
    });
  }

  render() {
    return(
      <CardWrapper classname="classWrapper">
        {this.renderCards()}
      </CardWrapper>
    );
  }
}
