"use client";

import { Separator } from "@/components/ui/separator";
import { BlockquoteToolbar } from "@/components/toolbars/blockquote";
import { BoldToolbar } from "@/components/toolbars/bold";
import { BulletListToolbar } from "@/components/toolbars/bullet-list";
import { CodeToolbar } from "@/components/toolbars/code";
import { CodeBlockToolbar } from "@/components/toolbars/code-block";
import { HardBreakToolbar } from "@/components/toolbars/hard-break";
import { HorizontalRuleToolbar } from "@/components/toolbars/horizontal-rule";
import { ItalicToolbar } from "@/components/toolbars/italic";
import { OrderedListToolbar } from "@/components/toolbars/ordered-list";
import { RedoToolbar } from "@/components/toolbars/redo";
import { StrikeThroughToolbar } from "@/components/toolbars/strikethrough";
import { ToolbarProvider } from "@/components/toolbars/toolbar-provider";
import { UndoToolbar } from "@/components/toolbars/undo";
import {
  Editor,
  EditorContent,
  type Extension,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef } from "react";

export const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-accent rounded-md p-1",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "my-2",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: "tiptap-heading",
      },
    },
  }),
] as const;

type BlogEditorProps = {
  editor: Editor | null;
};

export function BlogEditor({ editor }: BlogEditorProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border w-full relative rounded-md overflow-hidden pb-3">
      <div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background z-20">
        <ToolbarProvider editor={editor}>
          <div className="flex items-center gap-2">
            <UndoToolbar />
            <RedoToolbar />
            <Separator orientation="vertical" className="h-7" />
            <BoldToolbar />
            <ItalicToolbar />
            <StrikeThroughToolbar />
            <BulletListToolbar />
            <OrderedListToolbar />
            <CodeToolbar />
            <CodeBlockToolbar />
            <HorizontalRuleToolbar />
            <BlockquoteToolbar />
            <HardBreakToolbar />
          </div>
        </ToolbarProvider>
      </div>
      <div
        onClick={() => {
          editor?.chain().focus().run();
        }}
        className="cursor-text min-h-[18rem] bg-background"
      >
        <EditorContent className="outline-none" editor={editor} />
      </div>
    </div>
  );
}
