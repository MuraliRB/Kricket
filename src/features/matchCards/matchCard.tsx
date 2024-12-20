import FlexLayout from "@/layout/FlexLayout";
import GridColumn from "@/layout/GridColumn";
import { MatchCardProps } from "@/types/matchCardTypes";
import { Card, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function MatchCards({ data }: MatchCardProps) {
  const seriesData = data.typeMatches.map((item) =>
    item.seriesMatches.map((series) => series.seriesAdWrapper)
  );
  const seriesDetails = seriesData.flat().filter(Boolean);
  return (
    <GridColumn columns={4} gap={4} unit={1}>
      {seriesDetails.map((item, idx) => (
        <Card.Root
          size="sm"
          key={idx}
          style={{ border: "1px solid white", margin: "10px" }}
        >
          <Card.Header
            style={{ borderBottom: "1px solid white", padding: "10px" }}
          >
            <Heading size="md">{item?.seriesName}</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <FlexLayout direction="column" gap={4}>
              <FlexLayout
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  textStyle={"lg"}
                >{`${item?.matches[0].matchInfo.team1.teamName}`}</Text>
                <Text
                  textStyle={"lg"}
                >{`${item?.matches[0].matchScore.team1Score.inngs1.runs}/${item?.matches[0].matchScore.team1Score.inngs1.wickets}`}</Text>
              </FlexLayout>
              <FlexLayout
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  textStyle={"lg"}
                >{`${item?.matches[0].matchInfo.team2.teamName}`}</Text>
                <Text textStyle={"lg"}>{`${
                  item?.matches[0].matchScore?.team2Score &&
                  Object.keys(item?.matches[0].matchScore?.team2Score).length >
                    0
                    ? `${item?.matches[0].matchScore?.team2Score?.inngs1?.runs}/${item?.matches[0].matchScore.team2Score.inngs1?.wickets}`
                    : "N/A"
                }`}</Text>
              </FlexLayout>
            </FlexLayout>
          </Card.Body>
          <Card.Footer style={{ justifyContent: "end" }}>
            <Link href={`/scorecard/${item?.matches[0].matchInfo.matchId}`}>
              <div>Scorecard</div>
            </Link>
          </Card.Footer>
        </Card.Root>
      ))}
    </GridColumn>
  );
}
