
import { common as koCommon } from './ko/common';
import { home as koHome } from './ko/home';
import { curriculum as koCurriculum } from './ko/curriculum';
import { contact as koContact } from './ko/contact';
import { projects as koProjects } from './ko/projects';
import { about as koAbout } from './ko/about';
import { common as enCommon } from './en/common';
import { home as enHome } from './en/home';
import { curriculum as enCurriculum } from './en/curriculum';
import { contact as enContact } from './en/contact';
import { projects as enProjects } from './en/projects';
import { about as enAbout } from './en/about';

const resources = {
  ko: {
    common: koCommon,
    home: koHome,
    curriculum: koCurriculum,
    contact: koContact,
    projects: koProjects,
    about: koAbout,
  },
  en: {
    common: enCommon,
    home: enHome,
    curriculum: enCurriculum,
    contact: enContact,
    projects: enProjects,
    about: enAbout,
  },
};

export default resources;
