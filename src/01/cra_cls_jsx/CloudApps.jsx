import React from "react";

class Li extends React.Component{
    render(props){
        return(
            <>
                <li>
                    <a href={this.props.href}>{this.props.txt}</a>
                </li>
            </>
        );
    }
}

class Ul extends React.Component{
    render(props){
        return(
            <>
                <ul>
                    <Li href={this.props.infos[0].href} txt={this.props.infos[0].txt}/>
                    <Li href={this.props.infos[1].href} txt={this.props.infos[1].txt}/>
                    <Li href={this.props.infos[2].href} txt={this.props.infos[2].txt}/>
                    <Li href={this.props.infos[3].href} txt={this.props.infos[3].txt}/>
                    <Li href={this.props.infos[4].href} txt={this.props.infos[4].txt}/>
                    <Li href={this.props.infos[5].href} txt={this.props.infos[5].txt}/>
                </ul>
            </>
        );
    }
}

class P extends React.Component{
    render(props){
        return(
            <>
             <p>
                {this.props.txt}
            </p>
            </>
        );
    }
}

class H1 extends React.Component{
    render(props){
        return(
            <>
            <h1>
                {this.props.txt}
            </h1>
            </>
        );
    }
}
class CloudApps extends React.Component {
    render(){
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
}

export default CloudApps;