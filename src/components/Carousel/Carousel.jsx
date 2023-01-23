import React, { useContext, useState } from "react";
import { CityContext } from "../../Context/CityContext";
import { useNavigate, useParams } from "react-router-dom";

import Icon from "../Icons";
import "./Carousel.scss";
import { celsiusToFahrenheit } from "../../utils";

const Carousel = ({ data }) => {
  const context = useContext(CityContext);
  const navigate = useNavigate();
  const { city } = useParams();
  const [trashColor, setTrashColor] = useState("#d82121");

  const handleClick = (id) => () => {
    navigate(`/${context.data[id].city.name}`)
  };
  const handleDelete = () => {
    if(context.selected===0)
    
      navigate(`/${context.data[context.selected]?.city?.name}`);
    else {
      navigate(`/${context.data[context.selected-1]?.city?.name}`);

    }

    context.deleteCity();
  };

  return (
    <div className="carousel">
      <div className="next-prev">
        <div className="carousel-caption">
          <div
            onClick={(e) => {
              if (context.selected !== 0) {
              
                navigate(`/${context.data[context.selected - 1]?.city?.name}`);
              }
            }}
          >
            {" "}
            <Icon name={"arrow-left"} color="#f2271c"></Icon>
          </div>
          {data.city?.name +
            ", " +
            data.city?.regionCode}
          <div
            onClick={(e) => {
              if (context.selected !== context.data.length - 1) {
                navigate(`/${context.data[context.selected + 1]?.city?.name}`);
              }
            }}
          >
            <Icon name={"arrow-right"} color="#f2271c"></Icon>
          </div>
        </div>
        <div className="carousel-current">
          {context.data.map((item, index) => {
            return (
              <li
                className="dot"
                key={index}
                style={
                  context.selected === index
                    ? { backgroundColor: "#f2271c" }
                    : { backgroundColor: "#f1f1f1" }
                }
                onClick={handleClick(index)}
              ></li>
            );
          })}
        </div>
      </div>
      <div className="carousel-content">
        <img src="dallas.png" alt="" />
        <div className="blur-area">
          <div className="content">
            <p className="temperature">
              {context.isCelsius? data.forecast?.current?.temperature.toFixed(
                0
              ) : celsiusToFahrenheit(data.forecast?.current?.temperature)}
              &deg;
            </p>
            <p className="description">
              {data.forecast?.current?.weather?.description}
              <br />
              Feels like{" "}
              {context.isCelsius? data.forecast?.current?.feelsLikeTemperature.toFixed(0):celsiusToFahrenheit(data.forecast?.current?.feelsLikeTemperature)}
              &deg;
            </p>
          </div>
          <div className="radar">
            <div
              className="local"
              onClick={(e) => {
                navigate(`/${data.city.id}/radar`);
              }}
            >
              Local Radar
            </div>
            <div
              className="trash"
              onMouseEnter={(e) => setTrashColor("#ffffff")}
              onMouseLeave={(e) => setTrashColor("#d82121")}
              onClick={handleDelete}
            >
              <Icon name={"trash"} color={trashColor}>
                {" "}
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
