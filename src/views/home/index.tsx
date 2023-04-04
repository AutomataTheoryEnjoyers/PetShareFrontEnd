import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  return <>
    <h1> mock navigation </h1>
    <h4> click to go to use module </h4>
    <Link to="user">USER</Link>
    <br />
    <Link to="shelter">SHELTER</Link>
  </>;
};
