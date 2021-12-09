import { useState, useEffect } from "react";
import RouteBox from "./route-box";
import Header from "./header";
import "./App.css";
import { routes2Work, routes2Home, nicknames } from "./routes";

function App() {
  const [safetyCount, setSafetyCount] = useState(3);
  const [allStations, setAllStations] = useState([]);
  const [target, setTarget] = useState(() => {
    return new Date().getHours() >= 12 ? "home" : "work";
  });
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  useEffect(() => {
    const v1Url =
      "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json";
    const v2Url =
      "https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2";

    Promise.all([
      fetch(v1Url).then((res) => res.json()),
      fetch(v2Url).then((res) => res.json()),
    ])
      .then(([responseV1, responseV2]) => {
        const v1 = Object.values(responseV1.retVal).map((o) => {
          return {
            station_no: o.sno,
            name_tw: o.sna,
            empty_spaces: Number(o.bemp),
            available_spaces: Number(o.sbi),
            version: "v1",
          };
        });
        responseV2.retVal.forEach((o) => {
          o.version = "v2";
        });
        const v2 = responseV2.retVal;

        const allStops = v1.concat(v2);
        return allStops;
      })
      .then((allStops) => {
        allStops.forEach(
          (station) =>
            (station.nickname =
              nicknames.find((o) => o.station_no === station.station_no)
                ?.nickname || station.name_tw)
        );

        setAllStations(allStops);
      });
  }, []);

  useEffect(() => {
    setSelectedRoutes(target === "work" ? routes2Work : routes2Home);
  }, [target]);

  return (
    <div className="App">
      <Header
        onSwitchDestination={(t) => {
          setTarget(t);
        }}
        onSetSafetyCount={(c) => {
          if (c >= 0) setSafetyCount(c);
        }}
        safetyCount={safetyCount}
        target={target}
      ></Header>
      <ul>
        {allStations.length > 0 &&
          selectedRoutes.map((route, index) => {
            const from = allStations
              .filter(
                (o) =>
                  route.from.some((x) => x === o.station_no) &&
                  o.available_spaces >= safetyCount
              )
              .sort((a, b) => {
                return (
                  route.from.indexOf(a.station_no) <
                    route.from.indexOf(b.station_no) && -1
                );
              });
            const to = allStations
              .filter(
                (o) =>
                  route.to.some((x) => x === o.station_no) &&
                  o.empty_spaces >= safetyCount
              )
              .sort((a, b) => {
                return (
                  route.to.indexOf(a.station_no) <
                    route.to.indexOf(b.station_no) && -1
                );
              });
            return (
              <li key={index}>
                <RouteBox from={from} to={to} version={route.version} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
