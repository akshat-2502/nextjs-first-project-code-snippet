import React from "react";
import { prisma } from "@/lib/prisma";

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
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default SnippetDetailPage;
