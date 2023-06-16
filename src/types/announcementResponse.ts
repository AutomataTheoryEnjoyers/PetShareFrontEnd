import { Announcement } from "./announcement";

export type AnnouncementResponse = {
  announcements: Announcement[];
  pageNumber: number;
  count: number;
};
