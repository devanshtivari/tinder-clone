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
    let people = [
      {
        name: "Daniel Travard",
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        info: "Sales Chairman at Linkedin",
      },
      {
        name: "Scott Wilson",
        url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        info: "CEO at Redbus",
      },
      {
        name: "Elisa Marc",
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        info: "President at Airtel ",
      },
      {
        name: "Nicholas",
        url: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        info: "Senior Software Engineer at Google",
      },
      {
        name: "Elison White",
        url: "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        info: "Engineer at Microsoft",
      },
    ];

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
