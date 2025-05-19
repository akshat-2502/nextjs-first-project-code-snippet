import React from "react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as actions from "@/actions/saveRequest";

type PropDetails = {
  params: { id: string };
};

// 2. Async React component using the correct type
const SnippetDetailPage = async ({ params }: PropDetails) => {
  // 3. Convert the id from string to number
  const id = parseInt(params.id);

  // 4. Fetch the snippet from the database using Prisma
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet?.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
