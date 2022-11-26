import { createContext, ReactNode, useReducer, useState } from "react";
import { ActionTypes, addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleFinishedAtion } from "../reducers/cycles/actions";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}


interface CyclesCotsntextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;    
}

export const CyclesContext = createContext({} as CyclesCotsntextType)

interface CyclesContextProviderProps {
    children: ReactNode;
}

export function CyclesContexProvider({ 
    children 
}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
            cycles: [],
            activeCycleId: null,
        },
    )

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { cycles, activeCycleId } = cyclesState;
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleFinishedAtion())
    }

    function createNewCycle(data: CreateCycleData) {
        const id =String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minuteAmount: data.minutesAmount,
            starDate: new Date(),
        }

        dispatch(addNewCycleAction(newCycle))
        
        setAmountSecondsPassed(0)      
    }

    function interruptCurrentCycle() { 
        dispatch(interruptCurrentCycleAction()) 
    }

    return (
        <CyclesContext.Provider 
          value={{
            cycles, 
            activeCycle, 
            activeCycleId, 
            markCurrentCycleAsFinished, 
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle,
          }}
        >
            {children}
        </CyclesContext.Provider>
    )
}