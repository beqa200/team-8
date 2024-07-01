import { useNavigate } from "react-router-dom";
import arrowImg from "/images/Group 4.svg";
import Info from "../components/Info";
import { useState } from "react";

export default function Experience() {
  const navigate = useNavigate();
  const [positionInputValue, setpositionInputValue] = useState("");
  const [employerInputValue, setEmployerInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  const [startDateInputValue, setStartDateInputValue] = useState("");
  const [endDateInputValue, setEndDateInputValue] = useState("");

  const [positionError, setPositionError] = useState("");
  const [employerError, setEmployerError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

  const validatePosition = () => {
    if (positionInputValue.trim().length < 2) {
      setPositionError(true);
      return false;
    } else {
      setPositionError(false);
      return true;
    }
  };

  const validateEmployer = () => {
    if (employerInputValue.trim().length < 2) {
      setEmployerError(true);
      return false;
    } else {
      setEmployerError(false);
      return true;
    }
  };

  const validateStartDate = () => {
    if (startDateInputValue.trim().length == 0) {
      setStartDateError(true);
      return false;
    } else {
      setStartDateError(false);
      return true;
    }
  };

  const validateEndDate = () => {
    if (endDateInputValue.trim().length == 0) {
      setEndDateError(true);
      return false;
    } else {
      setEndDateError(false);
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isPositionValid = validatePosition();
    const isEmployerValid = validateEmployer();
    const isStartDateValid = validateStartDate();
    const isEndDateValid = validateEndDate();

    if (
      isPositionValid &&
      isEmployerValid &&
      isStartDateValid &&
      isEndDateValid
    ) {
      navigate("/education");
    }
  };

  const handleMoreExperience = () => {
    {
      return <h1>Hello</h1>;
    }
  };

  return (
    <div className="flex ">
      <section
        className=" bg-[#F9F9F9]
    pt-[47px] px-[126px]
    "
      >
        <div>
          <header className="relative">
            <div>
              <img
                onClick={() => navigate("/personal")}
                src={arrowImg}
                alt="arrowImg"
                className="absolute ml-[-100px] cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center mb-[12px]">
              <h1 className="text-[24px] font-extrabold font-helvetica-neue">
                გამოცდილება
              </h1>
              <p className="mr-[69px] text-[20px] font-normal font-helvetica-neue">
                2/3
              </p>
            </div>
            <hr className="border-[#1A1A1A]  mr-[70px]"></hr>
          </header>
        </div>
        <main>
          <form onSubmit={handleSubmit}>
            <div>
              <p
                className={`font-medium	 mb-[8px] mt-[69px] mb-[8px] ${
                  positionError ? "text-[#e52f2f]" : ""
                }`}
              >
                თანამდებობა
              </p>
              <input
                onChange={(event) => setpositionInputValue(event.target.value)}
                onBlur={validatePosition}
                className={`h-[48px] w-[766px] outline-none p-4 border rounded mb-[8px] ${
                  positionError
                    ? "border-[#ef5050]"
                    : positionError === ""
                    ? "border-[#BCBCBC]"
                    : "border-[#98e37e]"
                }`}
                type="text"
                placeholder="თანამდებობა"
              />
              <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[23px]">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div>
              <p
                className={`font-medium mb-[8px] ${
                  employerError ? "text-[#e52f2f]" : ""
                }`}
              >
                დამსაქმებელი
              </p>
              <input
                onChange={(event) => setEmployerInputValue(event.target.value)}
                onBlur={validateEmployer}
                type="text"
                className={`h-[48px] w-[766px] outline-none p-4 border rounded mb-[8px] ${
                  employerError
                    ? "border-[#ef5050]"
                    : employerError === ""
                    ? "border-[#BCBCBC]"
                    : "border-[#98e37e]"
                }`}
                placeholder="დამსაქმებელი"
              />
              <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[31px]">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex">
              <div>
                <p
                  className={`font-medium mb-[8px] ${
                    startDateError ? "text-[#e52f2f]" : ""
                  }`}
                >
                  დაწყების რიცხვი
                </p>
                <input
                  onChange={(event) =>
                    setStartDateInputValue(event.target.value)
                  }
                  onBlur={validateStartDate}
                  type="date"
                  className={`h-[48px] w-[339px] outline-none p-4 border rounded mr-[86px] mb-[8px] ${
                    startDateError
                      ? "border-[#ef5050]"
                      : startDateError === ""
                      ? "border-[#BCBCBC]"
                      : "border-[#98e37e]"
                  }`}
                />
              </div>

              <div>
                <p
                  className={`font-medium mb-[8px] ${
                    endDateError ? "text-[#e52f2f]" : ""
                  }`}
                >
                  დამთავრების რიცხვი
                </p>
                <input
                  onChange={(event) => setEndDateInputValue(event.target.value)}
                  onBlur={validateEndDate}
                  type="date"
                  className={`h-[48px] w-[339px] outline-none p-4 border rounded mb-[25px] ${
                    endDateError
                      ? "border-[#ef5050]"
                      : endDateError === ""
                      ? "border-[#BCBCBC]"
                      : "border-[#98e37e]"
                  }`}
                />
              </div>
            </div>
            <div>
              <p className="font-medium mt-[31px] mb-[8px]">აღწერა</p>

              <textarea
                onChange={(event) =>
                  setDescriptionInputValue(event.target.value)
                }
                className={`w-[765px] h-[123px] outline-none p-4 border rounded mb-[50px] ${
                  descriptionInputValue.trim().length !== 0
                    ? "border-[#98e37e]"
                    : "border-[#BCBCBC]"
                }`}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              ></textarea>
            </div>

            <hr className="border-[#C1C1C1]  mr-[82px] mb-[48px]"></hr>
            <button
              onClick={() => handleMoreExperience}
              className="text-base w-[289px] h-[48px]
        bg-[#62A1EB] rounded text-white mb-[115px]"
            >
              მეტი გამოცდილების დამატება
            </button>

            <div className="flex justify-between ">
              <button
                onClick={() => navigate("/personal")}
                className=" w-[151px] h-[48px] rounded bg-[#6B40E3]
        text-white text-base mb-[65px]"
              >
                უკან
              </button>
              <button
                type="submit"
                className="mr-[96px]  w-[151px] h-[48px] rounded bg-[#6B40E3]
        text-white text-base mb-[65px]"
              >
                შემდეგი
              </button>
            </div>
          </form>
        </main>
      </section>
      <Info />
    </div>
  );
}
