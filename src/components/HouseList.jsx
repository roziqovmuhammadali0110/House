import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";
import { useContext } from "react";
import { Link } from "react-router-dom";
import House from "./House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto text-violet-700 mt-[200px] animate-spin text-4xl" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center">
        <p>Sorry, nothing found</p>
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
