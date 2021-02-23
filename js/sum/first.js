// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

var twoSum = function(nums, target) {
    const prevNums = {};       // 存储出现过的数字，和对应的索引               

  for (let i = 0; i < nums.length; i++) { // 遍历元素   
    const curNum = nums[i];               // 当前元素   
    const targetNum = target - curNum;    // 满足要求的目标元素   
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) { // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {                   // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i;  // 存入当前的元素和对应的索引
    }
  }
};

// console.log(twoSum([3,2,4],6));

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
var reverse = function(x) {
    // let a = JSON.stringify(x).match(/\d/g).reverse().join('');
    let num=x;
    let target = 0;
    while(num!=0){
        console.log(num);
        target = target * 10 + num%10;
        num=~~(num/10);
    }
    //  |0 溢出判断
    return (target|0)===target?target:0;
};
// console.log(reverse(123));


// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
var isPalindrome = function(x) {
    // let num=x;
    // let target = 0;
    // while(num!=0){
    //     target = target * 10 + num%10;
    //     num=~~(num/10);
    // }
    // if(target==x&&x>0){
    //     return true;
    // }else{
    //     return false;
    // }
    let a = JSON.stringify(x).match(/\d/g).reverse().join('');
    if(~~a==x){
        return true;
    }else{
        return false;
    }
};

// console.log(isPalindrome(-11311));

// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
var romanToInt = function(s) {
    let target = [];
    for(let i in s){
        switch(s[i]){
            case 'I':
                target.push(1);
                break;
            case 'V':
                target.push(5);
                break;
            case 'X':
                target.push(10);
                break;
            case 'L':
                target.push(50);
                break;
            case 'C':
                target.push(100);
                break;
            case 'D':
                target.push(500);
                break;
            case 'M':
                target.push(1000);
                break;
        }
    }
    let result = target[target.length-1];
    console.log(target);
    for(let i=target.length-2;i>=0;i--){
        if(target[i]<target[i+1]){
            result-=target[i];
        }else{
            result+=target[i];
        }
    }
    return result;

};
// console.log(romanToInt('IXMD'));



// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

// 'A' : Absent，缺勤
// 'L' : Late，迟到
// 'P' : Present，到场
// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。

// 你需要根据这个学生的出勤记录判断他是否会被奖赏。

// 示例 1:

// 输入: "PPALLP"
// 输出: True
// 示例 2:

// 输入: "PPALLL"
// 输出: False
var checkRecord = function(s) {
    // return !(/A[B-Z]*A|LLL/.test(s));
    return !(s.includes('LLL')||s.indexOf('A')==s.lastIndexOf('A'));
};

console.log(checkRecord('"PPALLL"'));