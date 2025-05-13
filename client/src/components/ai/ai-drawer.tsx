"use client";
import { useAiSection } from "@/hooks/useAiSection";
import { Button } from "@/components/ui/button";

export function AiPromptSection() {
  const { toggleAiSection } = useAiSection();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">AI Assistant</h3>
        <Button variant="ghost" size="sm" onClick={toggleAiSection}>
          Close
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {/* Qui puoi mettere i messaggi */}
      </div>
      <div className="mt-auto border-t p-2">
        <textarea
          placeholder="Type your prompt..."
          className="w-full h-24 rounded-md border p-2 text-sm resize-none"
        />
        <Button className="mt-2 w-full">Send</Button>
      </div>
    </div>
  );
}
