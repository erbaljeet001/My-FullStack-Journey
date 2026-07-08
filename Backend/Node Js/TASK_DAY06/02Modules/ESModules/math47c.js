export const fun = (a,b) =>
{
  console.log(`before swapping : a = ${a} and b =${b}`);
  
  let temp = a;
  a = b;
  b = temp;
  console.log(`before swapping : a = ${a} and b =${b}`);

}

