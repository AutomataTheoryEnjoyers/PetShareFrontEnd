import { mockApplications } from "../../mocks/mockData"

export const useMyApplications = () => {
  return { isLoading: false, data: mockApplications };
}
