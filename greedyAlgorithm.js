//그리디 알고리즘 : 가장 최적의 답을 찾는 알고리즘
// ex_잔돈 거슬러 주는 문제 알고리즘_낸 돈(money)를 입력했을 때, 최소로 줄 수 있는 거스름돈의 갯수를 출력

function greedyAlgorythm(money){
    console.log(`=========START=========`);
    if(typeof money!=='number' || money===0 || money<0) return -1;
    const money_unit=[10000,5000,1000,500,100,50,10]; //length=7
    let result=0;
    
    for(let index=0;index<money_unit.length;index++){
        if(money%money_unit[index]===0){
            result+=money/money_unit[index];
            money=0;
            console.log(`money : ${money_unit[index]}, result : ${result}, current_money : ${money}`);
            if(money===0) return result;
            console.log('Error Occured');
        }

        if(money>money_unit[index]){
            result+=Math.floor(money/money_unit[index]);
            money%=money_unit[index];
            console.log(`money : ${money_unit[index]}, result : ${result}, current_money : ${money}`);
        }
    }   
    console.log(`=========END=========`);
}
greedyAlgorythm(6100);
greedyAlgorythm(7420);
greedyAlgorythm(8720);
greedyAlgorythm(13800);
greedyAlgorythm(15200);