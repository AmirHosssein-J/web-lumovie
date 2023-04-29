import S from "../detail.module.scss";
import { Link } from "react-router-dom";

const Countries = ({ countries }) => {
  return (
    <>
      {countries.map((country, index) => {
        return (
          <Link key={index} to={`/country/${country.iso_3166_1}`}>
            <h5 className={S["country"]}>
              <img
                className={S["flag"]}
                src={`https://www.countryflagicons.com/FLAT/48/${country.iso_3166_1}.png`}
              ></img>
              {country.iso_3166_1}
            </h5>
          </Link>
        );
      })}
    </>
  );
};

export default Countries;
