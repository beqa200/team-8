import { useNavigate } from "react-router-dom";
import arrowImg from "/images/Group 4.svg";
import Info from "../components/Info";
import { useState } from "react";

export default function Experience() {
  const navigate = useNavigate();

  const [schoolInputValue, setSchoolInputValue] = useState("");
  const [degreeInputValue, setDegreeInputValue] = useState("");
  const [endDateInputValue, setEndDataInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const [schoolError, setSchoolError] = useState("");
  const [degreeError, setDegreeError] = useState("");
  const [endDateError, setEndDateError] = useState("");

  const validateSchool = () => {
    if (schoolInputValue.trim().length < 2) {
      setSchoolError(true);
      return false;
    } else {
      setSchoolError(false);
      return true;
    }
  };

  const validateDegree = () => {
    if (degreeInputValue == "") {
      setDegreeError(true);
      return false;
    } else {
      setDegreeError(false);
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

    const isSchoolValid = validateSchool();
    const isDegreeValid = validateDegree();
    const isEndDateValid = validateEndDate();

    if (isSchoolValid && isDegreeValid && isEndDateValid) {
      navigate("/resume");
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
                onClick={() => navigate("/experience")}
                src={arrowImg}
                alt="arrowImg"
                className="absolute ml-[-100px] cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center mb-[12px]">
              <h1 className="text-[24px] font-extrabold font-helvetica-neue">
                განათლება
              </h1>
              <p className="mr-[69px] text-[20px] font-normal font-helvetica-neue">
                3/3
              </p>
            </div>
            <hr className="border-[#1A1A1A]  mr-[70px]"></hr>
          </header>
        </div>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="mb-[31px]">
              <p
                className={`font-medium	 mb-[8px] mt-[69px] mb-[8px] ${
                  schoolError ? "text-[#e52f2f]" : ""
                }`}
              >
                სასწავლებელი
              </p>
              <input
                onChange={(event) => setSchoolInputValue(event.target.value)}
                onBlur={validateSchool}
                className={`h-[48px] w-[766px] outline-none p-4 border rounded mb-[8px] ${
                  schoolError
                    ? "border-[#ef5050]"
                    : schoolError === ""
                    ? "border-[#BCBCBC]"
                    : "border-[#98e37e]"
                }`}
                type="text"
                placeholder="სასწავლებელი"
              />
              <p className="text-customGray font-helvetica-neue font-light text-base leading-base">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex">
              <div>
                <p
                  className={`font-medium mb-[8px] ${
                    degreeError ? "text-[#e52f2f]" : ""
                  }`}
                >
                  ხარისხი
                </p>
                <select
                  onChange={(event) => setDegreeInputValue(event.target.value)}
                  onBlur={validateDegree}
                  placeholder="აირჩიეთ ხარისხი"
                  className={`h-[48px] w-[339px] outline-none p-2 border rounded mr-[86px] mb-[8px] ${
                    degreeError
                      ? "border-[#ef5050]"
                      : degreeError === ""
                      ? "border-[#BCBCBC]"
                      : "border-[#98e37e]"
                  }`}
                >
                  <option value="">აირჩიეთ ხარისხი</option>
                  <option>საშუალო სკოლის დიპლომი</option>
                  <option>ზოგადსაგანმანათლებლო დიპლომი</option>
                  <option>ბაკალავრი</option>
                  <option>მაგისტრი</option>
                  <option>დოქტორი</option>
                  <option>ასოცირებული ხარისხი</option>
                  <option>სტუდენტი</option>
                  <option>კოლეჯი (ხარისხის გარეშე)</option>
                  <option>სხვა</option>
                </select>
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
                  onChange={(event) => setEndDataInputValue(event.target.value)}
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
                placeholder="განათლების აღწერა"
              ></textarea>
            </div>
            <hr className="border-[#C1C1C1]  mr-[82px] mb-[48px]"></hr>
            <button
              className="text-base w-[289px] h-[48px]
        bg-[#62A1EB] rounded text-white mb-[115px]"
            >
              მეტი გამოცდილების დამატება
            </button>

            <div className="flex justify-between ">
              <button
                onClick={() => navigate("/experience")}
                className=" w-[151px] h-[48px] rounded bg-[#6B40E3]
        text-white text-base mb-[65px]"
              >
                უკან
              </button>
              <button
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
