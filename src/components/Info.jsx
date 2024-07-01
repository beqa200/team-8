import React from "react";
import profilePic from "/images/profile-pic.webp";

export default function Info({
  nameValue,
  lastNameValue,
  emailInputValue,
  mobileInputValue,
  descriptionInputValue,
}) {
  return (
    <div className="ml-10 pt-[68px] pr-[75px] pl-[81px]">
      <div className="flex flex-wrap">
        <div className="w-[400px]">
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

          {descriptionInputValue !== "" && (
            <div>
              <p className="text-[18px] text-[#f93b1d] font-bold mb-[15px]">
                ჩემ შესახებ
              </p>
              <p className="text-[16px] text-[#000000] leading-6 break-words">
                {descriptionInputValue}
              </p>
            </div>
          )}
        </div>
        <img
          src={profilePic}
          className="w-[246px] h-[246px] rounded-[50%]"
          alt="Profile"
        />
      </div>
    </div>
  );
}
