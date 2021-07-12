import React, {useState, useEffect, useRef} from 'react'
// import logo from './logo.svg';
import './App.css'
// import ClassContextComponent from './components/ClassContextComponent'
import FunctionContextComponent from './components/FunctionContextComponent'
import { ThemeProvider } from './components/ThemeContext'
import useLocalStorage from './components/useLocalStorage'
import useUpdateLogger from './components/useUpdateLogger'

// import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

import Form from './components/Form'

import LifecycA from './components/LifecycA'

// import { useQuery, gql } from '@apollo/client';

export default function App () {
  //useState
  const [name, setName] = useState('')
  // const [booksInformation, setBooksInformation] = useState('')
  //useRef
  const renderCount = useRef(0)
  const inputRef = useRef()
  const prevName = useRef()

  //custom hook (useLocalStorage)
  const [lsData, setLSDate] = useLocalStorage('name','')
  useUpdateLogger(lsData)  
 
  // //useContext
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme(){
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  // const BOOK_INFORMATION = gql`
  //   query {
  //     books{
  //       name
  //       author {
  //         name
  //       }
  //     }
  //   }
  // `
  
  // const { loading, error, data } = useQuery(BOOK_INFORMATION);
  // function getBooks() {
    // console.log("queryData",data)
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    // setBooksInformation(data.books.map(({name,author})=>(
    //   <div key={name}>
    //     <p>{name}: {author.name}</p>
    //   </div>
    // )))
  // }
  // useEffect(()=>{
  //   getBooks()
  // },[])

  useEffect(()=>{
      renderCount.current = renderCount.current + 1
  })

  useEffect(()=>{
    prevName.current = name
  },[name])

  function handleFocus(){
    inputRef.current.focus()
  }

  return (
    <div className="App-header">
      {/* <Hello name="Jack" heroName="Superman">
        <p>this is child block</p>
      </Hello> */}
      {/* <Hello name="John" heroName="Batman">
        <button>button</button>
      </Hello> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      <ParentComponent />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Welcome name="Cindy"></Welcome> */}
      {/* <Message /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <LifecycA /> */}
      <br />
      <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={handleFocus}>focus input</button>
      <br /><br /><br />
      {/* <ThemeProvider value = {darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider> */}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      <br /><br /><br />
      <p>useLocalStorage hook</p>
      <input type="text" value={lsData} onChange={(e)=>setLSDate(e.target.value)} />
      <br /><br /><br />
      <p>GraphQL example:</p>
      {/* <button onClick={getBooks}>get books</button> */}
      {/* {booksInformation} */}

    </div>
  )
}