import { GLOBAL_PROPS } from "../constants";

export const extractGlobalProps = (props: any) => {
  const globalProps: any = {};
  const rest: any = {};
  Object.keys(props).forEach((key) => {
    if (GLOBAL_PROPS.includes(key)) {
      globalProps[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  });
  return { globalProps, rest };
};

export const getGlobalPropsClasses = ({
  mt,
  mb,
  ml,
  mr,
  m,
  mx,
  my,
  pt,
  pb,
  pl,
  pr,
  p,
  px,
  py,
  h,
  w
}: any) => {
  const values = new Map([
    ["mt", mt],
    ["mb", mb],
    ["ml", ml],
    ["mr", mr],
    ["m", m],
    ["mx", mx],
    ["my", my],
    ["pt", pt],
    ["pb", pb],
    ["pl", pl],
    ["pr", pr],
    ["p", p],
    ["px", px],
    ["py", py],
    ["h", h],
    ["w", w]
  ]);

  const result = Array.from(values).reduce((acc, [key, value]) => {
    return value !== undefined ? `${acc} ${key}-${value}` : acc;
  }, "");

  return result;
};
