import { useState, useEffect } from "react";
import RouteBox from "./route-box";
import Header from "./header";
import "./App.css";

function App() {
  const routes2Work = [
    { from: "0182", to: "0126" }, // 捷運古亭站(2號出口)>敦化基隆路口
    { from: "0087", to: "0126" }, // 捷運大安站>敦化基隆路口
    { from: "0032", to: "0126" }, // 捷運六張犁站>敦化基隆路口
    { from: "0306", to: "0126" }, // 捷運古亭站(6號出口)>敦化基隆路口
  ];
  const routes2Home = [
    { from: "0126", to: "0087" }, // 敦化基隆路口>捷運大安站
    { from: "500101092", to: "500101001" }, // 和平實小東北側>捷運六張犁站
    { from: "500101092", to: "500101002" }, // 和平實小東北側>復興南路二段273號前
    { from: "500101091", to: "500101001" }, // 國北教大側門南側>捷運六張犁站
    { from: "500101091", to: "500101002" }, // 國北教大側門南側>復興南路二段273號前
    { from: "500101019", to: "500101001" }, // 和平臥龍街口>捷運六張犁站
    { from: "500101019", to: "500101002" }, // 和平臥龍街口>復興南路二段273號前
    { from: "0126", to: "0032" }, //敦化基隆路口>捷運六張犁站
  ];
  const safetyCount = 3;

  const [stops, setStops] = useState([]);
  const [target, setTarget] = useState(() => {
    return new Date().getHours() >= 12 ? "home" : "work";
  });
  const [selectedView, setSelectedView] = useState([]);
  useEffect(() => {
    const v1Url =
      "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json";
    const v2Url =
      "https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2";

    Promise.all([
      fetch(v1Url).then((res) => res.json()),
      fetch(v2Url).then((res) => res.json()),
    ]).then(([responseV1, responseV2]) => {
      const v1 = Object.values(responseV1.retVal).map((o) => {
        return {
          station_no: o.sno,
          name_tw: o.sna,
          empty_spaces: Number(o.bemp),
          available_spaces: Number(o.sbi),
        };
      });
      const allStops = v1.concat(responseV2.retVal);
      setStops(allStops);
    });
  }, []);

  useEffect(() => {
    setSelectedView(target === "work" ? routes2Work : routes2Home);
  }, [target]);

  return (
    <div className="App">
      <Header
        onSwitchDestination={(t) => {
          setTarget(t);
        }}
        target={target}
      ></Header>

      <ul>
        {selectedView.map((route, index) => {
          const from = stops.find(
            (o) =>
              o.station_no === route.from && o.available_spaces >= safetyCount
          );
          const to = stops.find(
            (o) => o.station_no === route.to && o.empty_spaces >= safetyCount
          );
          return from && to ? (
            <li key={index}>
              <RouteBox from={from} to={to} />
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default App;
