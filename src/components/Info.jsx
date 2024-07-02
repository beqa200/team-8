import React from "react";

export default function Info({
  nameValue,
  lastNameValue,
  emailInputValue,
  mobileInputValue,
  nameDescriptionInputValue,
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
  return (
    <div className="ml-10 mt-[68px] mb-[68px] mr-[75px] ml-[81px]">
      <div className="flex flex-wrap">
        <div className="w-[430px]">
          <div className="flex gap-[20px] mb-[17px]">
            <h2 className="text-[34px] text-[#f93b1d] font-bold break-words">
              {nameValue}
            </h2>
            <h2 className="text-[34px] text-[#f93b1d] font-bold break-words">
              {lastNameValue}
            </h2>
          </div>

          <div className="mb-[34px]">
            <p className="text-[18px] text-[#1a1a1a] mb-[10px] break-words">
              {emailInputValue}
            </p>
            <p className="text-[18px] text-[#1a1a1a] break-words">
              {mobileInputValue}
            </p>
          </div>

          {nameDescriptionInputValue !== "" && (
            <div>
              <p className="text-[18px] text-[#f93b1d] font-bold mb-[15px]">
                ჩემ შესახებ
              </p>
              <p className="text-[16px] text-[#000000] leading-6 break-words">
                {nameDescriptionInputValue}
              </p>
            </div>
          )}
        </div>
        <img
          src={image}
          className="w-[246px] h-[246px] rounded-[50%]"
          alt="Profile"
        />
      </div>

      <div>
        <div
          className={`${
            positionInputValue !== "" ? "border-t-[1px] border-[#c8c8c8]" : ""
          } mt-[18px]`}
        >
          {positionInputValue !== "" && (
            <h2 className="text-[18px] text-[#f93b1d] font-bold mb-[15px] mt-[24px]">
              გამოცდილება
            </h2>
          )}
          <div className="flex gap-[7px] text-[16px] text-[#1a1a1a] font-medium">
            <p>
              {positionInputValue}
              {employerInputValue !== "" ? "," : ""}
            </p>
            <p>{employerInputValue}</p>
          </div>
        </div>
        <div className="flex text-[16px] text-[#909090] mb-[16px] italic">
          <p>
            {startDateInputValue}
            {startDateInputValue !== "" && endDateInputValue !== "" ? " -" : ""}
          </p>
          <p className="ml-[3px]">{endDateInputValue}</p>
        </div>
        <p className="text-[16px] text-[#000000] font-medium">
          {experienceDescriptionInputValue}
        </p>

        <div className="flex gap-[7px] text-[16px] text-[#1a1a1a] font-medium mt-[50px]">
          <p>
            {positionInputValue2}
            {employerInputValue2 !== "" ? "," : ""}
          </p>
          <p>{employerInputValue2}</p>
        </div>
        <div className="flex text-[16px] text-[#909090] mb-[16px] italic">
          <p>
            {startDateInputValue2}
            {startDateInputValue2 !== "" && endDateInputValue2 !== ""
              ? " -"
              : ""}
          </p>
          <p className="ml-[3px]">{endDateInputValue2}</p>
        </div>
        <p className="text-[16px] text-[#000000] font-medium">
          {experienceDescriptionInputValue2}
        </p>
      </div>

      <div>
        <div
          className={`${
            schoolInputValue !== "" ? "border-t-[1px] border-[#c8c8c8]" : ""
          } mt-[18px]`}
        >
          {schoolInputValue !== "" && (
            <h2 className="text-[18px] text-[#f93b1d] font-bold mb-[15px] mt-[24px]">
              განათლება
            </h2>
          )}
        </div>
        <div className="flex gap-[7px] text-[16px] text-[#1a1a1a] font-medium">
          <p>
            {schoolInputValue}
            {degreeInputValue !== "" ? "," : ""}
          </p>
          <p>{degreeInputValue}</p>
        </div>
        <p className="text-[16px] text-[#909090] mb-[16px] italic">
          {educationEndDateInputValue}
        </p>
        <p className="text-[16px] text-[#000000] font-medium">
          {educationDescriptionInputValue}
        </p>

        <div className="flex gap-[7px] text-[16px] text-[#1a1a1a] font-medium mt-[50px]">
          <p>
            {schoolInputValue2}
            {degreeInputValue2 !== "" ? "," : ""}
          </p>
          <p>{degreeInputValue2}</p>
        </div>
        <p className="text-[16px] text-[#909090] mb-[16px] italic">
          {educationEndDateInputValue2}
        </p>
        <p className="text-[16px] text-[#000000] font-medium">
          {educationDescriptionInputValue2}
        </p>
      </div>
    </div>
  );
}
