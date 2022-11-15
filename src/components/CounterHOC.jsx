import React from "react";
import withCounter from "./withCounter";
const CounterHOC = (props) => {
    const {name} = props;
    return (
        <div className="counterHOC">
            <h1>This is header</h1>
            <div>Hi Iam {name}</div>
            <div>Hello</div>
            <div>Hiiiiiiiiiiiiiiii  fellow</div>
        </div>
    );
}

export default withCounter(CounterHOC) ;