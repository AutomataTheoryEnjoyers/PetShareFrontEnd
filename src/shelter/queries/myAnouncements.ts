// import { useQuery } from "react-query"
import { Anouncement } from "../../types/anouncement"

export const useMyAnouncements = () => {
  // const query = useQuery
  const query = {
    isLoading: false,
    data: [
      {
        ID: "1111111",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement1",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "2222222",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement2",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "33333333",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement3",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "444444444",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement4",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "55555555",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement5",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "6666666",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement6",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "7777777",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement7",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "88888888",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement8",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "9999999",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement9",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        ID: "101010",
        ClosingDate: new Date("2018-02-28T16:41:41.090Z"),
        CreationDate: new Date("2018-02-28T16:41:41.090Z"),
        LastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        Title: "Anouncement10",
        Status: "Open",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ] as Anouncement[]
  }
  return query;
}
