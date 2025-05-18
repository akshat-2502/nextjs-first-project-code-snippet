import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import React from "react";

type propDetails = {
  params: { id: string };
};

const EditCodeSnippet = async ({ params }: propDetails) => {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditCodeSnippet;
