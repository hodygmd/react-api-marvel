import React, {useEffect, useState} from "react";
//import {Type} from "../Interfaces/Star";
import axios from "axios";

export default function Historia() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL_STORIES}?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
            .then(response => {
                console.log(response.data.data.results)
                setData(response.data.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className={"container pt-5"}>
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-5 d-flex justify-content-center py-3 rounded-3 text-danger"}
                         style={{backgroundColor: "rgba(38,30,30,0.56)"}}>
                        <h2 className={"text-center"}>Historias</h2>
                    </div>
                </div>
                <div className={"row text-uppercase mt-5"}>
                    {data.map((item, index: number) => (
                        <div className={"mb-4 mx-5 p-2 col-3 buttons text-center"}>
                            <p className={"fw-bold"}>{item["title"]}<br/></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}