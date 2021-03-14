import "./route-box.css";

function RouteBox(props) {
  return (
    <div className="container">
      <div className="item">
        <span>
          <b>{props.from.name_tw}</b>
        </span>
        <p className="space-info">
          可借&nbsp;{props.from.available_spaces}&nbsp;台
        </p>
      </div>
      <div className="item">
        <div className="triangle" />
      </div>
      <div className="item">
        <span>
          <b>{props.to.name_tw}</b>
        </span>
        <p className="space-info">可停&nbsp;{props.to.empty_spaces}&nbsp;台</p>
      </div>
    </div>
  );
}

RouteBox.defaultProps = {
  from: {},
  to: {},
};

export default RouteBox;
