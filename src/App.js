import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'Group 1 ',
    url: 'https://reactjs.org/',
    author: 'Test 1',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Group 2 ',
    url: 'https://google.com',
    author: 'Test 2',
    num_comments: 4,
    points: 6,
    objectID: 1,
  },
  {
    title: 'React',
    url: 'https://facebook.com',
    author: 'Test 3',
    num_comments: 5,
    points: 7,
    objectID: 2,
  },
];

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      list,
    };

    this.onDismiss = this.OnDismiss.bind(this)
  }

  onDismiss(id){

    const updatedList = this.state.list.filter( function isNotid(item){
      return item.objectID !== id;
        }
    );
  }

  render() {
    return (
        <div className="App">
          {this.state.list.map(item =>
              <div key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
                <span>
                  <button
                    onClick={()=> this.onDismiss(item.objectID)}
                    >
                      Dismiss
                  </button>
                </span>
            </div>
            )}
        </div>
    );
  }
}
export default App;
