import React from "react";

const A = (props) => {
    return(
        React.createElement(
            'a',
            {
                href: props.href,
            },
            props.menu
        )
    );
}

const GnbLi = (props) => {
    return(
        React.createElement(
            'li',
            null,
            React.createElement(
                A,
                {
                    href: props.href,
                    menu: props.menu,
                },
                null
            )
        )  
    );
}

export default GnbLi;