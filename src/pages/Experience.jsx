import Header from "../components/Header";
import arrowImg from "/images/Group 4.svg";

export default function Experience() {
  return (
    <section
      className="h-[100vh] bg-[#F9F9F9]
    pt-[47px] px-[126px]
    w-[1098px]
    "
    >
      <Header src={arrowImg} />
      <main>
        <form>
          <div>
            <p className="font-medium	 mb-[8px] mt-[69px] mb-[8px]">
              თანამდებობა
            </p>
            <input
              className="h-[48px] w-[766px]  p-4 border border-[#BCBCBC] rounded mb-[8px]"
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
            />
            <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[23px]">
              მინიმუმ 2 სიმბოლო
            </p>
          </div>
          <div>
            <p className="font-medium mb-[8px]">დამსაქმებელი</p>
            <input
              type="text"
              className="h-[48px] w-[766px]  p-4 border border-[#BCBCBC] rounded mb-[8px]"
              placeholder="დამსაქმებელი"
            />
            <p className="text-customGray font-helvetica-neue font-light text-base leading-base mb-[31px]">
              მინიმუმ 2 სიმბოლო
            </p>
          </div>
          <div className="flex">
            <div>
              <p className="font-medium mb-[8px]">დაწყების რიცხვი</p>
              <input
                type="date"
                className="h-[48px] w-[339px]  p-4 border border-[#BCBCBC] rounded mr-[86px] mb-[8px]"
              />
            </div>

            <div>
              <p className="font-medium mb-[8px]">
                დამთავრების რიცხვი
              </p>
              <input
                type="date"
                className="h-[48px] w-[339px]  p-4 border border-[#BCBCBC] rounded mb-[25px]"
              />
            </div>
          </div>
          <div>
            <p className="font-medium mt-[31px] mb-[8px]">აღწერა</p>
            <input
              type="text"
              className="w-[765px] h-[123px] p-4 border border-[#BCBCBC] rounded mb-[50px]"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            />
          </div>
        </form>
        <hr className="border-[#C1C1C1]  mr-[82px] mb-[48px]"></hr>
        <button
          className="text-base w-[289px] h-[48px]
        bg-[#62A1EB] rounded text-white mb-[115px]"
        >
          მეტი გამოცდილების დამატება
        </button>
      </main>
      <footer className="flex justify-between ">
        <button
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
      </footer>
    </section>
  );
}
