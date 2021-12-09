const nicknames = [
  { station_no: "0037", nickname: "捷運東門站Exit4" },
  { station_no: "0362", nickname: "和平金山路口" },
  { station_no: "0032", nickname: "捷運六張犁站" },
  { station_no: "0087", nickname: "捷運大安站" },
  { station_no: "0074", nickname: "捷運東門站Exit6" },
  { station_no: "500101019", nickname: "和平臥龍街口" },
  { station_no: "500101101", nickname: "捷運六張犁站" },
  { station_no: "500106066", nickname: "捷運東門站Exit6" },
  { station_no: "500101134", nickname: "捷運大安站Exit4" },
  { station_no: "500101117", nickname: "捷運東門站Exit3" },
  { station_no: "500101002", nickname: "捷運科技大樓站" },
  { station_no: "500101001", nickname: "捷運科技大樓站" },

  { station_no: "0126", nickname: "敦化基隆路口" },
  { station_no: "0405", nickname: "國北教正門" },
  { station_no: "500101092", nickname: "和平實小" },
  { station_no: "500101091", nickname: "國北教側門" },
  { station_no: "500101123", nickname: "敦化基隆路口" },
];
const routes2Work = [
  {
    version: "v2",
    from: ["500101117", "500106066", "500101134", "500101101"],
    to: ["500101123", "500101092", "500101091"],
  },
  {
    version: "v1",
    from: ["0037", "0074", "0087", "0362", "0032"],
    to: ["0126"],
  },
];

const routes2Home = [
  {
    version: "v2",
    from: ["500101123", "500101092", "500101091", "500101019"],
    to: [
      "500101117",
      "500106066",
      "500101134",
      "500101002",
      "500101001",

      "500101101",
    ],
  },
  {
    version: "v1",
    from: ["0126", "0405"],
    to: ["0037", "0074", "0087", "0032", "0362"],
  },
];
export { routes2Work, routes2Home, nicknames };
