import React from "react";
import Info from "../components/Info";
import arrowImg from "/images/Group 4.svg";
import { useNavigate } from "react-router-dom";

export default function Resume({
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
  experienceAdditional,
  positionInputValue2,
  employerInputValue2,
  experienceDescriptionInputValue2,
  startDateInputValue2,
  endDateInputValue2,
  schoolInputValue2,
  degreeInputValue2,
  educationEndDateInputValue2,
  educationDescriptionInputValue2,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img
          onClick={() => navigate("/education")}
          src={arrowImg}
          alt="arrowImg"
          className="absolute cursor-pointer mt-[45px] ml-[48px]"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[880px] border-solid border-[1px] border-[#000000] mt-[20px]">
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
            experienceAdditional={experienceAdditional}
            startDateInputValue={startDateInputValue}
            endDateInputValue={endDateInputValue}
            schoolInputValue={schoolInputValue}
            degreeInputValue={degreeInputValue}
            educationEndDateInputValue={educationEndDateInputValue}
            educationDescriptionInputValue={educationDescriptionInputValue}
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
      </div>
    </div>
  );
}
