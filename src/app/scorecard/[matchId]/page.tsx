import React from "react";

export default async function Scorecard({
  params,
}: {
  params: Promise<{ matchId: string }>;
}) {
  const matchId = (await params).matchId;
  console.log(matchId);

  return <div>Scorecard</div>;
}
