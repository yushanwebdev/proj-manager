import clsx from "clsx";
import { NextComponentType } from "next";

interface IGlassPaneProps {
  children: React.ReactElement;
  className: string;
}

const GlassPane = ({ children, className }: IGlassPaneProps) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
