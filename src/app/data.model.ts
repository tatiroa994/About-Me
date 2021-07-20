export interface DataProfile {
  aboutme: string;
  skills: Skill[];
  phone: string;
  gitHub: string;
  linkedin: string;
  email: string;
  cv: string;
}

interface Skill {
  skill: string;
  urlImg: string;
}

export interface DataProyects {
  proyect: string;
  skill: string[];
  'repo-link': string;
  'demo-link': string;
  img: string;
}
