import React, { useState } from "react";
import AddPresent from "./AddPresent";
import PresentCardList from "./PresentCardList";
import { Present } from "../types/types";

function StoreFront() {
  const [presents, setPresents] = useState<Present[]>([]);
  const [presentTitle, setPresentTitle] = useState("");
  const [presentDescription, setPresentDescription] = useState("");
  const [presentUrl, setPresenttUrl] = useState("");

  function handleChangeTitle(title: string) {
    setPresentTitle(title);
  }

  function handleChangeDescription(description: string) {
    setPresentDescription(description);
  }

  function handleChangeUrl(url: string) {
    setPresenttUrl(url);
  }

  function handleAddPresent(event: React.SyntheticEvent) {
    event.preventDefault();
    setPresents([
      ...presents,
      {
        presentId: presents.length + 1,
        presentTitle: presentTitle,
        presentDescription: presentDescription,
        presentUrl: presentUrl,
      },
    ]);
  }

  function handlePresentDelete(id: number) {
    const newPresents = presents.filter((present) => present.presentId !== id);
    setPresents(newPresents);
  }

  //need cleanup form

  console.log(presents);
  return (
    <div className="flex border items-center flex-col">
      <AddPresent
        onPresentSubmit={handleAddPresent}
        onTitleChange={handleChangeTitle}
        onDescriptionChange={handleChangeDescription}
        onUrlChange={handleChangeUrl}
      />
      <PresentCardList
        presentCards={presents}
        onPresentDelete={handlePresentDelete}
      />
    </div>
  );
}

export default StoreFront;
