import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <button>
        <Link to={"/userInfoPage"}>რეზიუმეს დამატება</Link>
      </button>
    </div>
  );
}
