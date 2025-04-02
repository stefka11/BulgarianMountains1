import { useState } from "react";

export default function useStableState(stateKey, initalState) {
    const [state, setState] = useState(() => {
        
        const stableState = localStorage.getItem(stateKey);
        
        if (!stableState) {
            return typeof initalState === 'function' 
                ? initalState() 
                : initalState;
        }

        const stableStateData = JSON.parse(stableState);

        return stableStateData;
    });

    const setStableState = (input) => {
        
        const data = typeof input === 'function' 
            ? input(state) 
            : input;

        const stableData = JSON.stringify(data);

        localStorage.setItem(stateKey, stableData);

        setState(data);
    };

    return [
        state,
        setStableState,
    ]
}
