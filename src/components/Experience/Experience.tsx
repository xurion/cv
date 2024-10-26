import { useMemo } from 'react';
import { format } from 'date-fns';

import { Experience as Exp } from '../../types';
import { ReadMore } from '../ReadMore';
import { TitledList } from '../TitledList';

export const Experience = (props: Exp) => {
  const {
    companyLogo,
    companyName,
    formerCompanyName,
    startDate,
    endDate,
    jobTitle,
    otherTitles,
    about,
    aboutReadMore = [],
    additionalSkillList,
  } = props;

  const additionalSkills = useMemo(
    () =>
      additionalSkillList ? (
        <TitledList
          points={additionalSkillList.skills}
          title={additionalSkillList.title}
        />
      ) : null,
    [additionalSkillList]
  );

  return (
    <>
      <h3 className="font-medium text-center text-xl">{jobTitle}</h3>

      <div className="flex justify-center py-1">
        <img
          alt={companyName}
          className="border-primary border-[1px] p-1 w-1/2"
          src={`${companyLogo}`}
          title={companyName}
        />
      </div>

      {formerCompanyName && (
        <div className="text-center text-sm">Formerly {formerCompanyName}</div>
      )}

      <p className="text-center text-sm">
        {typeof startDate === 'number' ? (
          <>{format(startDate, 'MMM yyyy')}</>
        ) : (
          startDate
        )}{' '}
        -{' '}
        {endDate ? (
          typeof endDate === 'number' ? (
            <>{format(endDate, 'MMM yyyy')}</>
          ) : (
            endDate
          )
        ) : (
          'Present'
        )}
      </p>

      {otherTitles && (
        <p className="text-sm">
          <b>Other titles:</b> {otherTitles.join(', ')}
        </p>
      )}

      {about.map((about, i) => (
        <p key={i.toString()}>{about}</p>
      ))}

      {aboutReadMore.length > 0 ? (
        <ReadMore>
          {aboutReadMore.map((about, i) => (
            <p key={i.toString()}>{about}</p>
          ))}
          {additionalSkills}
        </ReadMore>
      ) : (
        additionalSkills && <ReadMore>{additionalSkills}</ReadMore>
      )}
    </>
  );
};
