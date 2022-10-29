import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { topic, userId, apiKey } from "../api/config";

const InputBox = ({ setBirth, setAstro, setGem }) => {
  const navigate = useNavigate();
  const date = useRef("");
  const [location, setLocation] = useState(null);

  const getDevices = async () => {
    let arr = date.current.value ? date.current.value.split("-") : null;
    var data =
      arr && location
        ? {
            day: Number(arr[2]),
            month: Number(arr[1]),
            year: Number(arr[0]),
            hour: 2,
            min: 23,
            lat: location.lat,
            lon: location.lon,
            tzone: 5.5
          }
        : null;

    const headers = {
      authorization: "Basic " + btoa(userId + ":" + apiKey),
      "Content-Type": "application/json"
    };

    const reponseAstro =
      data != null
        ? await axios({
            method: "POST",
            headers: headers,
            data: JSON.stringify(data),
            url: `https://json.astrologyapi.com/v1/${topic.astro}`
          })
        : "Error";
    setAstro(reponseAstro.data);

    const reponseBirth =
      data != null
        ? await axios({
            method: "POST",
            headers: headers,
            data: JSON.stringify(data),
            url: `https://json.astrologyapi.com/v1/${topic.birth}`
          })
        : "Error";
    setBirth(reponseBirth.data);

    const reponseGem =
      data != null
        ? await axios({
            method: "POST",
            headers: headers,
            data: JSON.stringify(data),
            url: `https://json.astrologyapi.com/v1/${topic.gem}`
          })
        : "Error";
    setGem(reponseGem.data);

    if (
      reponseGem !== "Error" &&
      reponseBirth !== "Error" &&
      reponseAstro !== "Error"
    ) {
      navigate("/details");
    }
  };

  const success = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLocation({ lat: latitude, lon: longitude });
  };

  const error = () => {
    console.log("Error retrieving weather data");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className="input-box">
      <div><h1>Astrology</h1></div>
      <div><input type="date" ref={date} /></div>
      <div><button onClick={getDevices}>Get Horoscope</button></div>
    </div>
  );
  
};

export default InputBox;