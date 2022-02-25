const testFun= require('./index');
// all positive  test
test('test for fullName like Rahul thakur ',()=>{
    expect(testFun.getFullName("Rahul" ,"Thakur")).toBe("Rahul Thakur");
});
test('test for Ramesh Thakur result into Ramesh thakur ',()=>{
    expect(testFun.getFullName("Ramesh" ,"Thakur")).toBe("Ramesh Thakur");
});

test('test for Rajesh Thakur result into Rajesh thakur',()=>{
    expect(testFun.getFullName("Rajesh" ,"Thakur")).toBe("Rajesh Thakur");
});
test('test for Rakesh Thakur result into Rakesh thakur ',()=>{
    expect(testFun.getFullName("Rakesh" ,"Thakur")).toBe("Rakesh Thakur");
});

//all Negative Test

test('test for Rahul Thakur not resul into Rahul  ',()=>{
    expect(testFun.getFullName("Rahul" ,"Thakur")).not.toBe("Rahul");
});
test('test for Ramesh Thakur  not result into Ramesh  ',()=>{
    expect(testFun.getFullName("Ramesh" ,"Thakur")).not.toBe("Ramesh");
});

test('test for Rajesh Thakur  not result into Rajesh ',()=>{
    expect(testFun.getFullName("Rajesh" ,"Thakur")).not.toBe("Rajesh");
});
test('test for Rakesh Thakur not result into Rakesh  ',()=>{
    expect(testFun.getFullName("Rakesh" ,"Thakur")).not.toBe("Rakesh");
});
// **************** Palidrome Program testing ************************** 
//all the positive test
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPalidrome("dad")).toBe(true);
});
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPalidrome("mom")).toBe(true);
});
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPalidrome("vav")).toBe(true);
});
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPalidrome("fof")).toBe(true);
});
//Negative Test 
test('testing of the palindrome program of all the Negative test  ',()=>{
    expect(testFun.isPalidrome("Rakesh")).not.toBe(true);
});
test('testing of the palindrome program of all the Negative test  ',()=>{
    expect(testFun.isPalidrome("Rajesh")).not.toBe(true);
});
test('testing of the palindrome program of all the Negative test  ',()=>{
    expect(testFun.isPalidrome("Rmaesh")).not.toBe(true);
});
test('testing of the palindrome program of all the Negative test  ',()=>{
    expect(testFun.isPalidrome("Rahul")).not.toBe(true);
});

// ******************Circle circumference  testing ************************
//All  the positive test 
test('testing circumference of the cirlce of radius 4 is: ',()=>{
    expect(testFun.isCircumfrence(4)).toBe('The circumference is 25.12');
});
test('testing circumference of the cirlce of radius 5 is: ',()=>{
    expect(testFun.isCircumfrence(5)).toBe('The circumference is 31.400000000000002');
});

test('testing circumference of the cirlce of radius 6 is: ',()=>{
    expect(testFun.isCircumfrence(6)).toBe('The circumference is 37.68');
});

test('testing circumference of the cirlce of radius 7 is: ',()=>{
    expect(testFun.isCircumfrence(7)).toBe('The circumference is 43.96');
});

// all the negative test for circle Circumfrence
test('testing circumference of the cirlce of radius 4 is: ',()=>{
    expect(testFun.isCircumfrence(4)).not.toBe(' 25.12');
});
test('testing circumference of the cirlce of radius 5 is: ',()=>{
    expect(testFun.isCircumfrence(5)).not.toBe(' 31.400000000000002');
});

test('testing circumference of the cirlce of radius 6 is: ',()=>{
    expect(testFun.isCircumfrence(6)).not.toBe(' 37.68');
});

test('testing circumference of the cirlce of radius 7 is: ',()=>{
    expect(testFun.isCircumfrence(7)).not.toBe(' 43.96');
});

// ***************   Testing the area of the circle ******************* 
//All the positive test for area of circle
test('testing  area of the circle  of Radius 4 is : ',()=>{
    expect(testFun.getArea(4)).toBe('The area is 50.24');
});

test('testing  area of the circle  of Radius 5 is : ',()=>{
    expect(testFun.getArea(5)).toBe('The area is 78.5');
});

test('testing  area of the circle  of Radius 6 is : ',()=>{
    expect(testFun.getArea(6)).toBe('The area is 113.04');
});

test('testing  area of the circle  of Radius 7 is : ',()=>{
    expect(testFun.getArea(7)).toBe('The area is 153.86');
});

//All the negative  test for the area of circle
test('testing  area of the circle  of Radius 4 is : ',()=>{
    expect(testFun.getArea(4)).not.toBe('50.24');
});

test('testing  area of the circle  of Radius 5 is : ',()=>{
    expect(testFun.getArea(5)).not.toBe('78.5');
});

test('testing  area of the circle  of Radius 6 is : ',()=>{
    expect(testFun.getArea(6)).not.toBe('113.04');
});

test('testing  area of the circle  of Radius 7 is : ',()=>{
    expect(testFun.getArea(7)).not.toBe('153.86');
});
