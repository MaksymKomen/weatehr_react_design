import React, { useState, useEffect, useContext } from "react";

import Carousel from "../Carousel/Carousel";
import Weekly from "../Weekly/Weekly";
import Hourly from "../Hourly/Hourly";
import Loading from "../Loading/Loading";
import ErrorPanel from "../Error/ErrorPanel";
import { CityContext } from "../../Context/CityContext";
import { useNavigate, useParams } from "react-router-dom";

const cities = [
  "F52083D2-841C-4E1A-A4C9-83827B07D8EE",
  "1B4DBE6A-EB69-4357-8BE8-1968DD9ECDF3",
  "0B66D5E5-039F-4951-A63A-2693464617CB",
  "54A0CBA3-F4F8-47B8-974C-7FCE641CAD2C",
];

const Home = () => {
  const context = useContext(CityContext);
  const navigate = useNavigate();
  const { city } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({})

  const fetchData = async () => {
    if (context.data.length > 0) {
      return;
    }
    let newData = [];
    setLoading(true);
    let res;
    const a = await Promise.all(
      cities.map(async (item, index) => {
        res = await fetch(
          `https://all-the-weather.herokuapp.com/cities/${item}/forecast`
        );
        if (res.status !== 200) {
          setError(true);
          setLoading(false);
          return;
        }
        res = await res.json();
        newData.push(res);
      })
    );
    setError(false);
    await context.setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (context.data.length === 0) return;
    if (city === undefined) {
      setData(context.data[context.selected])
      navigate(`/${context.data[context.selected].city.name}`);
      return;
    }
    let sel = context.data.findIndex((item) => item.city.name === city);

    if (sel < 0) {
      setError(true);
    } else {
      context.setSelected(sel);
      setData(context.data[sel])
      return;
    }
  }, [context.data, city]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error || context.empty ? (
        <ErrorPanel />
      ) : (
        <div className="home">
          <Carousel data={data}></Carousel>
          <Weekly data={data}></Weekly>
          <Hourly data={data}></Hourly>
        </div>
      )}
    </>
  );
};

export default Home;
