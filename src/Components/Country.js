import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
//import Describe from "./Describe";
import './Country.css';


const Country = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState("");
    let nothing = "Select a country";
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = (value) => {
        console.log(value);
        setValue(value);
    };
    const url = "http://universities.hipolabs.com/search?country="
    const [data, setData] = useState(null);
    //const [country, setCountry] = useState([]);
    //const [val, setVal] = useState(-1);
    // const changeHandler1 = () =>{
    //     setVal()
    // }
    // const clickHandler = (e) => {
    //     console.log(e.target.value);
    // }
    useEffect(() => {
        const getData = async () => {
            try {
                let res = "";
                if (value !== "")
                    res = await axios.get(url + value.label);
                // console.log(res.data[0].name);
                const values = await res.data;
                console.log(values);
                //setCountry(values);
                const displayData = await values.map((item, index) => {
                    //console.log(item.web_pages);
                    return <>
                        <ListGroup>
                            <ListGroup.Item variant="primary" className="mt-2" onClick={() => navigate('/country', { state: { name: item.name, web: item.web_pages, ct: value.label }, replace: true })}>{item.name}</ListGroup.Item>
                        </ListGroup>
                    </>
                });
                setData(displayData);
                //console.log(displayData);
            } catch (err) {
                //console.log(err.res.status]);
            }
        }
        getData();
    })

    return (
        <>
            <h1 className="top-header">UNIVERSITIES OF THE WORLD</h1>
            <br />
            <h2 className="middle-header">{value !== "" ? "You selected " + value.label : nothing}</h2>
            <br />
            <br />
            <div className="countries">
                <Select options={options} value={value} onChange={changeHandler} />
                {data}
            </div>
            <div className={value !== "" ? "footer" : "footer-show"}>
                <h5>Select your university!</h5>
            </div>
            {/*val===-1?null:<Describe values={country[val]} /> */}
        </>
    );
};

export default Country;
