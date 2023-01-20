import './styles.css';
import { useContext} from "react";
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import AddForm from './components/AddForm/AddForm';
import DetailView from './components/DetailView/DetailView';
import Home from './components/Home/Home';

import StatesContext from './store/states-context';

 

function App() {

  let {courses, teachers} = useContext(StatesContext);

  return (
      <>
      <div className="App">
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/courses" element={
              <List data={courses} type={"courses"}  /> }/>

              <Route path="/courses/:id" element={<DetailView />}/>
              <Route path="/teachers" element={
              <List data={teachers} type={"teachers"} />} />

              <Route path="/teachers/:id" element={<DetailView />}/>
            <Route path="/add" element={<AddForm />} />
          </Routes>
        </main>
      </div>
      </>
  );
}

export default App;
