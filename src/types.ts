export type Social = {
  label: string;
  url: string;
  text: string;
};

type StringOrStringArray = string | string[];
export type NestedStringArray = StringOrStringArray[];

export type Experience = {
  jobTitle: string;
  otherTitles?: string[];
  companyName: string;
  formerCompanyName?: string;
  companyLogo: string;
  startDate: string | number;
  endDate?: string | number;
  about: string[];
  aboutReadMore?: string[];
  additionalSkillList?: {
    title: string;
    skills: NestedStringArray;
  };
};

type GithubRibbonUsed = {
  enabled: true;
  link: string;
  imageSrc: string;
  imageAlt: string;
};

type GithubRibbonNotUsed = {
  enabled: false;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type Config = {
  forenames: string;
  surname: string;
  profession: string;
  dob?: string;
  gender?: string;
  location: string;
  citizenship: string;
  telephone?: string;
  email?: string;
  cvUrl: string;
  social: Social[];
  githubRibbon: GithubRibbonUsed | GithubRibbonNotUsed;
  introductions: string[];
  skills: string[];
  complimentarySkills?: string[];
  me: string[];
  meReadMore?: string[];
  experience: Experience[];
};
