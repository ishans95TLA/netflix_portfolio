// queries/getProjects.ts
import { Project } from '../types';
import { projectsData } from '../static/staticData';

export async function getProjects(): Promise<Project[]> {
  console.log("🚀 ~ getProjects ~ data:", { allProjects: projectsData });
  return projectsData;
}
