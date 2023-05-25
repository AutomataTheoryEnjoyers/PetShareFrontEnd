const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID_2 as string;
const clientSecret = process.env.REACT_APP_AUTH0_CLIENT_SECRET_2 as string;

const fetchAuth0ManagementAccessToken = async () => {
  const response = await fetch(`https://${domain}/oauth/token`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      audience: `https://${domain}/api/v2/`,
    }),
  });
  const responseDecoded = await response.json();
  console.log(responseDecoded);
  return responseDecoded.access_token;
};

export default fetchAuth0ManagementAccessToken;
