import * as React from 'react';
import { CogContext } from "./CogsContext";

const Counter = () => {
    const { state, setStateFront } = React.useContext(CogContext);

    return (
        <>
            <div>
                <h3>Front Counter</h3>
                <h2>Cog Size: {state.count}</h2>
                <button
                    onClick={() => {
                        setStateFront({
                            count: state.count + 1
                        });
                        
                    }}
                >Shift Up</button>
                <button
                    onClick={() => {
                        setStateFront({
                            count: state.count - 1
                        });
                        
                    }}
                >Shift Down</button>
            </div>
        </>
    );
};

export default Counter;