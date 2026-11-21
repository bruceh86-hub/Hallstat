import team from "../../content/team.json";

export type TeamMember = {
  name: string;
  credentials: string;
  title: string;
  group: "Leadership" | "Medical Advisory Board";
  bio: string;
  photo: string;
  linkedin: string;
  profile?: string;
};

export const members = team as TeamMember[];
export const groups = ["Leadership", "Medical Advisory Board"] as const;

/** Empty values are treated as missing and not rendered. */
export const filled = (v?: string) => (v?.trim() ? v : "");
