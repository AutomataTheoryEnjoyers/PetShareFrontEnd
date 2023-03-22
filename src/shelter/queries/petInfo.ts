import { Pet } from "../../types/pet"

export const usePetInfo = (ID: number) => {
  const query = {
    isLoading: false,
    data: {
      ID: 1,
      Birthday: new Date("2018-02-28T16:41:41.090Z"),
      Breed: "Best breed",
      Description: "Description",
      Name: "Fifik",
      Photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images",
      Species: "jamniczek"
    } as Pet
  }
  return query;
}
