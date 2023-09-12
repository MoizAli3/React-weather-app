import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import axios from "axios";

function App() {
  const textInput = useRef(null);
  const [data, setData] = useState(null);

  const click = async (event) => {
    event.preventDefault();
    const name = textInput.current.value;
    console.log(textInput.current.value);

    try {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=9adf9db795804ee9920112126221707&q=london}`
      );
      // setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-bg text-center text-white ">
      <h1 className="display-3 py-2 mt-3">Weather App</h1>
      <div className="row mt-4">
        <div className="main rounded col-sm-3 col-10 m-auto px-4 py-3">
          <div className="row mb-2">
            <div className="col-12">
              <form onSubmit={click}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Weather"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref={textInput}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <i className="fa-solid fa-location-crosshairs"></i>
            </div>
            <div className="col-8">
              <i className="fa-solid fa-location-dot mx-2"></i>
              <span className="">
                {data?.location?.name}
                <span>, </span>
                {data?.location?.region}
              </span>
            </div>
            <div className="col-2">
              <i className="fa-solid fa-circle-info"></i>
            </div>
          </div>
          <div className="row mb-4">
            <span>{data?.current?.last_updated}</span>
          </div>
          <img
            width="100px"
            height="100px"
            src={data?.current?.condition?.icon}
          />
          <div className="row">
            <p> {data?.current?.condition?.text}</p>
            <h1 className="display-2 h1">
              {data?.current?.temp_c}
              <span>&#8451;</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
