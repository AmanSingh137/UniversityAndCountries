import React from 'react';
import './Describe.css';

const Describe = (props) => {
    //console.log(props);
    const waiting = "Information awaited";
    const items = [{
        stateProvince: null, 
        name: "Academy of Sports and Physical Training",
        webPages: ["http://www.aefs.edu.al/"],
        domains: ["aefs.edu.al"]
    }]
    const webData = items[0].webPages.map((item, index) => <li className='list-items'>{" "}{index +1}{". "}<a href={item}>{item}</a></li>);
    //const domainData = items.domains.map((item) => <li>{item}</li>);
    return (
        <div className="body-con">
        <div className='container'>
            <h3 className='university'><span className='uni'>University Name: </span>{items[0].name !== null ? items[0].name : "Hogwarts"}</h3>
            <h3 className='state'><span className='uni'>State:</span> {items[0].stateProvince === null ? waiting : items[0].stateProvince} </h3>
            <h3 className='websites'>More information about the university can be found on: {webData}</h3>
        </div>
        </div>
    )
}

export default Describe;
