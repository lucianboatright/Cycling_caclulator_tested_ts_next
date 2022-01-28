import { createContext, useReducer, useContext } from "react"

const defaultState = { frontCog: 50 }

export type Action = 'frontShiftUp' | 'frontShiftDown'
export type FrontDispatch = (action: Action) => void
export type FrontState = typeof defaultState

const CounterContexxt = createContext<
 { frontstate: FrontState; frontdispatch: FrontDispatch } | undefined
 >(undefined)

function counterReducer(frontstate: FrontState, action: Action) {
    switch(action) {
        case 'frontShiftUp': 
            return {
                frontCog: frontstate.frontCog + 1
            }
        case 'frontShiftDown': {
            return {
                frontCog: frontstate.frontCog - 1
            }
        }
    }
}

export function CounterProvider({ children }) {
    const [ frontstate, frontdispatch ] = useReducer(counterReducer, defaultState)

    return (
        <CounterContexxt.Provider value={{ frontstate, frontdispatch }}>
            {children}
        </CounterContexxt.Provider>
    )
}

export function useCounteFront() {
    const context = useContext(CounterContexxt)

    if (!context) throw new Error('useCounter must be used inside a Counter-Provider')

    return context
}
