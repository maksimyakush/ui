import React, { useEffect, useRef } from "react";
import { Spinner as SpinnerJs } from "spin.js";
import "spin.js/spin.css";

type SpinnerProps = {
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  bg?: boolean;
};

type SpinnerJsProps = {
  length: number;
  width: number;
  radius: number;
};

type SizeMaps<T = SpinnerJsProps> = {
  [k in NonNullable<SpinnerProps["size"]>]: T;
};

const SIZE_MAPS: SizeMaps = {
  sm: {
    length: 2,
    width: 1,
    radius: 4,
  },
  md: {
    length: 8,
    width: 4,
    radius: 8,
  },
  lg: {
    length: 12,
    width: 8,
    radius: 14,
  },
};

export const Spinner = ({
  loading = false,
  size = "md",
  bg = false,
}: SpinnerProps) => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinner = new SpinnerJs({
      color: "var(--ds-color-secondary-light)",
      ...SIZE_MAPS[size],
    });
    if (spinnerRef.current && loading) {
      spinner.spin(spinnerRef.current);
    }

    return () => {
      spinner.stop();
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <div
          className={`relative h-full ${bg && "bg-grey-700"}`}
          ref={spinnerRef}
        ></div>
      )}
    </>
  );
};
