export type Anouncement = {
  ID?: number,
  Title: string,
  Description: string,
  CreationDate: Date,
  ClosingDate: Date,
  Status: 'Open' | 'Closed' | 'In veryfication' | 'Deleted',
  LastUpdateDate: Date,
  IDPet: number
}
