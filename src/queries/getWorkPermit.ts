// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import { workPermitData } from '../static/staticData';

export async function getWorkPermit(): Promise<WorkPermit> {
  console.log("🚀 ~ getWorkPermit ~ data:", { workPermit: workPermitData });
  return workPermitData;
}