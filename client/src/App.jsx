import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from './components/container.jsx';
import data from '../../db/fakeData.js';
import styles from './nearby.css';

let fakeData = data.slice(0, 6);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
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
    this.getData();
  }

  getData() {
    var restaurant;
    let restArr = [];
    let i = 1;
    for (let i = 1; i < 7; i++) {
      axios
        .get(`/nearby/${i}`)
        .then(response => {
          restaurant = response.data;
          restArr.push(restaurant);
          this.setState({
            restaurants: restArr
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  leftClickHandler(restaurant) {
    let length = restaurant.picture.length - 1;
    let id = this.state.restaurants.indexOf(restaurant) + 1;
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
    let id = this.state.restaurants.indexOf(restaurant) + 1;
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
      <div className={styles.wholeApp}>
        <div className={styles.start}>
          <div className={styles.relatedStart}>
            {console.log(this.state.restaurants[0])}
            <span className={styles.originalRestaurant}>More Places Near Trou Normand</span>
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
      </div>
    );
  }
}
export default App;
