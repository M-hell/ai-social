"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = ({ value }: { value: string }) => {
  const editor = useEditor({
    extensions: [StarterKit], // ✅ Correct extension usage
    content: value, // ✅ Initial value
  });

  // ✅ Sync editor content when `value` changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="h-[350px] bg-white p-4 border border-gray-300 rounded-md">
      <EditorContent editor={editor} className="whitespace-pre-wrap" />
    </div>
  );
};
