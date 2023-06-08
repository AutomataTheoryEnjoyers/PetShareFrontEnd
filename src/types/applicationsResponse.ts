import { Application } from "./application";

export type ApplicationResponse = {
  applications: Application[];
  pageNumber: number;
  count: number;
};
