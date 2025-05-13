import { atom, useAtom } from "jotai";

// Creiamo un atom per lo stato globale
const showAiSectionAtom = atom(false);

export function useAiSection() {
  const [showAiSection, setShowAiSection] = useAtom(showAiSectionAtom);
  
  const toggleAiSection = () => {
    setShowAiSection(prevState => !prevState);
  };
  
  return { showAiSection, toggleAiSection };
}