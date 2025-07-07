// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import { profileBannerData } from '../static/staticData';

export async function getProfileBanner(): Promise<ProfileBanner> {
  console.log("🚀 ~ getProfileBanner ~ data:", { profilebanner: profileBannerData });
  return profileBannerData;
}