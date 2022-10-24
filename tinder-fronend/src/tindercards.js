import React, { Component } from 'react'
import { render } from "react-dom";
import { Card, CardWrapper } from "react-swipeable-cards";
import "./tindercards.css"

export default class Tindercards extends Component {
  handleLeftSwipe(data){
    console.log(data.name+" was left swiped")
  }

  handleRightSwipe(data){
    console.log(data.name+" was right swiped")
  }

  renderCards() {
    const [people,setpeople] = React.useState([]);

    

    return people.map((p) => {
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
