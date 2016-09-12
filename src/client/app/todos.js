import {OrderedSet, fromJS, toJS} from 'immutable'

/* The todos store interface is simple.
 * A todo is of type: { id: guid, name: String, complete: Boolean }
 *
 * - The store can add a todo to its list
 * - It can change the name of a todo with a given id
 * - It can change the complete flag of a todo with a given id
 * - It emits events with a list of todos when its internal state changes
 */

export default class TodoStore {
  constructor() {
    this.todos = OrderedSet()
  }

  notify() {
    const todos = this.todos.toJS()
    // Event emitter, stream, ...?
  }

  addTodo(todo) {
    this.todos = this.todos.add(fromJs(todo))
    this.notify()
  }

  updateTodoName(id, name) {
    this.todos = this.todos.map(t => t.id === id ? t.set('name', name) : t)
    this.notify()
  }

  updateTodoComplete(id, complete) {
    this.todos = this.todos.map(t => t.id === id ? t.set('complete', complete) : t)
    this.notify()
  }
}
