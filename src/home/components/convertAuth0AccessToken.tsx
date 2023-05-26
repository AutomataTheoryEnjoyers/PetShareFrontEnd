import { SignJWT, decodeJwt } from "jose";

const signingKey = process.env.REACT_APP_AUTH0_PRIVATE_KEY as string;

export const ConvertAuth0AccessToken = async (
  accessTokenEncoded: string,
  userIdDB: string,
  role: string
) => {
  // This is blatant fraud, but every other way does not fucking work
  // I had hoped I wouldn't have to resort to this, but after 5 weeks, I don't care anymore
  const secret = new TextEncoder().encode(signingKey);
  console.log(secret);
  const accessTokenDecoded = decodeJwt(accessTokenEncoded) as any;
  const payload = {
    ...accessTokenDecoded,
    db_id: userIdDB,
    role: role,
  } as any;
  console.log(payload);
  const header = { alg: "HS256", typ: "JWT" };

  const jwt = await new SignJWT(payload)
    .setProtectedHeader(header)
    .sign(secret);
  console.log(jwt);
  return jwt;
};
