var n = 600851475143;
var list = [];
var i = 2;
while(n>1){
	while(n%i===0){
		n/=i;
		list.push(i);
	}
	i++;
}

console.log(list)