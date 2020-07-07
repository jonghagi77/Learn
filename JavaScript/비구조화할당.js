/**
 * 객체의 비구조화 할당
 * 중괄호 {} 안에 속성 이름을 넣어 객체의 여러 속성을 한 꺼번에 가져온다.
 */

 var obj = {a: 1, b: 2, c: 30, d: 44, e: 5};

 var {a, c} = obj; //변수 하나에 값을 하나하나 할당 하던 것을 속성 값은 변수로 가지고 와서 한꺼번에 할당한다.

 console.log(`a >>> ${a}`);
 console.log(`c >>> ${c}`);

 var {a: newA=10, f: newF=5} = obj; //a라는 속성 값을 가지고와서 newA에 할당, f라는 속성 값을 가지고와서 newF에 할당한다. 이때 속성 값이 없는 경우에는 기본값 newA=10, newF=5 를 할당한다.
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);