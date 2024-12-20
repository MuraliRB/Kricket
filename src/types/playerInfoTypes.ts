export interface PlayerInfoProps {
  data: PlayerInfoData;
}

export interface PlayerInfoData {
  id: string;
  bat: string;
  bowl: string;
  name: string;
  nickName: string;
  height: string;
  role: string;
  birthPlace: string;
  intlTeam: string;
  teams: string;
  DoB: string;
  image: string;
  bio: string;
  rankings: Rankings;
  appIndex: AppIndex;
  DoBFormat: string;
  faceImageId: string;
}

export interface Rankings {
  bat: Bat[];
  bowl: Bowl[];
  all: All[];
}

export interface Bat {
  testRank: string;
  testBestRank: string;
  odiBestRank: string;
  t20BestRank: string;
}

export interface Bowl {
  testBestRank: string;
  odiBestRank: string;
  t20BestRank: string;
}

export interface All {}

export interface AppIndex {
  seoTitle: string;
  webURL: string;
}
