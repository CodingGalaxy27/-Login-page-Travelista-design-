//mapping
import './App.css';
import Hea from './Hea';
import './Nar.css';
import Usest from './Usest';
import Task from './Task';
import Todo from './Todo';
import { useState } from 'react';
import Naruto from './Naruto';
import Fetch from './Fetch';
import Rout from './Rout';
import About from './About';
import Signup from './Signup';
import Objsign from './Objsign';
import Objroute from './Objroute';

function App() { 
const [showtext,setShowtext]=useState(false);//input box  irrukathu  falsela irruku usestate
 
 

  return (
    <div className='App'>
     
 <Objroute/>
    </div>
  
  );
}


export default App;
