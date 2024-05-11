import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
};
export default About;
