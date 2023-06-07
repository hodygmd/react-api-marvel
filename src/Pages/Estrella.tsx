import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DistanceUnit, Star, Type} from "../Interfaces/Star";

const Estrella: React.FC = () => {
    const baseUrl: any = process.env.REACT_APP_API_URL_STARS
    const apiKey: any = process.env.REACT_APP_API_KEY
    const [data, setData] = useState<Star[]>([]);


    useEffect(() => {
        axios.get<Star[]>(`${baseUrl}/stars?${apiKey}`)
            .then(response => {
                //console.log(response.data)
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
                        <h2 className={"text-center"}>Objetos Astronomicos</h2>
                    </div>
                </div>
                <div className={"row text-uppercase mt-5"}>
                    {data.map((item, index: number) => (
                        <div className={"mb-4 mx-5 p-2 col-3 buttons rounded-pill"}>
                            <p className={"text-center fw-bold"}>{item.name}</p>
                            <p className={"text-center"}>masa: {item.mass} M☉<br/>
                            distancia: {item.distance} {item.id_distance_unit.unit}<br/>
                                tipo: {item.id_type.type}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Estrella;