import React from "react";
import withCounter from "./withCounter";
const CounterHOC = (props) => {
    const {name} = props;
    return (
        <div className="counterHOC">
            <div>Hi Iam {name}</div>
            <div>Hello</div>
            <div>Hiiiiiiiiiiiiiiii Idiot stupid fellow</div>
        </div>
    );
}

export default withCounter(CounterHOC) ;