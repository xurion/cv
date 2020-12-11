# Configuration Guide

All CV information is stored in [src/config.json](src/config.json). This document lists the possible combinations of information that can be used as well as the data types for each piece of information.

## Personal Information

| key                   | type                                  | notes                                                                                       |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------- |
| forenames             | string, required                      | One or more of your first names.                                                            |
| surname               | string, required                      | Your surname.                                                                               |
| profession            | string, required                      | How you would describe your profession or expertise.                                        |
| dob                   | string, optional                      | You date of birth.                                                                          |
| gender                | string, optional                      | Your gender.                                                                                |
| location              | string, required                      | Where you are located.                                                                      |
| citizenship           | string, required                      | Your citizenship.                                                                           |
| telephone             | string, optional                      | Your telephone number. A string so you can freely format the number.                        |
| email                 | string, optional                      | Your email address.                                                                         |
| cvUrl                 | string, required                      | The URL where this CV will be located.                                                      |
| social                | [Social](#Social)[], required         | An array of social links, such as LinkedIn.                                                |
| githubRibbon.enabled  | boolean, required                     | Whether the Github ribbon will be displayed.                                                |
| githubRibbon.link     | string, required if enabled           | The URL of this repository on your Github account.                                          |
| githubRibbon.imageSrc | string, required if enabled           | The URL of the Github ribbon image.                                                         |
| githubRibbon.altText  | string, required if enabled           | The `alt` attribute of the ribbon image.                                                    |
| introductions         | string[], required                    | An array of paragraphs that introduce you as a potential employee.                          |
| skills                | string[], required                    | An array of your core skills.                                                               |
| complimentarySkills   | string[], optional                    | Additional non-core skills you bring to the table.                                          |
| me                    | string[], required                    | About you as a person. Can be slightly less formal compared to the `introductions` section. |
| meReadMore            | string[], optional                    | Additional information about you as a person that is hidden by a "Read More" button.        |
| experience            | [Experience](#Experience)[], required | An array of work experience information.                                                    |

## Social

Numerous social links can be defined in the `social` section above with the following structure:

| key   | type             | notes                                                     |
| ----- | ---------------- | --------------------------------------------------------- |
| label | string, required | The label for this social link. For example, "LinkedIn". |
| url   | string, required | Your URL for this social network.                         |
| text  | string, required | The link text for the URL.                                |

## Experience

| key                 | type                        | notes                                                                                                         |
| ------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| jobTitle            | string, required            | The job title you held at this experience. Additional titled can be added to the `otherTitles` section below. |
| otherTitles         | string[], optional          | Any other job titles you had at this experience.                                                              |
| companyName         | string, required            | The name of the company this experience took place.                                                           |
| formerCompanyName   | string, optional            | A former company name if it has changed.                                                                      |
| companyLogo         | string, required            | The name of the image file in the `public/images` directory.                                                  |
| startDate           | string or number, required  | If this is a string, it is displayed as is. If this is a timestamp number, it is displayed as "July 2020".    |
| endDate             | string or number, optional  | Same string/number variability as `startDate`, and displays "Present" if not defined                          |
| about               | string, required            | A description of your role. Additional paragraphs can be added to the `aboutReadMore` section below.          |
| aboutReadMore       | string[], Optional          | Additional paragraphs about your role that is hidden by a "Read More" button.                                 |
| additionalSkillList | [Skill](#Skill)[], optional | An array of skills that is attributed to this work experience.                                                |

### Skill

Additional skill list used in the `additionalSkillList` section above with the following structure:

| key    | type               | notes                                    |
| ------ | ------------------ | ---------------------------------------- |
| title  | string, required   | The title that describes this skill set. |
| skills | string[], required | The array of skills.                     |
