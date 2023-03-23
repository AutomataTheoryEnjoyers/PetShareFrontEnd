export type Anouncement = {
  ID: string,
  Title: string,
  Description: string,
  CreationDate: Date,
  ClosingDate: Date,
  Status: 'Open' | 'Closed' | 'In verification' | 'Deleted',
  LastUpdateDate: Date,
  IDPet: string
}
