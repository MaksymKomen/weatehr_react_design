import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorPanel from "../Error/ErrorPanel";

import Icon from "../Icons";
import Loading from "../Loading/Loading";

const cities = {
  "F52083D2-841C-4E1A-A4C9-83827B07D8EE": "Austin, TX",
  "1B4DBE6A-EB69-4357-8BE8-1968DD9ECDF3": "Boston, MA",
  "0B66D5E5-039F-4951-A63A-2693464617CB": "Dallas, TX",
  "54A0CBA3-F4F8-47B8-974C-7FCE641CAD2C": "Nashville, TN",
};

const Radar = (props) => {

  const navigate = useNavigate();

  const { city } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await fetch(
        `https://all-the-weather.herokuapp.com/forecasts/${city}/radar`
      );
      if(res.status!==200){
        setError(true);
        setLoading(false);
        return;
      }
      res = await res.json();
      setUrl(res.radarURL);
      setLoading(false);
    };
    fetchData();
    setError(false);

  }, [city]);

  return (
    <div>
      <div className="city" style={{ position: "relative" }}>
        <div
          className="title"
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: " #404040",
            marginBottom: "10px",
          }}
        >
          {cities[city]}
        </div>
        <div
          className="back"
          style={{ top: "0px", position: "absolute", left: "6px" }}
          onClick={(e) => {
            navigate(-1);
          }}
        >
          <Icon name={"arrow-left"} color={"#d82121"}></Icon>
        </div>
      </div>
      {loading ? (
        <Loading></Loading>
      ) : (
        error?<ErrorPanel/>:
        <img src={url} alt="" style={{ width: "100%" }} />
      )}
    </div>
  );
};

export default Radar;
