import { AppSidebar } from "@/components/sidebar_components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NoteSection } from "@/components/note/note-section"
import { useAiSection } from "@/hooks/useAiSection"
import NoteDefault from "@/components/note/default-note"
import { AiPromptSection } from "@/components/ai/ai-drawer"
import { useNote } from "@/hooks/useNote"

function Page() {
  const { showAiSection } = useAiSection()
  const {ButtonCreateNote} = useNote()
  /* console.log('showAiSection in page', showAiSection) */

  
  return (
    <SidebarProvider>
      <div className="flex flex-row w-screen h-screen">
        {/* Sidebar a sinistra */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex flex-row w-full">
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
            </header>

            <div className="flex flex-1 flex-row gap-4 p-4 pt-0">
              {/* Note Section */}
              <div className={`flex flex-col flex-1 ${showAiSection ? "w-1/2" : "w-full"} transition-all`}>
                {
                  ButtonCreateNote ? <NoteSection /> : <NoteDefault /> 
                }

              </div>

              {/* AI Prompt Section */}

              <div className={`flex flex-col flex-1 ${showAiSection ? "w-1/2" : "hidden"} transition-all`}>
                <AiPromptSection />
              </div> 

            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Page
