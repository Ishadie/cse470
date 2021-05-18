const BalanceValue= require('./balance');
test ('Should calculate the balance', () =>{
  expect(BalanceValue(1000,500)).toBe(500);
} );