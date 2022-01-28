import { createContext, useReducer, useContext } from "react"

const defaultState = { rearCog: 16, frontCog: 50 }

export type Action = 'rearShiftUp' | 'rearShiftDown' | 'frontShiftUp' | 'frontShiftDown'
export type Dispatch = (action: Action) => void
export type State = typeof defaultState

const CounterContexxt = createContext<
 { state: State; dispatch: Dispatch } | undefined
 >(undefined)

function counterReducer(state: State, action: Action) {
    switch(action) {
        case 'frontShiftUp': 
            return {
                frontCog: state.frontCog + 1
            }
        case 'frontShiftDown': {
            return {
                frontCog: state.frontCog - 1
            }
        }
    }
}

export function CounterProvider({ children }) {
    const [ state, dispatch ] = useReducer(counterReducer, defaultState)

    return (
        <CounterContexxt.Provider value={{ state, dispatch }}>
            {children}
        </CounterContexxt.Provider>
    )
}

export function useCounter() {
    const context = useContext(CounterContexxt)

    if (!context) throw new Error('useCounter must be used inside a Counter-Provider')

    return context
}
