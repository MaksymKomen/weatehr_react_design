import { createContext, useState } from "react";

const CityContext = createContext();

const CityProvider = (props) => {
  const [isCelsius, setIsCelsius] = useState(false);
  const { children } = props;
  const [selected, setSelected] = useState(0);
  const [data, setCityData] = useState([]);
  const [empty, setEmpty] = useState(false);

  const setData = async (cities) => {
    await setCityData(cities);
    return;
  };
  const deleteCity = () => {
    data.splice(selected, 1);
    if (data.length === 0) {
      setEmpty(true);
    }
  };
  return (
    <CityContext.Provider
      value={{ selected, setSelected, data, setData, deleteCity, empty, isCelsius, setEmpty,setIsCelsius }}
    >
      {children}
    </CityContext.Provider>
  );
};

export { CityContext, CityProvider };
