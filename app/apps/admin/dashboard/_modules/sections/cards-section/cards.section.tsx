import * as React from "react";
import { cardData } from "./card-data";
import { CardItem } from "./card-item";

export const CardsSection: React.FC = (): React.ReactElement => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map(({ title, count, icon, desc, isHighlighted }, index) => (
        <CardItem
          key={index}
          title={title}
          count={count}
          icon={icon}
          desc={desc}
          isHighlighted={isHighlighted}
        />
      ))}
    </section>
  );
};
