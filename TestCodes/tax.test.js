const VATinclusivePrice= require('./taxrunner');
test ('Should calculate the VAT inclusive price', () =>{
  expect(VATinclusivePrice(100,10)).toBe(110);
} );