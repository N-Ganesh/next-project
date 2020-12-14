import para from "../public/exampleParagraph";
const duplicatePara = (times) => {
  let myPara = para;
  for (let i = 1; i < times; i++) {
    myPara += para;
  }
  return myPara;
};
const helloWorld = () => {
  console.log("Hello World");
};
export { duplicatePara, helloWorld };

export default duplicatePara;
