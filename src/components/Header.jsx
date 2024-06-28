import arrowImg from "/images/Group 4.svg";

export default function Header({ navigate }) {
  return (
    <div>
      <header className="relative">
        <div>
          <img
            onClick={() => navigate("/")}
            src={arrowImg}
            alt="arrowImg"
            className="absolute ml-[-100px] cursor-pointer"
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
    </div>
  );
}
