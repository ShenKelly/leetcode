// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

var longestCommonPrefix = function(strs) {
    let result = false;
    let res = [];
    if (strs.length < 1) return '';
    strs.sort((a,b)=>{
        if(a.length<b.length){
            return -1;
        }else{
            return 0;
        }
    })
    let string = (strs.length && strs[0]) || '';
    if(string.length<1){
        return '';
    }else{
        for(let i=0;i<string.length;i++){
            result = strs.slice(1).every(item => {
                console.log(item[i]);
                console.log(string[i]);
                return item[i] === string[i] 
            })
            if(result){
                res.push(string[i]);
            }else{
                return res.join('');
            }
        }
        return res.join('');
    }
}


// console.log(longestCommonPrefix(["cir","car"]));

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

var isValid = function(s) {
    if(s.length%2!=0){
        return false;
    }else{
        while(s.indexOf('()')!=-1||s.indexOf('[]')!=-1||s.indexOf('{}')!=-1){
            s = s.replace('()', '').replace('[]', '').replace('{}', '');
        }
        console.log(s);
        if(s.length>0){
            return false;
        }else{;
            return true
        }
    }
};

console.log(isValid("()"))
