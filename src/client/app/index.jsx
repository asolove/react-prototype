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

// Traditional add-wins observed-remove set.
class ORSet {
  constructor() {
    this.payload = Map();
  }

  add(element) {
    var elementPayload = this.payload.get(element, List());
    var modifiedElementPayload = elementPayload.push({id: guid(), value: element, deleted: false});
    this.payload = this.payload.set(element, modifiedElementPayload);
    return this;
  }

  remove(element) {
    var elementPayload = this.payload.get(element, List());
    var modifiedElementPayload = elementPayload.reduce(
        function(payload, item) {
          item["deleted"] = true;
          return payload.push(item);
        },
        List());
    this.payload = this.payload.set(element, modifiedElementPayload);
    return this;
  }

  merge(orset) {
  }

  query() {
    return this.payload.reduce(
        function(elements, element, key) {
          var present = element.some(function(value) {
            if(value.deleted === false) {
              return true;
            } else {
              return false;
            }
          })

          if(present === true) {
            return elements.push(key);
          } else {
            return elements;
          }
        },
        List())
  }
}

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
