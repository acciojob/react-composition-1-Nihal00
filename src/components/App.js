
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from './Tabs';

const obj = [
  {
    title: "Tab 1"
  },
  {
    title: "Tab 2"
  },
  {
    title: "Tab 3"
  } 
]

const App = () => {
  const [tabs, setTabs] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
       <ul>
          {obj.map(ob => <Tabs text={ob.title} onClick={() => setTabs(ob.text)} />)}
       </ul>
        
        <p>This is the content for {tabs}</p>
    </div>
  )
}

export default App
