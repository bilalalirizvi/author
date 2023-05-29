import React from "react";

interface Props {
  style?: React.CSSProperties;
  children: JSX.Element;
}

const Container = ({ style, children }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
