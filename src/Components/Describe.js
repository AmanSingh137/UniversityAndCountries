import React from 'react';
import { useLocation } from 'react-router-dom';
import './Describe.css';

const Describe = (props) => {
    const location = useLocation();

    // console.log(location.state.name);
    // console.log(location.state.web);
    // console.log(location.state.ct);
    //console.log(props.location.state);

    const waiting = "Information awaited";
    const items = [{
        name: location.state.name,
        webPages: location.state.web,
        country: location.state.ct
    }]
    const webData = items[0].webPages.map((item, index) => <li className='list-items'><a href={item}>{item}</a></li>);
    //const domainData = items.domains.map((item) => <li>{item}</li>);
    return (
        <div className="body-con">
            <div className='container'>
                <h3 className='university'><span className='uni'>University Name: </span>{items[0].name !== null ? items[0].name : "Hogwarts"}</h3>
                <h3 className='state'><span className='uni'>Country:</span> {items[0].country === null ? waiting : items[0].country} </h3>
                <h3 className='websites'>More information about the university can be found on: </h3>
                <div className="links">
                    <h3>{webData}</h3>
                </div>
            </div>
        </div>
    )
}

export default Describe;
