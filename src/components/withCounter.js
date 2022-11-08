import React from "react";
const withCounter = (OriginalComponent) => {
    const WithCounter = () => {
        return (
            <OriginalComponent name="Hi Anusha..."/>
        );
    }
    return WithCounter;
}

export default withCounter;