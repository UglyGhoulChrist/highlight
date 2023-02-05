import React from "react";
import Popular from "./../components/Popular";
import New from "./../components/New";

function WrappedComponent(Component) {
  function hocComponent(props) {
    return (
      (props.views > 1000 && (
        <Popular>
          <Component {...props} />
        </Popular>
      )) ||
      (props.views < 100 && (
        <New>
          <Component {...props} />
        </New>
      )) || <Component {...props} />
    );
  }

  return hocComponent;
}

export default WrappedComponent;
