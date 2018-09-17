import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from './components/container.jsx';
import data from '../../db/fakeData.js';

let fakeData = data.slice(0, 6);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: fakeData,
      index: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      }
    };
  }
  componentDidMount() {
    var restaurant;
    axios
      .get('/nearby')
      .then(response => {
        restaurant = response.data;
        this.setState({
          restaurants: restaurant
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  leftClickHandler(restaurant) {
    let length = restaurant.picture.length - 1;
    let id = restaurant.id;
    let currentImg = this.state.index;

    if (this.state.index[id] === 0) {
      currentImg[id] = length;
    } else {
      currentImg[id]--;
    }
    this.setState({
      index: currentImg
    });
  }

  rightClickHandler(restaurant) {
    let length = restaurant.picture.length - 1;
    let id = restaurant.id;
    let currentImg = this.state.index;

    if (this.state.index[id] === length) {
      currentImg[id] = 0;
    } else {
      currentImg[id]++;
    }
    this.setState({
      index: currentImg
    });
  }

  render() {
    return (
      <div className="start">
        <div id="related-start">
          <span id="original-restaurant">More Places Near Trou Normand</span>
        </div>
        {this.state.restaurants.map((restaurant, index) => {
          return (
            <Container
              key={index}
              restaurant={restaurant}
              onLeftClick={this.leftClickHandler.bind(this)}
              onRightClick={this.rightClickHandler.bind(this)}
              index={this.state.index[index + 1]}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
