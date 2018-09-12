import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Info from '../client/src/components/info.jsx';
import ReactDOM from 'react-dom';
import App from '../client/src/App.jsx';
import data from '../db/fakeData.js';
import Container from '../client/src/components/container.jsx';
import Image from '../client/src/components/image.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should be selectable by class "start"', function() {
    expect(shallow(<App />).is('.start')).toBe(true);
  });
});

describe('<Container />', function() {
  it('should be selectable by class "container"', function() {
    expect(shallow(<Container restaurant={data[0]} />).is('.container')).toBe(true);
  });
});

describe('<Info />', function() {
  it('should be selectable by class "infoDiv"', function() {
    expect(shallow(<Info restaurant={data[0]} />).is('.infoDiv')).toBe(true);
  });
});

describe('<Image />', function() {
  it('should be selectable by class "imgDiv"', function() {
    expect(shallow(<Image restaurant={data[0]} />).is('.imgDiv')).toBe(true);
  });
});
