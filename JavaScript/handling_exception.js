/**
 * 예외처리하기
 * 에러 처리의 방법은 크게 2가지로 볼 수 있다.
 * 1. throw문
 *   - throw문으로 처리하면 에러 발생시 프로그램이 종료 됨
 * 
 * 2. try-catch-finally 문
 *   - try 블록에서 발생한 에러가 catch문의 변수로 전달 됨.
 *   - finally 블록은 에러 발생 여부와 관계 없이 실행 되는 블록.
 */

//throw
function checkNumber(val){
    if(typeof val !== 'number'){
        throw '유효하지 않은 값입니다.';
    }

    console.log('number형 확인');
}

checkNumber(100);
//checkNumber('Wrong type');
console.log("완료");
//console에 '완료'가 찍히지 않고, 프로그램이 종료됨

//try-catch-finally
function checkNumber2(val){
    if(typeof val !== 'number'){
        throw '유효하지 않은 값입니다.';
    }
    console.log('number형 확인');
}

try{
    checkNumber2(100);
    checkNumber2('Wrong Type');
} catch(e){
    console.log(`에러가 발생하였습니다 >>> ${e}`);
} finally {
    console.log("완료");
}