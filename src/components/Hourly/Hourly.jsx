import React, { useContext, useEffect, useState } from "react";

import { CityContext } from "../../Context/CityContext";
import Icon from "../Icons";
import {celsiusToFahrenheit, convertWindDirection} from "../../utils/index" 

import "./Hourly.scss";

const Hourly = ({ data }) => {
  const context = useContext(CityContext);

  const [selectedHour, setSelectedHour] = useState(0);
  const [count, setCount] = useState(Math.floor(window.innerWidth / 90));

  useEffect(() => {
    setSelectedHour(0);
  }, [context.selected]);

  return (
    <div className="hourly">
      <div className="content">
        <div className="title">
          Hourly Forecast <span>Updated {10}</span>
        </div>
        <div className="hour">
          {data.forecast?.hourly.map((item, index) => {
            if (index > 9 || index > count - 1) return;
            return (
              <div
                key={index}
                className="hour-item"
                style={
                  selectedHour === index
                    ? { backgroundColor: "#f2f2f2" }
                    : { backgroundColor: "#ffffff" }
                }
                onClick={(e) => setSelectedHour(index)}
              >
                <div className="hour-title">
                  {new Date(item.timestamp).getUTCHours()}
                </div>
                <div className="weather-icon">
                  <Icon name={item.weather.description}></Icon>
                </div>
                <div className="temp">{context.isCelsius? item?.temperature : celsiusToFahrenheit(item?.temperature)}&deg;</div>
                <div className="humidity">
                  <Icon name={"precipitation"}></Icon>
                  {item?.precipitationChance}%
                </div>
              </div>
            );
          })}
        </div>
        <div className="hour-detail">
          <div className="left side">
            <div className="items">
              <div className="item">
                <div>Real Feel</div>
                <div className="item-value">
                  {
                    data.forecast?.hourly[selectedHour]
                      ?.temperature
                  }
                  &deg;
                </div>
              </div>
              <div className="item">
                <div>Wind Speed</div>
                <div className="item-value">
                  {data.forecast?.hourly[selectedHour]
                    ?.windSpeed + "mph  "}
                </div>
              </div>
              <div className="item">
                <div>Wind Direction</div>
                <div className="item-value">
                  {
                      convertWindDirection(data.forecast?.hourly[selectedHour]
                        ?.windDirection)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="right side">
            <div className="items">
              <div className="item">
                <div>UV Index</div>
                <div className="item-value">
                  {
                    data.forecast?.hourly[selectedHour]
                      ?.uvIndex
                  }
                </div>
              </div>
              <div className="item">
                <div>Visibility</div>
                <div className="item-value">
                  {
                    data.forecast?.hourly[selectedHour]
                      ?.visibility
                  }
                </div>
              </div>
              <div className="item">
                <div>Humidity</div>
                <div className="item-value">
                  {data.forecast?.hourly[selectedHour]
                    ?.humidity + "%"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hourly;
