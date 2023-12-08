import './App.css';
import './TaskList'
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
  
     <BrowserRouter>
      <Routes>
       
         <Route exact path='/' element={<TaskList/>} />
         <Route path='/tasks/:taskId' elementent={<TaskDetails/>} />
       
     </Routes>
     </BrowserRouter>
   
    
     
  );
}

export default App;
