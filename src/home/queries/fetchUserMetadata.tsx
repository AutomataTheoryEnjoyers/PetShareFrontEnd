const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;

const fetchUserMetadata = async (userIdAuth0: string, accessToken: string) => {
  const response = await fetch(
    `https://${domain}/api/v2/users/${userIdAuth0}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const responseDecoded = await response.json();
  return responseDecoded.app_metadata;
};

export default fetchUserMetadata;
