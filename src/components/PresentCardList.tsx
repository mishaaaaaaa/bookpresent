import React from "react";
import PresentCard from "./PresentCard";
import { Present } from "../types/types";

type PresentCardsListProps = {
  presentCards: Present[];
  onPresentDelete: any;
};

function PresentCardList({
  presentCards,
  onPresentDelete,
}: PresentCardsListProps) {
  return (
    <div className="border w-full mt-5 p-3 flex flex-wrap gap-6 justify-center">
      {/* <PresentCard /> */}
      {presentCards.map((presentCard, index) => (
        <PresentCard
          key={index}
          present={presentCard}
          onPresentDelete={onPresentDelete}
        />
      ))}
    </div>
  );
}

export default PresentCardList;
