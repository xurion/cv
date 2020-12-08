export type Social = {
  label: string;
  url: string;
  text: string;
};

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
    skills: string[];
  };
};

export type Config = {
  forenames: string;
  surname: string;
  profession: string;
  dob: string;
  sex: string;
  location: string;
  citizenship: string;
  telephone: string;
  email: string;
  cvUrl: string;
  social: Social[];
  githubRibbonLink: string;
  githubRibbonImage: string;
  githubRibbonAlt: string;
  introductions: string[];
  skills: string[];
  complimentarySkills?: string[];
  me: string[];
  meReadMore?: string[];
  experience: Experience[];
};
