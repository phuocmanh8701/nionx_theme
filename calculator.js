const chieuDai = document.getElementById("cal-length");
const chieuRong = document.getElementById("cal-width");
const chieuCao = document.getElementById("cal-depth");
const btnEqual = document.getElementById("btn-cal");
const equal = document.querySelector("#areaResult");
const equal2 = document.querySelector("#areaResult2");

const lengthUnit = document.getElementById("length-unit");
const widthUnit = document.getElementById("width-unit");
const depthUnit = document.getElementById("depth-unit");

function convertToCentimeter(value, unit) {
  switch (unit) {
    case "inch":
      return value * 2.54;
    case "foot":
      return value * 30.48;
    case "meter":
      return value * 100;
    case "centimeter":
    default:
      return value;
  }
}

btnEqual.addEventListener(`click`, () => {
  const length = parseFloat(chieuDai.value);
  const width = parseFloat(chieuRong.value);
  const depth = parseFloat(chieuCao.value);
  const lengthInCm = convertToCentimeter(length, lengthUnit.value);
  const widthInCm = convertToCentimeter(width, widthUnit.value);
  const depthInCm = convertToCentimeter(depth, depthUnit.value);

  if (
    isNaN(length) ||
    isNaN(width) ||
    isNaN(width) ||
    length <= 0 ||
    width <= 0 ||
    depth <= 0
  ) {
    alert("Khong duoc de trong");
    return;
  }
  const dienTich = lengthInCm * widthInCm;
  //   console.log("dien tich " + dienTich);
  const theTich = depthInCm * dienTich;
  //   console.log("the tich " + theTich + "");
  const metKhoi = theTich / 27;
  const cubicFeet = metKhoi / 30.48;
  const yard = metKhoi * 27;
  equal.textContent = `cubicFeet = ${cubicFeet}, Cubic The Tich = ${theTich}, cubicYard = ${yard}`;
});
