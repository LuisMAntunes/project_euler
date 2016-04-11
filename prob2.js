var n1 = 1;
var n2 = 2;
var new_n=0;
var sum = 2;
while (new_n < 4000000){
	if (new_n%2 ===0) {
		sum+=new_n;
		console.log('Term: ' +new_n);
		console.log('Sum: ' +sum);
	};
	new_n=n1+n2;
	n1=n2;
	n2=new_n;
}
