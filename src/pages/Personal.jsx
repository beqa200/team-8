import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Info from "../components/Info";

export default function Personal() {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [mobileInputValue, setMobileInputValue] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const validateName = () => {
    if (nameValue.trim().length < 2) {
      setNameError(true);
      return false;
    } else {
      setNameError(false);
      return true;
    }
  };

  const validateLastName = () => {
    if (lastNameValue.trim().length < 2) {
      setLastNameError(true);
      return false;
    } else {
      setLastNameError(false);
      return true;
    }
  };

  const validateEmail = () => {
    const redberryLength = emailInputValue.length - 12;
    if (
      emailInputValue.slice(redberryLength) !== "@redberry.ge" ||
      emailInputValue.slice(0, 1) == "@"
    ) {
      setEmailError(true);
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  };

  const validateMobile = () => {
    const mobileRegex = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
    if (!mobileRegex.test(mobileInputValue)) {
      setMobileError(true);
      return false;
    } else {
      setMobileError(false);
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isMobileValid = validateMobile();

    if (isNameValid && isLastNameValid && isEmailValid && isMobileValid) {
      navigate("/experience");
    }
  };

  return (
    <div className="flex">
      <section className="bg-[#F9F9F9] pt-[47px] px-[126px]">
        <Header navigate={navigate} />
        <main className="mt-[69px]">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <p
                  className={`font-medium mb-[8px] ${
                    nameError ? "text-[#e52f2f]" : ""
                  }`}
                >
                  სახელი
                </p>
                <input
                  onChange={(event) => setNameValue(event.target.value)}
                  onBlur={validateName}
                  value={nameValue}
                  type="text"
                  className={`h-[48px] w-[339px] outline-none p-4 border rounded mr-[100px] mb-[8px] ${
                    nameError
                      ? "border-[#ef5050]"
                      : nameError === ""
                      ? "border-[#BCBCBC]"
                      : "border-[#98e37e]"
                  }`}
                  placeholder="ნიკოლოზ"
                />
                <p className="text-[14px] text-[#2e2e2e]">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
              <div>
                <p
                  className={`font-medium mb-[8px] ${
                    lastNameError ? "text-[#e52f2f]" : ""
                  } `}
                >
                  გვარი
                </p>
                <input
                  onChange={(event) => setLastNameValue(event.target.value)}
                  onBlur={validateLastName}
                  value={lastNameValue}
                  type="text"
                  className={`h-[48px] w-[339px] outline-none p-4 border rounded ${
                    lastNameError
                      ? "border-[#ef5050]"
                      : lastNameError === ""
                      ? "border-[#BCBCBC]"
                      : "border-[#98e37e]"
                  }`}
                  placeholder="გელენიძე"
                />
                <p className="text-[14px] text-[#2e2e2e]">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
            </div>

            <div className="flex mt-[46px]">
              <p className="text-lg font-medium">პირადი ფოტოს ატვირთვა</p>
              <label
                htmlFor="fileInput"
                className="ml-[19px] w-[107px] h-[27px] bg-[#0E80BF] border rounded text-white text-sm mb-[46px] flex items-center justify-center cursor-pointer"
              >
                ატვირთვა
                <input id="fileInput" type="file" className="hidden" />
              </label>
            </div>

            <p className="font-medium mb-3">ჩემ შესახებ (არასავალდებულო)</p>
            <textarea
              onChange={(event) => setDescriptionInputValue(event.target.value)}
              value={descriptionInputValue}
              className={`w-[775px] h-[123px] outline-none p-4 border rounded mb-[33px] ${
                descriptionInputValue.trim().length !== 0
                  ? "border-[#98e37e]"
                  : "border-[#BCBCBC]"
              }`}
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ></textarea>

            <p
              className={`text-lg font-medium mb-[8px] ${
                emailError ? "text-[#e52f2f]" : ""
              }`}
            >
              ელ.ფოსტა
            </p>
            <input
              onChange={(event) => setEmailInputValue(event.target.value)}
              onBlur={validateEmail}
              value={emailInputValue}
              type="email"
              className={`border rounded outline-none w-[773px] h-[48px] p-4 mb-[8px] ${
                emailError
                  ? "border-[#ef5050]"
                  : emailError === ""
                  ? "border-[#BCBCBC]"
                  : "border-[#98e37e]"
              }`}
              placeholder="anzori666@redberry.ge"
            />
            <p className="text-[14px] text-[#2e2e2e] mb-[29px]">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </p>

            <p
              className={`text-lg font-medium mb-[8px] ${
                mobileError ? "text-[#e52f2f]" : ""
              }`}
            >
              მობილურის ნომერი
            </p>
            <input
              onChange={(event) => setMobileInputValue(event.target.value)}
              onBlur={validateMobile}
              value={mobileInputValue}
              type="text"
              className={`border rounded outline-none w-[773px] h-[48px] p-4 mb-[8px] ${
                mobileError
                  ? "border-[#ef5050]"
                  : mobileError === ""
                  ? "border-[#BCBCBC]"
                  : "border-[#98e37e]"
              }`}
              placeholder="+995 551 12 35 56"
            />
            <p className="text-[14px] text-[#2e2e2e]">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>

            <button
              type="submit"
              className="float-right mr-[70px] w-[151px] h-[48px] rounded bg-[#6B40E3] text-white text-base mb-[65px]"
            >
              შემდეგი
            </button>
          </form>
        </main>
      </section>
      <Info
        nameValue={nameValue}
        lastNameValue={lastNameValue}
        emailInputValue={emailInputValue}
        mobileInputValue={mobileInputValue}
        descriptionInputValue={descriptionInputValue}
      />
    </div>
  );
}
