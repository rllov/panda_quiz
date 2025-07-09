import pandaLogo from "../assets/pandaLogo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-[#f4491e] flex flex-col justify-center items-center">
      <div className="text-center p-6 rounded-lg">
        <img
          src={pandaLogo}
          alt="Panda Logo"
          className="rounded-lg mb-6 w-1/2 sm:w-1/3 md:w-1/4 mx-auto"
        />
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Panda Shift Lead Training!
        </h1>
        <button className="btn btn-primary" onClick={() => navigate("/home")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
