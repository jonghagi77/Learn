/**
 * 배열의 비구조화 할당
 * 배려의 비구조화 할당은 대괄호[] 안에 있는것을 순서대로 가지고 와서 할당한다.
 * var b = arr[0];
 * var c = arr[1];
 * 이런 식으로 각각 할당하던 것을 한 번에 할당 할 수 있다.
 */

 var arr = [1, 2, 30, 44 ,5];

 var [b, c, ...rest] = arr; //arr배열에 있는 값을 순서대로 b, c에 할당한다. '...'는 나머지 값을 의미한다. 따라서 arr의 나머지 값들은 rest 라는 변수에 할당한다.

 console.log(`0) b >>>> ${b}`);
 console.log(`0) c >>>> ${c}`);
 console.log(`0) rest >>> ${rest}`);

 var [a=10, f=9] = [1]; // 배열 [1] 에서 순서대로 값을 가지고 와서 각각 a, f에 할당한다. 이때 f는 배열 [1]에서 할당 받을 것이 없으므로 9로 할당한다.

console.log(`1) a >>>> ${a}`);
console.log(`1) f >>>> ${f}`);

[a, f] = [f, a];

console.log(`2) a >>>> ${a}`);
console.log(`2) f >>>> ${f}`);

function getArr(){
    return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr();
console.log(`3) a >>>> ${a}`);
console.log(`3) f >>>> ${f}`);