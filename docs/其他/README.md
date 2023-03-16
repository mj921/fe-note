# 其他

## rgba 转 rgb

```typescript
const rgbaToRgb = ({
  r,
  g,
  b,
  a,
  bgR = 255,
  bgG = 255,
  bgB = 255,
}: {
  r: number;
  g: number;
  b: number;
  a: number;
  bgR?: number;
  bgG?: number;
  bgB?: number;
}): { r: number; g: number; b: number } => {
  const calcVal = (val: number, bgVal: number) => (1 - a) * bgVal + a * val;
  return {
    r: calcVal(r, bgR),
    g: calcVal(g, bgG),
    b: calcVal(b, bgB),
  };
};
```
