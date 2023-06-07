import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Estrella from "./Pages/Estrella";
import Tipos from "./Pages/Tipos";
import UnidadesDistancia from "./Pages/UnidadesDistancia";
import Event from "./Pages/Event";
import Historia from "./Pages/Historia";
function App() {
    return (
        <>
            <div>
                <Router>
                    <nav className="navbar navbar-expand border border-info border-4" style={{backgroundColor:"rgba(126,37,37,0.71)"}}>
                        <div className="container-fluid">
                                <div className="navbar-nav mt-4">
                                    <div className="nav-item ms-4">
                                        <Link to="/"><button className="btn btn-primary text-dark button mb-4"><span>Personajes</span></button></Link>
                                    </div>
                                    <div className="nav-item ms-4">
                                        <Link to="/series"><button className="btn btn-primary text-dark button mb-4"><span>Series</span></button></Link>
                                    </div>
                                    <div className="nav-item ms-4">
                                        <Link to="/comics"><button className="btn btn-primary text-dark button mb-4"><span>Comics</span></button></Link>
                                    </div>
                                    <div className="nav-item ms-4">
                                        <Link to="/eventos"><button className="btn btn-primary text-dark button mb-4"><span>Eventos</span></button></Link>
                                    </div>
                                    <div className="nav-item ms-4">
                                        <Link to="/historias"><button className="btn btn-primary text-dark button mb-4"><span>Historia</span></button></Link>
                                    </div>
                                </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Estrella/>}/>
                        <Route path='/series' element={<Tipos/>}/>
                        <Route path='/comics' element={<UnidadesDistancia/>}/>
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
