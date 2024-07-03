import React from "react";

const Li = (props) => {
    return(
        <>
            <li>
                    <a href={props.href}>{props.txt}</a>
            </li>
        </>
    );
}
const Ul = (props) => {
    return(
        <>
        <ul>
            <Li href={props.infos[0].href} txt={props.infos[0].txt}/>
            <Li href={props.infos[1].href} txt={props.infos[1].txt}/>
            <Li href={props.infos[2].href} txt={props.infos[2].txt}/>
            <Li href={props.infos[3].href} txt={props.infos[3].txt}/>
            <Li href={props.infos[4].href} txt={props.infos[4].txt}/>
            <Li href={props.infos[5].href} txt={props.infos[5].txt}/>
        </ul>
    </>
    );
}
const P = (props) => {
    return(
        <>
             <p>
                {props.txt}
            </p>
            </>
    );
}

const H1 = (props) => {
    return(
        <>
            <h1>
                {props.txt}
            </h1>
            </>
    );
}

const CloudApps = () => {
    return(
        <>
            <div className="cloud_apps">
                <H1 txt='Cloud Infrastructure' />
                <P txt="Operate your IT predictably, securely, and at a lower cost with cloud infrastructure services designed to run all your cloud native, web-scale, and mission-critical workloads." />
                <div>
                    <Ul infos={[
                        {
                            href : '#none', txt : 'Developer Services',
                        },
                        {
                            href : '#none', txt : 'Integration',
                        },
                        {
                            href : '#none', txt : 'Analytics and BI',
                        },
                        {
                            href : '#none', txt : 'Machine Learning and AI',
                        },
                        {
                            href : '#none', txt : 'Big Data',
                        },
                        {
                            href : '#none', txt : 'Compute',
                        },
                    ]}/>
                    <Ul infos={[
                        {
                            href : '#none', txt : 'Storage',
                        },
                        {
                            href : '#none', txt : 'Containers and Functions',
                        },
                        {
                            href : '#none', txt : 'Networking',
                        },
                        {
                            href : '#none', txt : 'Oracle Databases',
                        },
                        {
                            href : '#none', txt : 'Open Source Databases',
                        },
                        {
                            href : '#none', txt : 'Native VMware',
                        },
                    ]}/>
                </div>
            </div>
            </> 
    );
}

export default CloudApps;