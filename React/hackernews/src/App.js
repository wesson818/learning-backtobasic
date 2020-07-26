import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
// ES6
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
// ES5
// var url = PATH_BASE + PATH_SEARCH + '?' + PARAM_SEARCH + DEFAULT_QUERY;
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
      result: null,
      searchTerm: DEFAULT_QUERY
    };
    // bind function
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  setSearchTopStories(result) {
    this.setState({ result });
  }

  fetchSearchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(e => e);
  }

  onSearchSubmit(){
    const {searchTerm} = this.state
    this.fetchSearchTopStories(searchTerm)
  }
  
  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }
  
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);
    // set state
    const updatedHits = this.state.result.hits.filter(isNotId);
    // this.setState({ 
    //   list: updatedList 
    // });
    this.setState({ 
      result: Object.assign({}, this.state.result, { hits: updatedHits })
    });
  }
  onSearchChange(event){
    this.setState({searchTerm: event.target.value})
  }
  render(){
    const helloWorld = 'Welcome to the Road to learn React!';
    
    const robin = new Developer('Robin', 'Wieruch');
    robin.setName("WenJing","Zhang")
    
    // ES6
    const {list, searchTerm, result} = this.state;
    if (!result)  return null; 

    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi {robin.getName()}, {helloWorld}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="interactions">
            <Search 
              value={searchTerm} 
              onChange={this.onSearchChange} 
            >
              Search:
            </Search>
            <p>{searchTerm}</p>
          </div>
          {result &&
          <Table 
            list={result.hits} 
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />}
        </header>
      </div>
    );
  }
}

// ES6 class components
// class Search extends Component {
//   render() {
//     const { value, onChange, children } = this.props;
//     return (
//       <form>
//         {children} <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         />
//       </form>
//     );
//   }
// }

// functional stateless components
const Search = ({ value, onChange, children }) =>
<form>
  {children} <input
    type="text"
    value={value}
    onChange={onChange}
  />
</form>

// ES6 class components
// class Table extends Component {
//   render(){
//     const {list, pattern, onDismiss} = this.props;
//     const isSearched = pattern => item =>
//       item.title.toLowerCase().includes(pattern.toLowerCase());
//     return(
//       <div>
//         {
//           list.filter(isSearched(pattern)).map((item) => 
//               <div key={item.objectID}>
//                 <span><a href="{item.url}">{item.title}</a></span><br />
//                 <span>creat by {item.author}</span><br />
//                 <span>{item.num_comments}</span><br />
//                 <span>{item.points}</span><br />
//                 <span>
//                   {/* <button onClick={() => onDismiss(item.objectID)} type="button">
//                     Dismiss
//                   </button> */}
//                   <Button onClick={() => onDismiss(item.objectID)}>
//                     Dismiss
//                   </Button>
//                 </span><br /><br />
//               </div>
//             )
//           }
//       </div>
//     )
//   }
// }

// functional stateless components
const Table = ({list, pattern, onDismiss, isSearched = pattern => item => item.title.toLowerCase().includes(pattern.toLowerCase())}) => 
  <div className="table">
    {
      list.filter(isSearched(pattern)).map((item) => 
        <div className="table-row" key={item.objectID}>
          <span style={{width:'15%'}}>
            <Button onClick={() => onDismiss(item.objectID)}>
              Dismiss
            </Button>
          </span>
          <span style={{width:'40%'}}><a href="{item.url}">{item.title}</a></span><br />
          <span style={{width:'25%'}}>creat by {item.author}</span><br />
          <span style={{width:'10%'}}>{item.num_comments}</span><br />
          <span style={{width:'10%'}}>{item.points}</span><br />
        </div>
      )
    }
  </div>

// ES6 class components
// class Button extends Component {
//   render(){
//     const {onClick, className='', children} = this.props;
//     return(
//       <button 
//         type="button"
//         onClick={onClick}
//         className={className}
//       >{children}</button>
//     )
//   }
// }

// functional stateless components
const Button = ({onClick, className='', children}) =>
  <button 
    type="button"
    onClick={onClick}
    className={className}
  >{children}</button>

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

// Functional Stateless Components:
// are functions that take input and return an output. The inputs are the props, 
// and the output is a component instance in plain JSX. So far, it is quite similar to an ES6 class component. 
// However, functional stateless components are functions (functional) and they have no local state (stateless). 
// You cannot access or update the state with this.state or this.setState() because there is no this object. 
// Additionally, they have no lifecycle methods except for the render() method which will be applied implicitly in functional stateless components. 
// You didn't learn about lifecycle methods yet, but you already used two: constructor() and render(). 
// The constructor runs only once in the lifetime of a component, whereas the render() class method runs once in the beginning and every time the component updates. 
// Keep in mind that functional stateless components have no lifecycle methods, when we arrive at lifecycle methods chapter later.

// ES6 Class Components:
// extend from the React component. The extend hooks all the lifecycle methods, available in the React component API, to the component. 
// This is how we were able to use the render() class method. You can also store and manipulate state in ES6 class components using this.state and this.setState().