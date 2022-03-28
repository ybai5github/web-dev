import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationSidebar from "./components/tuiter/NavigationSidebar";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import PostList from "./components/tuiter/PostList";
import TuitList from "./components/tuiter/tuit-list/tuit-list";
import ProfileScreen from "./components/tuiter/profile-screen/ProfileScreen";
import EditProfileScreen from "./components/tuiter/profile-screen/EditProfileScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs" exact={true} element={<Labs />} />
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreComponent/>}/>
                            <Route path="navigation"
                                   element={<NavigationSidebar/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="editProfile"
                                   element={<EditProfileScreen/>}/>
                            ...
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
