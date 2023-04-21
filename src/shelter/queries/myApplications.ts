// import { useQuery } from "react-query"
import { Application } from "../../types/application";

export const useMyApplications = () => {
  // const query = useQuery
  const applications = {
    isLoading: false,
    data: [
      {
        id: "1111234",
        dateOfApplication: new Date("2018-03-28T16:41:41.090Z"),
        lastUpdateDate: new Date("2018-03-29T16:41:41.090Z"),
        isWithdrawed: true,
        user: {
          status: 0,
          userName: "Barack Obama",
          phoneNumber: "123456789",
          email: "xXxobaminatorxXx@minecraft.com",
          address: {
            id: "1",
            street: "street",
            city: "city",
            province: "province",
          },
        },
        announcement: {
          id: "1111111",
          title: "title",
          creationDate: new Date("2017-03-29T16:41:41.090Z"),
          status: 0,
          lastUpdateDate: new Date("2018-03-29T16:41:41.090Z"),
          idPet: "1111-111-11111",
          pet: {
            id: "1111-1111-1111",
            name: "fifik1",
            species: "kotowaty",
            breed: "kot",
            birthday: new Date("2018-02-28T16:41:41.090Z"),
            shelterId: "1",
            shelter: {
              id: "1",
              address: {
                id: "1",
                street: "street",
              },
              addressId: "1",
              isAuthorized: true,
            },
          },
        },
      },
      {
        id: "1111235",
        dateOfApplication: new Date("2018-03-28T16:41:41.090Z"),
        lastUpdateDate: new Date("2018-03-29T16:43:41.090Z"),
        isWithdrawed: false,
        user: {
          status: 0,
          userName: "Walter White",
          phoneNumber: "666666666",
          email: "MasterChef@ABQ.net",
          address: {
            id: "2",
            street: "308 Negra Arroyo Lane",
            city: "Albuquerque",
            province: "New Mexice",
            postalCode: "87104",
            country: "United States of America",
          },
        },
        announcement: {
          id: "1111111",
          closingDate: new Date("2018-02-28T16:41:41.090Z"),
          creationDate: new Date("2018-02-28T16:41:41.090Z"),
          lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
          title: "Anouncement1",
          status: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          idPet: "1111-1111-1111",
          pet: {
            id: "1111-1111-1111",
            name: "fifik1",
            species: "kotowaty",
            breed: "kot",
            birthday: new Date("2018-02-28T16:41:41.090Z"),
            shelterId: "1",
            shelter: {
              id: "1",
              address: {
                id: "1",
                street: "street",
              },
              addressId: "1",
              isAuthorized: true,
            },
          },
        },
      },
      {
        id: "1111290",
        dateOfApplication: new Date("2018-03-28T16:41:41.090Z"),
        lastUpdateDate: new Date("2018-03-29T16:43:41.090Z"),
        isWithdrawed: false,
        user: {
          status: 0,
          userName: "Hank Schrader",
          phoneNumber: "287300234",
          email: "Schraderbrau@ABQ.net",
          address: {
            id: "1",
            street: "street",
            city: "city",
            province: "province",
          },
        },
        announcement: {
          id: "1111111",
          closingDate: new Date("2018-02-28T16:41:41.090Z"),
          creationDate: new Date("2018-02-28T16:41:41.090Z"),
          lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
          title: "Anouncement1",
          status: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          idPet: "1111-1111-1111",
          pet: {
            id: "1111-1111-1111",
            name: "fifik1",
            species: "kotowaty",
            breed: "kot",
            birthday: new Date("2018-02-28T16:41:41.090Z"),
            shelterId: "1",
            shelter: {
              id: "1",
              address: {
                id: "1",
                street: "street",
              },
              addressId: "1",
              isAuthorized: true,
            },
          },
        },
      },
      {
        id: "1111236",
        dateOfApplication: new Date("2018-03-28T16:39:41.090Z"),
        lastUpdateDate: new Date("2018-03-29T16:41:41.090Z"),
        isWithdrawed: true,
        user: {
          status: 0,
          userName: "James McGill",
          phoneNumber: "231231321",
          email: "SallGoodMan@ABQ.com",
          address: {
            id: "3",
            street: "street",
            city: "city",
            province: "province",
          },
        },
        announcement: {
          id: "222222",
          closingDate: new Date("2018-02-28T16:41:41.090Z"),
          creationDate: new Date("2018-02-28T16:41:41.090Z"),
          lastUpdateDate: new Date("2018-02-28T16:41:41.090Z"),
          title: "Anouncement1",
          status: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                street: "street",
              },
              addressId: "1",
              isAuthorized: true,
            },
          },
        },
      },
    ] as Application[],
  };
  return applications;
};
