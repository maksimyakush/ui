import { SetStateAction, useState, Dispatch } from "react";

type Props<T> = {
  defaultValue?: T;
  onChange?: (value: T) => void;
  value?: T;
};

export const useControlledState = <T>({
  value,
  onChange,
  defaultValue,
}: Props<T>): [
  T,
  Dispatch<SetStateAction<T>> | Required<Props<T>["onChange"]>
] => {
  if (!value && !defaultValue) {
    throw new Error("You must provide either a value or a defaultValue");
  }

  if (value && defaultValue) {
    throw new Error(
      "You try to change a controlled component to be uncontrolled"
    );
  }

  if (defaultValue) {
    return useState(defaultValue);
  }
  if (value && onChange) {
    return [value, onChange];
  }

  throw new Error("Please, provide onChange prop!");
};
