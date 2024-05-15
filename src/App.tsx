import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Series from "./Pages/Series";
import Comics from "./Pages/Comics";
import Event from "./Pages/Event";
import Historia from "./Pages/Historia";
import Personajes from './Pages/Personajes';
function App() {
    return (
        <>
            <div>
                <Router>
                    <nav className="navbar navbar-expand border border-info border-4 d-flex justify-content-around py-3" style={{backgroundColor:"rgba(126,37,37,0.71)"}}>
                        <Link to="/"><button className="btn btn-primary text-dark button"><span>Personajes</span></button></Link>
                        <Link to="/series"><button className="btn btn-primary text-dark button"><span>Series</span></button></Link>
                        <Link to="/comics"><button className="btn btn-primary text-dark button"><span>Comics</span></button></Link>
                        <Link to="/eventos"><button className="btn btn-primary text-dark button"><span>Eventos</span></button></Link>
                        <Link to="/historias"><button className="btn btn-primary text-dark button"><span>Historia</span></button></Link>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Personajes/>}/>
                        <Route path='/series' element={<Series/>}/>
                        <Route path='/comics' element={<Comics/>}/>
                        <Route path='/eventos' element={<Event/>}/>
                        <Route path='/historias' element={<Historia/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    );
}
function NoMatch() {
    return (
        <>
            <div className={"container d-flex justify-content-center pt-5 mt-5"}>
                <div className={"flex-column pt-5 mt-5"}>
                    <div>
                        <h1 className={"pt-5"}>NOTHING TO SE HERE!</h1><br/>
                    </div>
                    <div className={"ms-3"}>
                        <Link to="/" className={"ps-5 ms-5"}>Go to the home page</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
