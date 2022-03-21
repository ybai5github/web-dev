import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                  <Route path="/" exact={true} element={<Labs/>}/>
                  <Route path="/tuiter" exact={true} element={<Tuiter/>}/>
                  <Route path="/tuiter/explore" exact={true} element={<ExploreScreen/>}/>
                  <Route path="/tuiter/home" exact={true} element={<HomeScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}
export default App;
