type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;

type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]["length"];
type Subtract<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest]
    ? Rest["length"]
    : never;

export type ToLowercase<T> = `${Lowercase<string & T>}`;

export type RangeOf<
  start extends number,
  end extends number,
  R extends unknown[] = [start]
> = R["length"] extends Subtract<end, start>
  ? [...R, end][number]
  : RangeOf<start, end, [...R, Add<start, R["length"]>]>;

export type GlobalProps = {
  mt?: RangeOf<1, 10>;
  mb?: RangeOf<1, 10>;
  ml?: RangeOf<1, 10>;
  mr?: RangeOf<1, 10>;
  m?: RangeOf<1, 10>;
  mx?: RangeOf<1, 10>;
  my?: RangeOf<1, 10>;
  pt?: RangeOf<1, 10>;
  pb?: RangeOf<1, 10>;
  pl?: RangeOf<1, 10>;
  pr?: RangeOf<1, 10>;
  p?: RangeOf<1, 10>;
  px?: RangeOf<1, 10>;
  py?: RangeOf<1, 10>;
};
