import { useMutation } from "react-query";
import { REPORT_URL } from "../../backendUrl";
import { NewReport } from "../../types/newReport";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostReport = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (report: NewReport) =>
      fetch(REPORT_URL + "reports", {
        method: "POST",
        body: JSON.stringify(report),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (response) => {
        const responseData = await response.json();
        console.log(
          "Report successfully added: " + JSON.stringify(responseData)
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
