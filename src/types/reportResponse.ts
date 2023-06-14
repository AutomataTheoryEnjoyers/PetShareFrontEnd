import { Report } from "./report";

export type ReportResponse = {
    reports: Report[];
    pageNumber: number;
    count: number;
};
