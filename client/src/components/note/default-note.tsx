import { useNote } from "@/hooks/useNote"

function NoteDefault() {

    const {toggleButtonCreatNote} = useNote()

    return (
      <div className="flex items-center text-center flex-col justify-center h-screen space-y-3">
        <h2 className="text-2xl">No file is open</h2>
        <button onClick={toggleButtonCreatNote}>Create new note</button>
        <button>Search note</button>
      </div>
    )
  }
  
  export default NoteDefault
  