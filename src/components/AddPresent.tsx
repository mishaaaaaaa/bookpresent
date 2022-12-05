import React, { useState } from "react";
import LabeledInput from "../ui-kit/LabeledInput";
import Textfield from "../ui-kit/Textfield";

export default function AddPresent(props: any) {
  return (
    <form className=" w-full lg:w-1/2 mt-10" onSubmit={props.onPresentSubmit}>
      <div className="grid gap-2 mb-6 ">
        <LabeledInput
          id="title"
          label="What present do i want?"
          placeholder="I want...."
          required={true}
          onInputChange={props.onTitleChange}
        />
        <LabeledInput
          id="url"
          label="Some refs to present?"
          placeholder="My present looks like..."
          required={false}
          onInputChange={props.onUrlChange}
        />
        <Textfield
          id="description"
          label="Additional information about present"
          placeholder="Add some additional description"
          required={false}
          onTextfieldChange={props.onDescriptionChange}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      >
        Add present
      </button>
    </form>
  );
}
