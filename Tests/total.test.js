const calculateTotal= require ("./total");
test ('Should calculate the total income/expense', () =>{
    expect(calculateTotal([100,200,300,400])).toBe(1000);
  } );