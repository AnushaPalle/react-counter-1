import React from "react";
import withCounter from "./withCounter";
const CounterHOC = (props) => {
    const {name} = props;
    return (
        <div className="counterHOC">
            <div>Hi {name}</div>
            <div>Hello</div>
        </div>
    );
}

export default withCounter(CounterHOC) ;