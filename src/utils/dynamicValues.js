export const dynamicValues = (content, type) => {
  let dvalue = content.map((item) => item[type]);
  if (type === "colors") {
    dvalue = dvalue.flat();
  }
  return ["all", ...new Set(dvalue)];
};
