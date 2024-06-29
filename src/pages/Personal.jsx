import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function Personal() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] =
    useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [mobileInputValue, setMobileInputValue] = useState("");

  return (
    <div className="flex w-[1920px]">
      <section
        className="h-[100vh] bg-[#F9F9F9]
    pt-[47px] px-[126px] 
"
      >
        <Header navigate={navigate} />
        <main className="mt-[69px]">
          <form>
            <div className="flex">
              <div>
                <p className="font-medium	 mb-[8px]">სახელი</p>
                <input
                  onChange={(event) =>
                    setNameValue(event.target.value)
                  }
                  type="text"
                  className="h-[48px] w-[339px]  p-4 border border-[#BCBCBC] rounded mr-[100px] mb-[8px]"
                  placeholder="ნიკოლოზ"
                />
                <p className="text-customGray font-helvetica-neue font-light text-base leading-base">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
              <div>
                <p className="font-medium	 mb-[8px]">გვარი</p>
                <input
                  onChange={(event) =>
                    setLastNameValue(event.target.value)
                  }
                  type="text"
                  placeholder="გელენიძე"
                  className="h-[48px] w-[339px] p-[13px 16px 14px 16px] flex p-4 border border-[#BCBCBC] rounded"
                />
                <p className="text-customGray font-helvetica-neue font-light text-base leading-base my-[8px]">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>
            </div>
          </form>
          <div className="flex mt-[46px]">
            <p className="text-lg font-medium">
              პირადი ფოტოს ათვირთვა
            </p>
            <button className="ml-[19px] w-[107px] h-[27px] bg-[#0E80BF] rounded text-white text-sm mb-[46px]">
              ატვირთვა
            </button>
          </div>
          <p className="font-medium mb-3">
            ჩემ შესახებ (არასავალდებულო)
          </p>
          <textarea
            onChange={(event) =>
              setDescriptionInputValue(event.target.value)
            }
            className="w-[775px] h-[123px] p-4 border border-[#BCBCBC] rounded mb-[50px]"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          ></textarea>
          <p className="text-lg font-medium mb-[8px]">ელ.ფოსტა</p>
          <input
            onChange={(event) =>
              setEmailInputValue(event.target.value)
            }
            type="email"
            className="border border-[#BCBCBC] rounded
          w-[773px] h-[48px] p-4
          mb-[8px]
          "
            placeholder="anzori666@redberry.ge"
          />
          <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[21px]">
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>

          <p className="text-lg font-medium mb-[8px]">
            მობილურის ნომერი
          </p>
          <input
            onChange={(event) =>
              setMobileInputValue(event.target.value)
            }
            type="number"
            className="border border-[#BCBCBC] rounded
          w-[773px] h-[48px]
          mb-[8px] p-4
          "
            placeholder="+995 551 12 35 56"
          />
          <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[21px] mb-[156px]">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
          <button
            onClick={() => navigate("/experience")}
            className="float-right mr-[70px]
        w-[151px] h-[48px] rounded bg-[#6B40E3]
        text-white text-base mb-[65px]
        "
          >
            შემდეგი
          </button>
        </main>
      </section>
      <div className="ml-10 pt-[68px]	pr-[75px] pl-[81px]">
        <div>
          <div>
            <div>
              <h2 className="">{nameValue}</h2>
              <h2>{lastNameValue}/</h2>
            </div>

            <div>
              <p>{emailInputValue}</p>
              <p>{mobileInputValue}</p>
            </div>

            <h3>ჩემ შესახებ</h3>
            <p>{descriptionInputValue}</p>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
