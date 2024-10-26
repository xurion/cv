export type Social = {
  label: string;
  url: string;
  text: string;
};

type StringOrStringArray = string | string[];
export type NestedStringArray = StringOrStringArray[];

export type Experience = {
  about: string[];
  aboutReadMore?: string[];
  additionalSkillList?: {
    title: string;
    skills: NestedStringArray;
  };
  companyLogo: string;
  companyName: string;
  endDate?: string | number;
  formerCompanyName?: string;
  jobTitle: string;
  otherTitles?: string[];
  startDate: string | number;
};

export type Config = {
  citizenship: string;
  complimentarySkills?: string[];
  dob?: string;
  email?: string;
  experience: Experience[];
  forenames: string;
  gender?: string;
  githubRibbonUrl?: string;
  introductions: string[];
  location: string;
  me: string[];
  meReadMore?: string[];
  profession: string;
  skills: string[];
  social: Social[];
  surname: string;
  telephone?: string;
};
