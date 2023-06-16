import { useMutation } from "react-query";
import { REPORT_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { UpdateReport } from "../../types/updateReport";

export const usePutReport = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (updateReport: UpdateReport) => {
      const { id, ...reportData } = updateReport;
      return fetch(REPORT_URL + "reports/" + id, {
        method: "PUT",
        body: JSON.stringify(reportData),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: async () => {
        console.log("Report successfully updated");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
