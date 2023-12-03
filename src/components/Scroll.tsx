import { ReactElement } from "react";

export default function Scroll({
  children,
  height = 100,
}: {
  children: ReactElement;
  height: number;
}) {
  return (
    <div
      style={{
        overflow: "",
        overflowX: "hidden",
        height: `${height}vh`,
      }}
    >
      {children}
    </div>
  );
}
