import React, {useEffect, useState} from "react";
import {DistanceUnit} from "../Interfaces/Star";
import axios from "axios";
import '../App.css';

export default function UnidadesDistancia() {
    const baseUrl: string = "http://ec2-52-15-232-167.us-east-2.compute.amazonaws.com:8081/distance_units"
    const apiKey: string = "apiKey=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZWxpIiwiaWQiOjIsImlhdCI6MTY4NjEyNzk5OSwiZXhwIjoxNjg2OTkxOTk5fQ.0IJKVscnGy7MEHCJKMFmRiBNNyRuG3-qfuWEEQ-yNqg"
    const [data, setData] = useState<DistanceUnit[]>([]);

    useEffect(() => {
        axios.get<DistanceUnit[]>(`${baseUrl}?${apiKey}`)
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
                        <h2 className={"text-center"}>Unidades de Distancia</h2>
                    </div>
                </div>
                <div className={"row text-uppercase mt-5"}>
                    {data.map((item, index: number) => (
                        <div className={"mb-4 mx-5 p-2 col-3 buttons rounded-pill"}>
                            <p className={"text-center fw-bold"}>{item.unit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}