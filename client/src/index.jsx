import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import WhatIsThis from './components/div.jsx';

let fakeData = [
  {
    id: 1,
    name: 'MOURAD',
    location: 'SoMa',
    expense: 4,
    zagat: {
      info: 'FOOD',
      rating: 4.6
    },
    typeOfFood: 'Middle Eastern',
    rating: 4.6,
    description:
      'Moroccan fine dining with a California twist & extensive wine options in a swanky, modern setting.',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/mourad1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/mourad2.jpg'
    ]
  },
  {
    id: 2,
    name: "HENRY'S HUNAN",
    expense: 1,
    zagat: {
      info: 'FOOD',
      rating: 4.3
    },
    typeOfFood: 'Chinese',
    rating: 4.1,
    description:
      'Long-running local chain serving Hunan-style Chinese dishes in a relaxed setting.',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry2.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry3.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry4.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry5.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry6.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry7.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry8.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry9.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry10.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry11.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry12.jpg'
    ]
  },
  {
    id: 3,
    name: 'THE BIRD',
    location: 'SoMa',
    expense: 1,
    zagat: {
      info: 'ZAGAT RATED',
      rating: ''
    },
    typeOfFood: 'Southern American',
    rating: 4.6,
    description:
      'Buzzy counter-serve spot for chicken sandwiches, fries, wings & beer served in spare, modern digs.',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/bird1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/bird2.jpg'
    ]
  },
  {
    id: 4,
    name: 'AYOLA',
    location: 'SoMa',
    expense: 1,
    zagat: {
      info: 'ZAGAT RATED',
      rating: ''
    },
    typeOfFood: '',
    rating: 4.3,
    description: '',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/ayola1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/ayola2.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/ayola3.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/ayola4.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/ayola5.jpg'
    ]
  },
  {
    id: 5,
    name: 'RED DOOR COFFEE',
    location: 'SoMa',
    expense: 1,
    zagat: {
      info: 'ZAGAT RATED',
      rating: ''
    },
    typeOfFood: '',
    rating: 4.3,
    description:
      'Local draw for Four Barrel Coffee, Dynamo Donuts & other cafe fare in a bright, wood-decked space.',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-2.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-3.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-4.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-5.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-6.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-7.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-8.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-9.amazonaws.com/nearbyyontek/coffee1.jpg',
      'https://s3-us-west-10.amazonaws.com/nearbyyontek/coffee1.jpg'
    ]
  },
  {
    id: 6,
    name: 'SOMA EATS',
    location: 'SoMa',
    expense: 2,
    zagat: {
      info: 'ZAGAT RATED',
      rating: ''
    },
    typeOfFood: '',
    rating: 4.3,
    description: '',
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma2.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma3.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma4.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma5.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma6.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma7.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma8.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma9.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/soma10.jpg'
    ]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: fakeData
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
  render() {
    return (
      <div>
        {this.state.restaurants.map((restaurant, index) => {
          return <WhatIsThis key={index} restaurant={restaurant} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
