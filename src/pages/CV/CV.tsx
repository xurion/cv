import {
  BlockStrip,
  Br,
  Experience,
  GitHubRibbon,
  List,
  Portrait,
  ReadMore,
  Subtitle,
  TabularDetails,
} from '../../components';
import {
  TabularDetail,
  TabularDetailLink,
} from '../../components/TabularDetails/TabularDetails';
import { Experience as Exp, NestedStringArray, Social } from '../../types';

type Props = {
  citizenship: string;
  complimentarySkills?: string[];
  dob?: string;
  email?: string;
  experience: Exp[];
  forenames: string;
  gender?: string;
  githubUrl?: string;
  introductions: string[];
  location: string;
  me: string[];
  meReadMore?: string[];
  profession: string;
  profileImage: string;
  skills: NestedStringArray;
  social: Social[];
  surname: string;
  telephone?: string;
};

export const CV = (props: Props) => {
  const {
    citizenship,
    complimentarySkills,
    dob,
    email,
    experience,
    forenames,
    gender,
    githubUrl,
    introductions,
    location,
    me,
    meReadMore,
    profession,
    profileImage,
    skills,
    social,
    surname,
    telephone,
  } = props;

  const fullName = `${forenames} ${surname}`;

  return (
    <>
      {githubUrl && <GitHubRibbon url={githubUrl} />}

      <BlockStrip />

      <main className="max-w-[1320px] m-auto p-6 lg:px-6">
        <div className="sm:flex">
          <div className="self-center sm:w-2/3">
            <h1 className="mb-2 text-center text-3xl md:text-5xl lg:text-left">
              {fullName}
            </h1>

            <div className="flex justify-center mb-2 sm:hidden">
              <Portrait alt={fullName} className="w-1/2" src={profileImage} />
            </div>

            <p className="text-center text-xl sm:mb-0 lg:text-left lg:text-2xl">
              {profession}
            </p>
          </div>

          <div className="hidden text-center w-1/3 sm:block lg:text-right">
            <Portrait
              alt={fullName}
              className="inline-block max-w-[160px] w-1/2"
              src={profileImage}
            />
          </div>
        </div>

        <Br />

        <div className="lg:flex lg:gap-6">
          <div className="lg:w-1/2">
            <Subtitle>Introduction</Subtitle>

            {introductions.map((introduction, i) => (
              <p key={i.toString()}>{introduction}</p>
            ))}
            <Br />

            <Subtitle>Skills</Subtitle>
            <List points={skills} />
            <Br />

            {complimentarySkills && (
              <>
                <Subtitle>Complimentary skills</Subtitle>
                <List points={complimentarySkills} />
                <Br />
              </>
            )}

            <Subtitle>Me</Subtitle>
            {me.map((m, i) => (
              <p key={i.toString()}>{m}</p>
            ))}
            {meReadMore && (
              <>
                <ReadMore>
                  {meReadMore.map((m, i) => (
                    <p key={i.toString()}>{m}</p>
                  ))}
                </ReadMore>
                <Br />
              </>
            )}

            <Subtitle>Contact</Subtitle>
            <TabularDetails>
              <TabularDetail label="Surname">{surname}</TabularDetail>
              <TabularDetail
                label={`Forename${forenames.length > 1 ? 's' : ''}`}
              >
                {forenames}
              </TabularDetail>
              {dob && <TabularDetail label="Birth">{dob}</TabularDetail>}
              {gender && <TabularDetail label="Gender">{gender}</TabularDetail>}
              <TabularDetail label="Location">{location}</TabularDetail>
              <TabularDetail label="Citizenship">{citizenship}</TabularDetail>
              {telephone && (
                <TabularDetail label="Telephone">{telephone}</TabularDetail>
              )}
              {email && <TabularDetail label="Email">{email}</TabularDetail>}
            </TabularDetails>

            <Br />

            <Subtitle>Social</Subtitle>
            {social && (
              <TabularDetails>
                {social.map((social, i) => (
                  <TabularDetailLink
                    key={i.toString()}
                    label={social.label}
                    url={social.url}
                  >
                    {social.text}
                  </TabularDetailLink>
                ))}
              </TabularDetails>
            )}

            <Br className="lg:hidden" />
          </div>
          <div className="lg:w-1/2">
            <Subtitle>Experience</Subtitle>
            {experience.map((exp, i) => (
              <div className="mb-6">
                <Experience key={i.toString()} {...exp} />
              </div>
            ))}
          </div>
        </div>

        <Br />
      </main>
    </>
  );
};
