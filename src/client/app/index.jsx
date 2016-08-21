import {ORSet} from 'lasp';

const set = new ORSet();
console.log(set.add("a"));
console.log(set.add("b"));
console.log(set.remove("a"));
console.log(set.query());

// React.

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
