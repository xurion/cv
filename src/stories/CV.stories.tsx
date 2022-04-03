import { ComponentStory, ComponentMeta } from "@storybook/react";

import CV from "../pages/CV";
import shinraLogo from "./assets/shinra.jpeg";
import seventhHeavenLogo from "./assets/7th-heaven.jpeg";
import cloudStrife from "./assets/cloud-strife.jpg";

export default {
  component: CV,
} as ComponentMeta<typeof CV>;

const Template: ComponentStory<typeof CV> = (args) => <CV {...args} />;

export const Default = Template.bind({});

Default.args = {
  citizenship: "Midgar",
  complimentarySkills: [
    "Chocobo raising",
    "Chocobo jockeying",
    "Snowboarding",
    "Irritating Barret",
  ],
  dob: "11th August 1986",
  email: "cloudstrife@strifedeliveryservice.net",
  experience: [
    {
      about: [
        "Part of a group that attacked and destroyed the Shinra Mako Reactor 1. The mission was purely for money, angering the lead Barret, and leading him to question my loyalties. Despite having a brief mental breakdown at the reactor core, I planted the bomb and the mission was successful.",
        "After the mission, in our hideout, there was a dispute with Barret, who suspected I remained loyal to Shinra and I attempted to walk out. Tifa, another member of the group and childhood friend, reminded me of the promise I made to her after deciding to join SOLDIER, and convinced Barret to hire me for another mission.",
      ],
      companyLogo: seventhHeavenLogo,
      companyName: "7th Heaven",
      jobTitle: "Mercenary",
      startDate: 1191920468000,
      aboutReadMore: [
        "Took part in another mission to attack and destroy Mako Reactor 5, this time with Tifa joining us. Though we reached the core and planted the bomb, President Shinra confronted us after revealing we were caught in a trap. I was separated from the group and fell into the Sector 5 slums church below.",
      ],
    },
    {
      about: [
        "First class SOLDIER. I lost contact with everyone from Nibelheim during this period. I was among those ordered to protect Professor Rayleigh in Midgar from the insurgency organization AVALANCHE (before joining them post Shinra). Though unsuccessful, our lives were saved by a Turk. During the incident I demonstrated impressive sword skills.",
      ],
      companyLogo: shinraLogo,
      companyName: "Shinra Electric Power Company",
      jobTitle: "SOLDIER, First Class",
      startDate: 979030868000,
      endDate: 1191920468000,
      aboutReadMore: [
        "My tenure as a SOLDIER ended when I defeated Sephiroth at Mt. Nibel after he had a psychotic break.",
      ],
      formerCompanyName: "Shinra Manufacturing Works",
      otherTitles: ["SOLDIER Infantryman"],
    },
  ],
  forenames: "Cloud",
  gender: "Male",
  githubRibbonUrl: "https://finalfantasy.fandom.com/wiki/Cloud_Strife",
  introductions: [
    "Former First Class SOLDIER. Currently work as a mercenary for hire in Edge whilst running a delivery business. With my trusty Buster Sword in hand, I always gets the job done, or package delivered.",
    "Responsible for finding a cure to Geostigma. Also the owner of various high level materia, including Knights of the Round.",
  ],
  loc: "Sector 7, Lower Midgar",
  me: [
    "The main protagonist of Final Fantasy VII. Introduced myself to AVALANCHE after SOLDIER, uninterested in anything beyond my hired task at hand.",
    "I wield including the iconic Buster Sword in battle and I am a versatile melee combatant. I have access to some of the most powerful weapons, as well as the strongest Limit abilities. My strength is in my raw damage output and my versatility, being able to switch between the agile Operator Mode and the more offensive Punisher Mode which allows me to counterattack. I posses the best all-around stats.",
  ],
  meReadMore: [
    "My achievements include saving the world from an ancient inter-galactic alien, saving the world from the full impacts of an extinction-level meteor and saving the world from a deadly genetic virus called Geostigma.",
    "I save the world a lot.",
  ],
  profession: "Mercenary & Courier",
  profileImage: cloudStrife,
  skills: [
    "Broadsword mastery",
    "Cool-headed",
    "Materia expert",
    "Sephiroth destroyer",
    "Bodyguarding",
    "Chocobo breeding",
    "Various vehicle experience",
  ],
  social: [
    {
      label: "Fandom Wiki",
      text: "Cloud Strife",
      url: "https://finalfantasy.fandom.com/wiki/Cloud_Strife",
    },
  ],
  surname: "Strife",
  telephone: "09068 555-AVALANCHE",
};
