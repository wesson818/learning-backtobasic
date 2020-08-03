import React, {useState, useEffect, useRef} from 'react'
// import logo from './logo.svg';
import './App.css';
// import ClassContextComponent from './components/ClassContextComponent'
import FunctionContextComponent from './components/FunctionContextComponent'
import { ThemeProvider } from './components/ThemeContext'
import useLocalStorage from './components/useLocalStorage';
import useUpdateLogger from './components/useUpdateLogger';


export default function App () {
  //useState
  const [name, setName] = useState('')
  //useRef
  const renderCount = useRef(0)
  const inputRef = useRef()
  const prevName = useRef()

  //custom hook (useLocalStorage)
  const [data, setDate] = useLocalStorage('name','')
  useUpdateLogger(data)  
 
  // //useContext
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme(){
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

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
      <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>I randered {renderCount.current} times</div>
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
      <input type="text" value={data} onChange={(e)=>setDate(e.target.value)} />
    </div>
  )
}