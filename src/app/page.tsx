import MatchCards from "@/features/matchCards/matchCard";
import { matchList } from "@/utils/sampleMatchList";

export default async function Home() {
  const data = await matchList();
  return <MatchCards data={data} />;
}
