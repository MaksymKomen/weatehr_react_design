import React, { useContext, useState, useEffect } from "react";

import { CityContext } from "../../Context/CityContext";
import { celsiusToFahrenheit } from "../../utils";
import Icon from "../Icons";
import "./Weekly.scss";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Weekly = ({ data }) => {

  const context = useContext(CityContext);

  const [selectedDay, setSelectedDay] = useState(0);
  const [count, setCount] = useState(Math.floor(window.innerWidth / 90));

  useEffect(() => {
    setSelectedDay(0);
  }, [context.selected]);
  
  return (
    <div className="weekly">
      <div className="content">
        <div className="title">Weekly Forecast</div>
        <div className="week">
          {data.forecast?.daily.map((item, index) => {
            if (index > count - 1||index>7) return;
            let today = new Date();
            let day = today.getDay() - 1;
            return (
              <div
                key={index}
                className="day"
                style={
                  selectedDay === index
                    ? { backgroundColor: "#f2f2f2" }
                    : { backgroundColor: "#ffffff" }
                }
                onClick={(e) => setSelectedDay(index)}
              >
                <div className="day-title">{index===0?"Today": days[(index + day) % 7]}</div>
                <div className="weather-icon">
                  <Icon name={item.weather.description}></Icon>
                </div>
                <div className="temp">
                  {context.isCelsius? item?.temperatures?.high.toFixed(0):celsiusToFahrenheit(item?.temperatures?.high)}&deg;|
                  {context.isCelsius? item?.temperatures?.low.toFixed(0):celsiusToFahrenheit(item?.temperatures?.low)}&deg;
                </div>
              </div>
            );
          })}
        </div>
        <div className="sunset">
          <div className="sun">
            <div className="sun-icon">
              <Icon name={"sun"} color={"#fff206"}></Icon>
            </div>
            <div className="rise-set">
              <div>Rise</div>
              <div>Set</div>
            </div>
            <div className="rs-time">
              <div>
                {new Date(
                  data.forecast?.daily[selectedDay]?.sunrise
                ).getUTCHours() +
                  ":" +
                  new Date(
                    data.forecast?.daily[
                      selectedDay
                    ]?.sunrise
                  ).getUTCMinutes() +
                  " am"}
              </div>
              <div>
                {new Date(
                  data.forecast?.daily[selectedDay]?.sunset
                ).getUTCHours() +
                  ":" +
                  new Date(
                    data.forecast?.daily[selectedDay]?.sunset
                  ).getUTCMinutes() +
                  " pm"}
              </div>
            </div>
          </div>
          <div className="moon">
            <div className="moon-icon">
              <Icon name="moon" color={"#585858"}></Icon>
            </div>
            <div className="rise-set">
              <div>Rise</div>
              <div>Set</div>
            </div>
            <div className="rs-time">
              <div>
                {new Date(
                  data.forecast?.daily[selectedDay]?.moonrise
                ).getUTCHours() +
                  ":" +
                  new Date(
                    data.forecast?.daily[
                      selectedDay
                    ]?.moonrise
                  ).getUTCMinutes() +
                  " am"}
              </div>
              <div>
                {new Date(
                  data.forecast?.daily[selectedDay]?.moonset
                ).getUTCHours() +
                  ":" +
                  new Date(
                    data.forecast?.daily[
                      selectedDay
                    ]?.moonset
                  ).getUTCMinutes() +
                  " pm"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
