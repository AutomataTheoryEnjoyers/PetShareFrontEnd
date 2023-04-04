import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return <>
    <h1> mock navigation </h1>
    <h4> click to go to use module </h4>
    <h3 onClick={() => navigate("/user/announcements")}>USER</h3>
    <h3 onClick={() => navigate("/shelter/my-announcements")}>SHELTER </h3>
  </>;
};
