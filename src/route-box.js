import "./route-box.css";

function RouteBox(props) {
  return (
    <div className="container">
      <div className="item">
        {/* {JSON.stringify(props.from)} */}
        {props.from.map((o, index) => {
          return (
            <div key={index}>
              <b>{o.nickname}</b>
              <p className="space-info">
                可借&nbsp;{o.available_spaces}&nbsp;台
              </p>
            </div>
          );
        })}
      </div>
      <div className="item">
        <div className={`triangle ${props.version === "v1" && "v1-station"}`} />
      </div>
      <div className="item">
        {props.to.map((o, index) => {
          return (
            <div key={index}>
              <b>{o.nickname}</b>
              <p className="space-info">可停&nbsp;{o.empty_spaces}&nbsp;台</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

RouteBox.defaultProps = {
  from: {},
  to: {},
};

export default RouteBox;
