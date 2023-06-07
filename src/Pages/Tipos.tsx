import React, {useEffect, useState} from "react";
//import {Type} from "../Interfaces/Star";
import axios from "axios";

export default function Tipos() {
    /*const baseUrl: string = "http://ec2-52-15-232-167.us-east-2.compute.amazonaws.com:8081/star-types"
    const apiKey: string = "apiKey=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZWxpIiwiaWQiOjIsImlhdCI6MTY4NjEyNzk5OSwiZXhwIjoxNjg2OTkxOTk5fQ.0IJKVscnGy7MEHCJKMFmRiBNNyRuG3-qfuWEEQ-yNqg"
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
    }, []);*/
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://gateway.marvel.com/v1/public/series?ts=1&apikey=d781254a480edce1c3a28770fb303244&hash=85e2f7ba75867851a2fb9d7ea4d5764a`)
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
                        <h2 className={"text-center"}>Series</h2>
                    </div>
                </div>
                <div className={"row text-uppercase mt-5"}>
                    {data.map((item, index: number) => (
                        <div className={"mb-4 mx-5 p-2 col-3 buttons text-center"}>
                            <p className={"fw-bold"}>{item["title"]}<br/></p>
                            <img src={item["thumbnail"]["path"] + "." + item["thumbnail"]["extension"]} alt="" style={{ height: "10rem" }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}