import { createContext, useReducer, useContext } from "react"

const defaultStateRear = { rearCog: 16 }
const defaultStateFront = { frontCog: 50 }

export type RearAction = 'rearShiftUp' | 'rearShiftDown'
export type FrontAction = 'frontShiftUp' | 'frontShiftDown'

export type RearDispatch = (rearAction: RearAction) => void
export type FrontDispatch = (frontAction: FrontAction) => void

export type RearState = typeof defaultStateRear
export type FrontState = typeof defaultStateFront

const RearCounterContexxt = createContext<
 { stateRear: RearState; dispatchRear: RearDispatch } | undefined
 >(undefined)
const FrontCounterContexxt = createContext<
 { state: FrontState; dispatch: FrontDispatch } | undefined
 >(undefined)

function counterReducerRear(stateRear: RearState, rearAction: RearAction) {
    switch(rearAction) {
        case 'rearShiftUp': {
            return {
                rearCog: stateRear.rearCog < 46? stateRear.rearCog + 1 : stateRear.rearCog
            }
        }
        case 'rearShiftDown': {
            return {
                rearCog: stateRear.rearCog > 10? stateRear.rearCog - 1 : stateRear.rearCog
            }
        }
    }
}
function counterReducerFront(stateFront: FrontState, frontAction: FrontAction) {
    switch(frontAction) {
        case 'frontShiftUp': {
            return {
                rearCog: stateFront.rearCog < 46? stateFront.rearCog + 1 : stateFront.rearCog
            }
        }
        case 'frontShiftDown': {
            return {
                rearCog: stateFront.rearCog > 10? stateFront.rearCog - 1 : stateFront.rearCog
            }
        }
    }
}

export function CounterProvider({ children }) {
    const [ stateRear, dispatchRear ] = useReducer(counterReducerRear, defaultStateRear)
    const [ stateFront, dispatchFront ] = useReducer(counterReducerFront, defaultStateFront)

    return (
        <RearCounterContexxt.Provider value={{ stateRear, stateFront, dispatchRear, dispatchFront }}>
            {children}
        </RearCounterContexxt.Provider>
    )
}

export function useCounter() {
    const contextRear = useContext(RearCounterContexxt)
    const contextFront = useContext(RearCounterContexxt)

    if (!contextRear) throw new Error('useCounter must be used inside a Counter-Provider')
    if (!contextFront) throw new Error('useCounter must be used inside a Counter-Provider')

    return contextRear, contextFront
}
