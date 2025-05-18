"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions/saveRequest";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const handleChangeEvent = (value: string = "") => {
    setCode(value);
  };

  const saveSnippetCode = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveSnippetCode}
        className="flex items-center justify-between"
      >
        <h1 className="text-xl font-bold">Your Code Editor</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleChangeEvent}
      />
    </div>
  );
};

export default EditSnippetForm;
