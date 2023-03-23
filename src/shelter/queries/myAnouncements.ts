// import { useQuery } from "react-query"
import { Anouncement } from "../../types/anouncement"

export const useMyAnouncements = () => {
  // const query = useQuery
  const query = {
    isLoading: false,
    data: [
      {
        id: "1111111",
        closingDate: new Date("2018-02-28T16:41:41.090Z"),
        creationDate: new Date("2018-02-28T16:41:41.090Z"),
        lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        title: "Anouncement1",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idPet: "1111-1111-1111",
        pet: {
          id: "1111-1111-1111",
          name: "fifik1",
          birthday: new Date("2018-02-28T16:41:41.090Z"),
          shelterId: "1",
          shelter: {
            id: "1",
            address: {
              id: "1",
              street: "street"
            },
            addressId: "1",
            isAuthorized: true,
          },
        },
      },
      {
        id: "222222",
        closingDate: new Date("2018-02-28T16:41:41.090Z"),
        creationDate: new Date("2018-02-28T16:41:41.090Z"),
        lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
        title: "Anouncement1",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idPet: "1111-1111-1111",
        pet: {
          id: "1111-1111-1111",
          name: "fifik2",
          birthday: new Date("2018-02-28T16:41:41.090Z"),
          shelterId: "1",
          shelter: {
            id: "1",
            address: {
              id: "1",
              street: "street"
            },
            addressId: "1",
            isAuthorized: true,
          },
        },
      }
    ] as Anouncement[]
  }
  return query;
}
