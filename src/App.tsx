import "./App.scss";
import { CV } from "./pages/CV";
import getConfig from "./Config";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const {
  citizenship,
  complimentarySkills,
  dob,
  email,
  experience: exp,
  forenames,
  gender,
  githubRibbonUrl,
  introductions,
  location,
  me,
  meReadMore,
  profession,
  skills,
  social,
  surname,
  telephone,
} = getConfig();

// Convert the filename to a path to the public images directory
const experience = exp.map(({ companyLogo, ...rest }) => ({
  companyLogo: `${process.env.PUBLIC_URL}/images/${companyLogo}`,
  ...rest,
}));

export const App = () => (
  <ThemeProvider theme={theme}>
    <CV
      citizenship={citizenship}
      complimentarySkills={complimentarySkills}
      dob={dob}
      email={email}
      experience={experience}
      forenames={forenames}
      gender={gender}
      githubRibbonUrl={githubRibbonUrl}
      introductions={introductions}
      loc={location}
      me={me}
      meReadMore={meReadMore}
      profession={profession}
      profileImage={`${process.env.PUBLIC_URL}/images/me.png`}
      skills={skills}
      social={social}
      surname={surname}
      telephone={telephone}
    />
  </ThemeProvider>
);
