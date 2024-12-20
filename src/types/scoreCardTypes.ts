export interface Root {
  scoreCard: ScoreCard[];
  matchHeader: MatchHeader;
  isMatchComplete: boolean;
  status: string;
  videos: unknown[];
  responseLastUpdated: number;
}

export interface ScoreCard {
  matchId: number;
  inningsId: number;
  timeScore: number;
  batTeamDetails: BatTeamDetails;
  bowlTeamDetails: BowlTeamDetails;
  scoreDetails: ScoreDetails;
  extrasData: ExtrasData;
  ppData: PpData;
  wicketsData: Wicket[];
  partnershipsData: PartnershipsData;
}

export interface BatTeamDetails {
  batTeamId: number;
  batTeamName: string;
  batTeamShortName: string;
  batsmenData: Batsman[];
}

export interface Batsman {
  batId: number;
  batName: string;
  batShortName: string;
  isCaptain: boolean;
  isKeeper: boolean;
  runs: number;
  balls: number;
  dots: number;
  fours: number;
  sixes: number;
  mins: number;
  strikeRate: number;
  outDesc: string;
  bowlerId: number;
  fielderIds: number[]; // Array for multiple fielders
  ones: number;
  twos: number;
  threes: number;
  fives: number;
  boundaries: number;
  sixers: number;
  wicketCode: string;
  isOverseas: boolean;
  inMatchChange: string;
  playingXIChange: string;
}

export interface BowlTeamDetails {
  bowlTeamId: number;
  bowlTeamName: string;
  bowlTeamShortName: string;
  bowlersData: Bowler[];
}

export interface Bowler {
  bowlerId: number;
  bowlName: string;
  bowlShortName: string;
  isCaptain: boolean;
  isKeeper: boolean;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  noBalls: number;
  wides: number;
  dots: number;
  balls: number;
  runsPerBall: number;
  isOverseas: boolean;
  inMatchChange: string;
  playingXIChange: string;
}

export interface ScoreDetails {
  ballNbr: number;
  isDeclared: boolean;
  isFollowOn: boolean;
  overs: number;
  revisedOvers: number;
  runRate: number;
  runs: number;
  wickets: number;
  runsPerBall: number;
}

export interface ExtrasData {
  noBalls: number;
  total: number;
  byes: number;
  penalty: number;
  wides: number;
  legByes: number;
}

export interface Wicket {
  batId: number;
  batName: string;
  wktNbr: number;
  wktOver: number;
  wktRuns: number;
  ballNbr: number;
}

export interface PartnershipsData {}
export interface PpData {}
export interface MatchHeader {}
