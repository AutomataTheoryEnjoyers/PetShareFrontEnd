import { User } from "./user";
import { Announcement } from "./announcement";

export type Application = {
  id?: string;
  dateOfApplication: Date;
  isWithdrawed: boolean;
  lastUpdateDate: Date;
  user: User;
  announcement: Announcement;
};
