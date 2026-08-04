// ติดตั้ง zod
// ติดตั้ง resolver
// npm install zod
// npm install @hookform/resolvers

  // false in JavaScript
  console.log(Boolean(0))
  console.log(Boolean(''))
  console.log(Boolean(null))
  console.log(Boolean(NaN))
  console.log(Boolean(undefined))

  // OR คือ first true หาค่าจริงค่าแรก ถ้าไม่มีจริงๆจะเอาค่าสุดท้าย
  const result = 0 || undefined || '' || null;
  console.log(result) // ได้ null

  // AND คือ first false หาค่า false ค่าแรก
  const result2 = 1 && null && 0
  console.log(result2) // ได้ null