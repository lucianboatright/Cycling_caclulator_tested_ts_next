import { createContext, useReducer, useContext } from "react"

const defaultState = { rearCog: 16 }

export type Action = 'rearShiftUp' | 'rearShiftDown'
export type RearDispatch = (action: Action) => void
export type RearState = typeof defaultState

const RearCounterContexxt = createContext<
 { rearstate: RearState; reardispatch: RearDispatch } | undefined
 >(undefined)

function counterReducer(rearstate: RearState, action: Action) {
    switch(action) {
        case 'rearShiftUp': {
            return {
                rearCog: rearstate.rearCog + 1
            }
        }
        case 'rearShiftDown': {
            return {
                rearCog: rearstate.rearCog - 1
            }
        }
    }
}

export function CounterProvider({ children }) {
    const [ rearstate, reardispatch ] = useReducer(counterReducer, defaultState)

    return (
        <RearCounterContexxt.Provider value={{ rearstate, reardispatch }}>
            {children}
        </RearCounterContexxt.Provider>
    )
}

export function useCounterRear() {
    const context = useContext(RearCounterContexxt)

    if (!context) throw new Error('useCounter must be used inside a Counter-Provider')

    return context
}
