import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState'
import { Parent } from './components/ParentChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <br />
      <UseReducer />
      <br />
      <ObjectUseState />
      <br />
      <ArrayUseState />
      <br />
      <Parent />
      <br />
      <GrandParent />
      <br />
      <ParentTwo />
      <br /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
