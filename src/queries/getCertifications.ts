// queries/getCertifications.ts
import { Certification } from '../types';
import { certificationsData } from '../static/staticData';

export async function getCertifications(): Promise<Certification[]> {
  console.log("🚀 ~ getCertifications ~ data:", { allCertifications: certificationsData });
  return certificationsData;
}
