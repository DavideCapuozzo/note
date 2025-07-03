import { EmptyState } from '../dashboard/emptyState'
import { NoteEditor } from '../dashboard/noteEditor'

function PageDashboard() {

    const state = 1;

    return(
        <>
            <div>
                {
                    state == null
                        ? <EmptyState />
                        : <NoteEditor />
                }
            </div>
            
        </>
    )
}

export default PageDashboard