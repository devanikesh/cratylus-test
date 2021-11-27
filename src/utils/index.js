export const saveJSONToFile = (obj) => {
  const element = document.createElement("a");
  const textFile = new Blob([JSON.stringify(obj, null, 4)], { type: "text/plain" });
  element.href = URL.createObjectURL(textFile);
  element.download = "divs.json";
  document.body.appendChild(element);
  element.click();
};
