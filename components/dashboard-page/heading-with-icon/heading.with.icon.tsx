import * as React from "react";

interface HeadingWithIconProps {
  text: string;
  icon: React.ReactNode;
}
export const HeadingWithIcon: React.FC<HeadingWithIconProps> = ({
  icon,
  text,
}): React.ReactElement => {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <h1 className="text-xl md:text-2xl font-bold">{text}</h1>
    </div>
  );
};
