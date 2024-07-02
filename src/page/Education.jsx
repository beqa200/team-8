import { useNavigate } from "react-router-dom";
import arrowImg from "/images/Group 4.svg";
import Info from "../components/Info";
import { useState } from "react";

export default function Education({
  nameValue,
  lastNameValue,
  nameDescriptionInputValue,
  emailInputValue,
  mobileInputValue,
  image,
  positionInputValue,
  employerInputValue,
  experienceDescriptionInputValue,
  startDateInputValue,
  endDateInputValue,
  schoolInputValue,
  degreeInputValue,
  educationEndDateInputValue,
  educationDescriptionInputValue,
  setSchoolInputValue,
  setDegreeInputValue,
  setEducationEndDataInputValue,
  setEducationDescriptionInputValue,
  educationAdditional,
  setEducationAdditional,
  positionInputValue2,
  employerInputValue2,
  experienceDescriptionInputValue2,
  startDateInputValue2,
  endDateInputValue2,
  schoolInputValue2,
  degreeInputValue2,
  educationEndDateInputValue2,
  educationDescriptionInputValue2,
  setSchoolInputValue2,
  setDegreeInputValue2,
  setEducationEndDataInputValue2,
  setEducationDescriptionInputValue2,
}) {
  const navigate = useNavigate();

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
    if (educationEndDateInputValue.trim().length == 0) {
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
            <div>
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
                  value={schoolInputValue}
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
                    onChange={(event) =>
                      setDegreeInputValue(event.target.value)
                    }
                    onBlur={validateDegree}
                    placeholder="აირჩიეთ ხარისხი"
                    className={`h-[48px] w-[339px] outline-none p-2 border rounded mr-[86px] mb-[8px] ${
                      degreeError
                        ? "border-[#ef5050]"
                        : degreeError === ""
                        ? "border-[#BCBCBC]"
                        : "border-[#98e37e]"
                    }`}
                    value={degreeInputValue}
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
                    onChange={(event) =>
                      setEducationEndDataInputValue(event.target.value)
                    }
                    onBlur={validateEndDate}
                    type="date"
                    className={`h-[48px] w-[339px] outline-none p-4 border rounded mb-[25px] ${
                      endDateError
                        ? "border-[#ef5050]"
                        : endDateError === ""
                        ? "border-[#BCBCBC]"
                        : "border-[#98e37e]"
                    }`}
                    value={educationEndDateInputValue}
                  />
                </div>
              </div>
              <div>
                <p className="font-medium mt-[31px] mb-[8px]">აღწერა</p>
                <textarea
                  onChange={(event) =>
                    setEducationDescriptionInputValue(event.target.value)
                  }
                  className={`w-[765px] h-[123px] outline-none p-4 border rounded mb-[50px] ${
                    educationDescriptionInputValue.trim().length !== 0
                      ? "border-[#98e37e]"
                      : "border-[#BCBCBC]"
                  }`}
                  placeholder="განათლების აღწერა"
                  value={educationDescriptionInputValue}
                ></textarea>
              </div>
              <hr className="border-[#C1C1C1]  mr-[82px] mb-[48px]"></hr>
            </div>

            <div className={`${educationAdditional ? "block" : "hidden"}`}>
              <div className="mb-[31px]">
                <p className={`font-medium	 mb-[8px] mt-[69px] mb-[8px]`}>
                  სასწავლებელი
                </p>
                <input
                  onChange={(event) => setSchoolInputValue2(event.target.value)}
                  className={`h-[48px] w-[766px] outline-none p-4 border rounded mb-[8px]`}
                  type="text"
                  placeholder="სასწავლებელი"
                  value={schoolInputValue2}
                />
                <p className="text-customGray font-helvetica-neue font-light text-base leading-base">
                  მინიმუმ 2 სიმბოლო
                </p>
              </div>
              <div className="flex">
                <div>
                  <p className={`font-medium mb-[8px]`}>ხარისხი</p>
                  <select
                    onChange={(event) =>
                      setDegreeInputValue2(event.target.value)
                    }
                    placeholder="აირჩიეთ ხარისხი"
                    className={`h-[48px] w-[339px] outline-none p-2 border rounded mr-[86px] mb-[8px]`}
                    value={degreeInputValue2}
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
                  <p className={`font-medium mb-[8px]`}>დამთავრების რიცხვი</p>
                  <input
                    onChange={(event) =>
                      setEducationEndDataInputValue2(event.target.value)
                    }
                    type="date"
                    className={`h-[48px] w-[339px] outline-none p-4 border rounded mb-[25px]`}
                    value={educationEndDateInputValue2}
                  />
                </div>
              </div>
              <div>
                <p className="font-medium mt-[31px] mb-[8px]">აღწერა</p>
                <textarea
                  onChange={(event) =>
                    setEducationDescriptionInputValue2(event.target.value)
                  }
                  className={`w-[765px] h-[123px] outline-none p-4 border rounded mb-[50px]`}
                  placeholder="განათლების აღწერა"
                  value={educationDescriptionInputValue2}
                ></textarea>
              </div>
              <hr className="border-[#C1C1C1]  mr-[82px] mb-[48px]"></hr>
            </div>

            <button
              onClick={() => setEducationAdditional(true)}
              type="button"
              className={`text-base w-[289px] h-[48px]
        bg-[#62A1EB] rounded text-white mb-[115px] ${
          educationAdditional ? "hidden" : "block"
        }`}
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
      <Info
        nameValue={nameValue}
        lastNameValue={lastNameValue}
        emailInputValue={emailInputValue}
        mobileInputValue={mobileInputValue}
        nameDescriptionInputValue={nameDescriptionInputValue}
        image={image}
        positionInputValue={positionInputValue}
        employerInputValue={employerInputValue}
        experienceDescriptionInputValue={experienceDescriptionInputValue}
        startDateInputValue={startDateInputValue}
        endDateInputValue={endDateInputValue}
        schoolInputValue={schoolInputValue}
        degreeInputValue={degreeInputValue}
        educationEndDateInputValue={educationEndDateInputValue}
        educationDescriptionInputValue={educationDescriptionInputValue}
        educationAdditional={educationAdditional}
        positionInputValue2={positionInputValue2}
        employerInputValue2={employerInputValue2}
        experienceDescriptionInputValue2={experienceDescriptionInputValue2}
        startDateInputValue2={startDateInputValue2}
        endDateInputValue2={endDateInputValue2}
        schoolInputValue2={schoolInputValue2}
        degreeInputValue2={degreeInputValue2}
        educationEndDateInputValue2={educationEndDateInputValue2}
        educationDescriptionInputValue2={educationDescriptionInputValue2}
      />
    </div>
  );
}
