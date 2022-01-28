import { createContext, useReducer, useContext } from "react"

const defaultState = { count: 0 }

export type Action = 'increment' | 'decrement'
export type Dispatch = (action: Action) => void
export type State = typeof defaultState

const CounterContexxt = createContext<
 { state: State; dispatch: Dispatch } | undefined
 >(undefined)

function counterReducer(state: State, action: Action) {
    switch(action) {
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement': {
            return {
                count: state.count - 1
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
