import { Link } from "react-router-dom";
import redBerryIcon from "/images/LOGO-02 3.png";

export default function Home() {
  return (
    <>
      <section>
        <header>
          <img src={redBerryIcon} alt="redBerryIcon" />
        </header>

        <Link to={"/userInfoValidation"}>რეზიუმეს დამატება</Link>
      </section>
    </>
  );
}
