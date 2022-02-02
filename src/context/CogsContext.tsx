import { createContext, useReducer, useContext } from "react"

const defaultState = { rearCog: 14, frontCog: 50 }

export type Action = 'rearShiftUp' | 'rearShiftDown' | 'frontShiftUp' | 'frontShiftDown'
export type Dispatch = (action: Action) => void
export type State = typeof defaultState

const CounterContexxt = createContext<
 { state: State; dispatch: Dispatch } | undefined
 >(undefined)

function counterReducer(state: State, action: Action) {
    switch(action) {
        case 'rearShiftUp': {
            return {
                rearCog: state.rearCog + 1 < 47 ? state.rearCog + 1 : state.rearCog,
                frontCog: state.frontCog
            }
        }
        case 'rearShiftDown': {
            return {
                rearCog: state.rearCog - 1 > 10 ? state.rearCog - 1 : state.rearCog,
                frontCog: state.frontCog
            }
        }
        case 'frontShiftUp': 
            return {
                frontCog: state.frontCog + 1 < 60 ? state.frontCog + 1 : state.frontCog,
                rearCog: state.rearCog
            }
        case 'frontShiftDown': {
            return {
                frontCog: state.frontCog - 1 > 10 ? state.frontCog - 1 : state.frontCog,
                rearCog: state.rearCog
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
