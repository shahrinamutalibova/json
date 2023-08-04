import LayoutBar from "./components/Layout";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Pages/Posts";
import Comments from "./components/Pages/Comments";
import Albums from "./components/Pages/Albums";
import Photos from "./components/Pages/Photos";
import Users from "./components/Pages/Users";
import Todo from "./components/Pages/Todo";

import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      {/*<LayoutBar />*/}
      <Routes>
          <Route path={'/'} element={<Layout/>} >
              <Route path="/posts" element={<Posts />} />
              <Route path="/comments" element={<Comments/>}/>
              <Route path="/photos" element={<Photos/>}/>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/albums" element={<Albums/>}/>
              <Route path="/users" element={<Users/>}/>
          </Route>

      </Routes>
    </div>
  );
}

export default App;
