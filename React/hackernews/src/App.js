import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
const list = [{
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ""
    };
    // bind function
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    // set state
    this.setState({ list: updatedList });
  }
  onSearchChange(event){
    this.setState({searchTerm: event.target.value})
  }
  render(){
    const helloWorld = 'Welcome to the Road to learn React!';
    
    const robin = new Developer('Robin', 'Wieruch');
    robin.setName("WenJing","Zhang")
    
    // ES6
    const {list, searchTerm} = this.state;

    const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi {robin.getName()}, {helloWorld}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <input type="text" value={searchTerm} onChange={this.onSearchChange} />
          </form>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{searchTerm}</p>
          {
            list.filter(isSearched(searchTerm)).map((item) => 
              <div key={item.objectID}>
                <span><a href="{item.url}">{item.title}</a></span><br />
                <span>creat by {item.author}</span><br />
                <span>{item.num_comments}</span><br />
                <span>{item.points}</span><br />
                <span>
                  {/* <button onClick={this.onDismiss(item.objectID)} type="button"> */}
                  <button onClick={() => this.onDismiss(item.objectID)} type="button">
                  {/* <button onClick={function(){console.log(item.objectID)}} type="button"> */}
                    Dismiss
                  </button>
                </span><br /><br />
              </div>
            )
          }
        </header>
      </div>
    );
  }
}

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
  setName(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

export default App;
