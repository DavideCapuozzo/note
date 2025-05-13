import { atom, useAtom } from "jotai";

// creo un atom per lo state globale
const stateGlobalCreateNote = atom(false)

export function useNote(){
    const [ ButtonCreateNote, setButtonCreateNote ] = useAtom(stateGlobalCreateNote)

    const toggleButtonCreatNote = () => {
        setButtonCreateNote(prevState => !prevState);
    }

    return{ButtonCreateNote, toggleButtonCreatNote}

}