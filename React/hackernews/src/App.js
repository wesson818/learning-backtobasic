import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sortBy } from 'lodash';
import classNames from 'classnames'

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '5';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';
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

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      result: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
      // sortKey: 'NONE',
      // isSortReverse: false,
    };
    // bind function
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    // this.onSort = this.onSort.bind(this)
  }

  // onSort(sortKey) {
  //   const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
  //   this.setState({ sortKey, isSortReverse });
  // }

  fetchSearchTopStories(searchTerm, page=0) {
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(e => this.setState({error:e}));
  }

  setSearchTopStories(result) {
    console.log("result:",result)
    // this.setState({ result });
    const {hits, page} = result

    // const {searchKey, results} = this.state
    // const oldHits = results && results[searchKey] ? results[searchKey].hits:[]
    // const updatedHits = [
    //   ...oldHits,
    //   ...hits
    // ]
    // this.setState({
    //   results: {
    //     ...results,
    //     [searchKey]: { hits: updatedHits, page: page }
    //   },
    //   isLoading: false
    // });
    this.setState(updateSearchTopStoriesState(hits, page));
    
  }

  onSearchSubmit(event){
    const {searchTerm} = this.state
    this.setState({ searchKey: searchTerm });
    // this.fetchSearchTopStories(searchTerm)

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault()
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }
  
  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);
    // set state
    const updatedHits = hits.filter(isNotId);
    // this.setState({ 
    //   list: updatedList 
    // });
    this.setState({ 
      // result: Object.assign({}, this.state.result, { hits: updatedHits })
      results: {
        ...results,
        [searchKey]: {hits:updatedHits, page:page}
      }
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
    // const {searchTerm, results, searchKey, error, isLoading, sortKey, isSortReverse} = this.state;
    const {searchTerm, results, searchKey, error, isLoading} = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];
    // if (error) return <p>Something went wrong.</p>;
    // if (!results) return null; 
    
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi {robin.getName()}, {helloWorld}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="interactions">
            <Search 
              value={searchTerm} 
              onChange={this.onSearchChange} 
              onSubmit={this.onSearchSubmit}
            >
              Search
            </Search>
            <p>{searchTerm}</p>
          </div>
          {error ?
          <div className="interactions">
            <p>Something went wrong.</p>
        </div>
          :<Table 
            list={list} 
            // sortKey={sortKey}
            // isSortReverse={isSortReverse}
            // onSort={this.onSort}
            // pattern={searchTerm}
            onDismiss={this.onDismiss}
          />}
          <div className="interactions">
            {/* {
              isLoading
              ? <Loading />
              :
              <Button onClick={()=>this.fetchSearchTopStories(searchTerm,page+1)}>More</Button>
            } */}
            <ButtonWithLoading
              isLoading={isLoading}
              onClick={() => this.fetchSearchTopStories(searchKey, page+1)}>
              More
            </ButtonWithLoading>
          </div>
        </header>
      </div>
    );
  }
}

const updateSearchTopStoriesState = (hits, page) => (prevState) => {
  const {searchKey, results} = prevState
  const oldHits = results && results[searchKey] ? results[searchKey].hits:[]
  const updatedHits = [
    ...oldHits,
    ...hits
  ]
  return {
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page: page }
    },
    isLoading: false
  }
}

// ES6 class components
class Search extends Component {
  componentDidMount() {
    if(this.input) {
      this.input.focus();
    }
  }
  render() {
    const { value, onChange, children, onSubmit  } = this.props;
    return (
      <form onSubmit={onSubmit}>
        {children} <input
        type="text"
        value={value}
        onChange={onChange}
        ref={(node) => { this.input = node; }}
        />
        <button type="submit">{children}</button>
      </form>
    );
  }
}

// functional stateless components
// const Search = ({ value, onChange, children, onSubmit }) =>{
//   let input;
//   return(
//     <form onSubmit={onSubmit}>
//       {children} <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         ref={(node) => input = node}
//       />
//       <button type="submit">{children}</button>
//     </form>
//   )}
// Search.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

// ES6 class components
class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    }
    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }
  
  render(){
    const {list, onDismiss} = this.props;
    const {sortKey,isSortReverse} = this.state;
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse
    ? sortedList.reverse()
    : sortedList;

    return(
      <div className="table">
        <div className="table-header">
          <span style={{ width: '40%' }}>
            <Sort
            sortKey={'TITLE'}
            onSort={this.onSort}
            activeSortKey={sortKey}
            >
            Title
            </Sort>
          </span>
          <span style={{ width: '25%' }}>
            <Sort
            sortKey={'AUTHOR'}
            onSort={this.onSort}
            activeSortKey={sortKey}
            >Author
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort
            sortKey={'COMMENTS'}
            onSort={this.onSort}
            activeSortKey={sortKey}
            >
            Comments
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort
            sortKey={'POINTS'}
            onSort={this.onSort}
            activeSortKey={sortKey}
            >
            Points
            </Sort>
          </span>
        </div>
      {
        reverseSortedList.map(item =>
          <div className="table-row" key={item.objectID}>
            <span style={{width:'15%'}}>
              <Button onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
            </span>
            <span style={{width:'40%'}}><a href="{item.url}">{item.title}</a></span>
            <span style={{width:'25%'}}>creat by {item.author}</span>
            <span style={{width:'10%'}}>{item.num_comments}</span>
            <span style={{width:'10%'}}>{item.points}</span>
          </div>
        )
      }
  </div>
  )}
}

// functional stateless components
// const Table = ({list, pattern, onDismiss, isSearched = pattern => item => item.title.toLowerCase().includes(pattern.toLowerCase())}) => 
// const Table = ({list, onDismiss, sortKey, onSort, isSortReverse}) => {
//   const sortedList = SORTS[sortKey](list);
//   const reverseSortedList = isSortReverse
//   ? sortedList.reverse()
//   : sortedList;
// return(
//   <div className="table">
//     <div className="table-header">
//       <span style={{ width: '40%' }}>
//         <Sort
//         sortKey={'TITLE'}
//         onSort={onSort}
//         activeSortKey={sortKey}
//         >
//         Title
//         </Sort>
//       </span>
//       <span style={{ width: '25%' }}>
//         <Sort
//         sortKey={'AUTHOR'}
//         onSort={onSort}
//         activeSortKey={sortKey}
//         >Author
//         </Sort>
//       </span>
//       <span style={{ width: '10%' }}>
//         <Sort
//         sortKey={'COMMENTS'}
//         onSort={onSort}
//         activeSortKey={sortKey}
//         >
//         Comments
//         </Sort>
//       </span>
//       <span style={{ width: '10%' }}>
//         <Sort
//         sortKey={'POINTS'}
//         onSort={onSort}
//         activeSortKey={sortKey}
//         >
//         Points
//         </Sort>
//       </span>
//     </div>
//     {
//       // list.filter(isSearched(pattern)).map((item) => 
//       // list.map((item) =>
//       reverseSortedList.map(item =>
//         <div className="table-row" key={item.objectID}>
//           <span style={{width:'15%'}}>
//             <Button onClick={() => onDismiss(item.objectID)}>
//               Dismiss
//             </Button>
//           </span>
//           <span style={{width:'40%'}}><a href="{item.url}">{item.title}</a></span>
//           <span style={{width:'25%'}}>creat by {item.author}</span>
//           <span style={{width:'10%'}}>{item.num_comments}</span>
//           <span style={{width:'10%'}}>{item.points}</span>
//         </div>
//       )
//     }
//   </div>
// )}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ),
  onDismiss: PropTypes.func.isRequired,
};

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

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  Button.defaultProps = {
    className: '',
  };

  
const Loading = () => <FontAwesomeIcon className="spinner" icon={faSpinner} />

// ES5
// function withLoading(Component) {
//   return function(props) {
//     return <Component { ...props } />;
//   }
// }

// ES6
const withLoading = (Component) => ({isLoading, ...rest}) =>
isLoading
? <Loading />
: <Component { ...rest } />

const ButtonWithLoading = withLoading(Button);

const Sort = ({ sortKey, onSort, children, activeSortKey }) => {
  // const sortClass = ['button-inline'];
  // if (sortKey === activeSortKey) {
  //   sortClass.push('button-active');
  // }
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  )
  return(
    <Button onClick={() => onSort(sortKey)} className={sortClass}>
      {children}
    </Button>
)}

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