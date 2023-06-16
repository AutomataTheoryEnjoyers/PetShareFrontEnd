import { User } from "./user";
import { Announcement } from "./announcement";

export type Application = {
  id: string;
  creationDate?: Date;
  lastUpdateDate?: Date;
  adopter: User;
  announcementId: string;
  announcement: Announcement;
  applicationStatus: string;
};
