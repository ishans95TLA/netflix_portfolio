// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { timelineData } from '../static/staticData';

export async function getTimeline(): Promise<TimelineItem[]> {
  console.log("🚀 ~ getTimeline ~ data:", { allTimelines: timelineData });
  return timelineData;
}
