import React from "react";
import { Present } from "../types/types";
import { AlternativeBtn, DangerBtn } from "../ui-kit/Button";

type PresentCardProps = {
  present: Present;
  onPresentDelete: (id: number) => void;
};

function PresentCard({ present, onPresentDelete }: PresentCardProps) {
  const title = present.presentTitle;
  const url = present.presentUrl;
  const description = present.presentDescription;
  const id = present.presentId;
  const handlePresentDelete = onPresentDelete;
  return (
    <div
      className="w-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 
      dark:border-gray-700"
    >
      {/* <a href="#">
          <img className="rounded-t-lg" src={url} />
        </a> */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {url}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <AlternativeBtn
          innerText="Change details"
          onBtnClick={() => console.log(id)}
        />
        <DangerBtn
          innerText="Remove"
          onBtnClick={() => handlePresentDelete(id)}
        />
      </div>
    </div>
  );
}

export default PresentCard;
