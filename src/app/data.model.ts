export interface DataProfile {
  'about me': string;
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
export interface DataProjects {
  project: string;
  skill: string[];
  'repo-link': string;
  'demo-link': string;
  img: string;
}
