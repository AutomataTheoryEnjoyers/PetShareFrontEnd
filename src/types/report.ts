export type Report = {
    id: string;
    reason: string;
    shelterId?: string | null;
    announcementId?: string | null;
    adopterId?: string | null;
};