
function getTriangleArea(a, h) {
	if (a<= 0 && h<=0) {
		console.log('Nieprawidłowe dane');
	}
	else {
		return a*h/2
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(18, 6);
var triangle2Area = getTriangleArea(5, 5);
var triangle3Area = getTriangleArea(47, 100);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);