// queries/getSkills.ts
import { Skill } from '../types';
import { skillsData } from '../static/staticData';

export async function getSkills(): Promise<Skill[]> {
  console.log("🚀 ~ getSkills ~ data:", { allSkills: skillsData });
  return skillsData;
}