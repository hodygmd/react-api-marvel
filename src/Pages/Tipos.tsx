import React, {useEffect, useState} from "react";
import {Type} from "../Interfaces/Star";
import axios from "axios";

export default function Tipos() {
    const baseUrl: any = process.env.REACT_APP_API_URL_TYPES
    const apiKey: any = process.env.REACT_APP_API_KEY
    const [data, setData] = useState<Type[]>([]);

    useEffect(() => {
        axios.get<Type[]>(`${baseUrl}?${apiKey}`)
            .then(response => {
                console.log(response.data)
                setData(response.data);
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
                        <h2 className={"text-center"}>Tipos de Objetos</h2>
                    </div>
                </div>
                <div className={"row text-uppercase mt-5"}>
                    {data.map((item, index: number) => (
                        <div className={"mb-4 mx-5 p-2 col-3 buttons rounded-5"}>
                            <p className={"text-center fw-bold"}>{item.type}<br/></p>
                            <p className={"text-center"}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}