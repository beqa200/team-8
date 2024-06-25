import redBerryIcon from "/images/LOGO-02 3.png";
import backgroundImg from "/images/LOGO-40 1.png";
export default function Home() {
  return (
    <>
      <section>
        <header className="mt-[25px] ml-[70px] border-b border-gray-800">
          <img
            src={redBerryIcon}
            alt="redBerryIcon b"
            className="mb-[20px]"
          />
        </header>
        <div className="flex items-center justify-center h-[100vh]">
          <div>
            <img src={backgroundImg} alt="backgroundImg" />
            <div>
              <button className="bg-black text-white w-[464px] p-[18px_60px] rounded-lg text-xl">
                რეზიუმეს დამატება
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
