import { useNavigate } from "react-router-dom";
import redBerryIcon from "/images/LOGO-02 3.png";
import backgroundLogo from "/images/LOGO-40 1.png";
import backGroundImg from "/images/shutterstock_2189773743 1.png";
useNavigate;

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${backGroundImg})` }}
      >
        <header className="pt-[25px] ml-[70px] ">
          <img
            src={redBerryIcon}
            alt="redBerryIcon b"
            className="mb-[26px]"
          />
        </header>
        <hr className="border-[#1A1A1A] ml-[70px] mr-[70px]"></hr>
        <main>
          <div className="flex items-center justify-center h-[100vh] relative">
            <div>
              <img
                src={backgroundLogo}
                alt="backgroundLogoImg"
                className="absolute left-[56%] top-[47%] z-[-1]"
              />
              <div>
                <button
                  onClick={() => navigate("/personal")}
                  className="bg-black text-white w-[464px] p-[18px_60px] rounded-lg text-xl"
                >
                  რეზიუმეს დამატება
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
