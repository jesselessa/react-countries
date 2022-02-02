// React
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => this.props.onClick(this.props.children.toLowerCase())}
          //   Change background when selected
          className={`btn btn${
            this.props.isSelected ? "" : "-outline"
          }-primary m-2`}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
