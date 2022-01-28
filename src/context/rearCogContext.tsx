import { createContext, useReducer, useContext } from "react"

const defaultState = { rearCog: 16, frontCog: 50 }

export type Action = 'rearShiftUp' | 'rearShiftDown'
export type RearDispatch = (action: Action) => void
export type RearState = typeof defaultState

const RearCounterContexxt = createContext<
 { state: RearState; dispatch: RearDispatch } | undefined
 >(undefined)

function counterReducer(state: RearState, action: Action) {
    switch(action) {
        case 'rearShiftUp': {
            return {
                rearCog: state.rearCog < 46? state.rearCog + 1 : state.rearCog
            }
        }
        case 'rearShiftDown': {
            return {
                rearCog: state.rearCog > 10? state.rearCog - 1 : state.rearCog
            }
        }
    }
}

export function CounterProvider({ children }) {
    const [ state, dispatch ] = useReducer(counterReducer, defaultState)

    return (
        <RearCounterContexxt.Provider value={{ state, dispatch }}>
            {children}
        </RearCounterContexxt.Provider>
    )
}

export function useCounter() {
    const context = useContext(RearCounterContexxt)

    if (!context) throw new Error('useCounter must be used inside a Counter-Provider')

    return context
}
