import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";
import { useContext } from "react";
import { Link } from "react-router-dom";
import House from "./House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ImSpinner2 className="animate-spin text-4xl" />
      </div>
    );
  }

  if (houses.length === 0) {
    return (
      <div className="text-center">
        <p>No houses available.</p>
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div>
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
