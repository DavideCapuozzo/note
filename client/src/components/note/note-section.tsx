"use client";
import { useAiSection } from "@/hooks/useAiSection"; 
import { Button } from "@/components/ui/button";
import { useNote } from "@/hooks/useNote";


export function NoteSection() {
  const { toggleAiSection } = useAiSection(); 
  const {toggleButtonCreatNote} = useNote()
  
    
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Notes <button onClick={toggleButtonCreatNote}>Close Note</button></h3>
        
        <Button variant="ghost" size="sm" onClick={toggleAiSection}>
          AI
        </Button>
      </div>
      <textarea
        placeholder="Write your notes..."
        className="w-full h-32 rounded-md border p-2 text-sm"
      />
    </div>
  );
}