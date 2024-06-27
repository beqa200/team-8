import arrowImg from "/images/Group 4.svg";

export default function Personal() {
  return (
    <section
      className="h-[100vh] bg-[#F9F9F9]
    pt-[47px] px-[126px]
    w-[1098px]
    "
    >
      <header className="relative">
        <div>
          <img
            src={arrowImg}
            alt="arrowImg"
            className="absolute ml-[-100px]"
          />
        </div>

        <div className="flex justify-between items-center mb-[12px]">
          <h1 className="text-[24px] font-extrabold font-helvetica-neue">
            პირადი ინფო
          </h1>
          <p className="mr-[69px] text-[20px] font-normal font-helvetica-neue">
            1/3
          </p>
        </div>
        <hr className="border-[#1A1A1A]  mr-[70px]"></hr>
      </header>

      <main className="mt-[69px]">
        <form action="">
          <div className="flex">
            <div>
              <p className="font-medium	 mb-[8px]">სახელი</p>
              <input
                type="text"
                className="h-[48px] w-[339px] flex p-4 border border-[#BCBCBC] rounded mr-[100px] mb-[8px]"
                placeholder="ნიკოლოზ"
              />
              <p className="text-customGray font-helvetica-neue font-light text-base leading-base">
                მინიმუმ 2 ასო, ქართული ასოები
              </p>
            </div>
            <div>
              <p className="font-medium	 mb-[8px]">გვარი</p>
              <input
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
          <p className="text-lg font-medium">პირადი ფოტოს ათვირთვა</p>
          <button className="ml-[19px] w-[107px] h-[27px] bg-[#0E80BF] rounded text-white text-sm mb-[46px]">
            ატვირთვა
          </button>
        </div>
        <p className="font-medium">ჩემ შესახებ (არასავალდებულო)</p>
        <input
          type="text"
          className="w-[780px] h-[103px]  border border-[#BCBCBC] rounded mt-[8px] mb-[37px] p-4 "
        />
        <p className="text-lg font-medium mb-[8px]">ელ.ფოსტა</p>
        <input
          type="text"
          className="border border-[#BCBCBC] rounded
          w-[780px] h-[48px] p-4
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
          type="text"
          className="border border-[#BCBCBC] rounded
          w-[780px] h-[48px]
          mb-[8px] p-4
          "
          placeholder="+995 551 12 35 56"
        />
        <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[21px] mb-[156px]">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
        <button
          className="float-right mr-[70px]
        w-[151px] h-[48px] rounded bg-[#6B40E3]
        text-white text-base mb-[65px]
        "
        >
          შემდეგი
        </button>
      </main>
    </section>
  );
}
