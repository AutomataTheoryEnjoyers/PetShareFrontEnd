export type Anouncement = {
  ID?: number,
  Title: string,
  Description: string,
  CreationDate: Date,
  ClosingDate: Date,
  Status: 'Open' | 'Closed' | 'In verification' | 'Deleted',
  LastUpdateDate: Date,
  IDPet: number
}
