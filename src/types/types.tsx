export type Present = {
  presentId: number;
  presentTitle: string;
  presentUrl?: string;
  presentDescription?: string;
};

export type TextfieldProps = {
  id: string;
  label: string;
  onTextfieldChange: (event: any) => void;
  placeholder: string;
  required: boolean;
};

export type InputProps = {
  id: string;
  label: string;
  onInputChange: (event: any) => void;
  placeholder: string;
  required: boolean;
};

export type ButtonProps = {
  innerText: string;
  onBtnClick: any;
};
