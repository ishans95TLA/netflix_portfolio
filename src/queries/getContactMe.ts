// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMeData } from '../static/staticData';

export async function getContactMe(): Promise<ContactMe> {
  console.log("🚀 ~ getContactMe ~ data:", { contactMe: contactMeData });
  return contactMeData;
}
