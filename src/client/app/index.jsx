// Lasp.

import {Map, List} from 'immutable';

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

class ORSet {
  constructor() {
    this.payload = Map();
  }

  add(element) {
    var elementPayload = this.payload.get(element, List());
    var modifiedElementPayload = elementPayload.push({id: guid(), deleted: false});
    this.payload = this.payload.set(element, modifiedElementPayload);
    return this;
  }
}

const set = new ORSet();
console.log(set);
console.log(set.add("a"));

// React.

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
