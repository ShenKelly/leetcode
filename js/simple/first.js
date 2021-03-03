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

// console.log(isValid("()"))

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let cur_l1 = chainList(l1), cur_l2 = chainList(l2), l3 = new ListNode('head'),l4 = [];
    
    // 如果两个链表都走到了最后，则结束while循环。
    while(!(cur_l1===null && cur_l2===null)) {
        // 将链表2的值更新到L3，并且L2的指针往下走。
        if (!cur_l1 || (cur_l2 && cur_l1.val >= cur_l2.val)) {
            l3 = listPush(l3, new ListNode(cur_l2.val))
            console.log(l3);
            cur_l2 = cur_l2.next
        }  else {  // 将链表1的值更新到L3，并且L1的指针往下走。
            l3 = listPush(l3, new ListNode(cur_l1.val))
            console.log(l3)
            cur_l1 = cur_l1.next
        }
    }
    while(l3.next){
        console.log(l3.next);
        console.log(l3.val);
        l4.push(l3.val);
        l3 = l3.next;
    }
    // return l3.next
    return l4;
};
function listPush(list, item) {
    let cur = list
    while(cur.next !== null) {
        cur = cur.next
    }
    cur.next = item
    
    return list
}

// 链表节点
class ListNode{
    constructor(val) {
        this.next = null
        this.val = val                
    }
}
//将数组转化为链表
function chainList(arr){
    let head = new ListNode(arr[0]);
    let tail = head;
    for (let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        tail.next = node;
        tail = node;
    }
    return head;
}

// 构建一个栈
const createStack = () => {
    class Stack{
        constructor(){
            this.top = 0;
            this.stores = [];
        }
        push(item){
            this.top++;
            return this.stores.push(item)
        }
        pop(){
            this.top--
            return this.stores.pop()
        }
        peer(){
            return this.stores[this.stores.length-1]
        }
        isEmpty(){
            return this.top == 0;
        }
    }
    return new Stack();
}
// console.log(mergeTwoLists([1,2,4],[2,3,5]))
// console.log(chainList([1,2,3]))

// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i in nums){
        if(nums[i]!=nums[k]){
            console.log('rrr',i);
            console.log('kkk',nums[k]);
            k++;
            nums[k]=nums[i];
            console.log('ccc',nums[k]);
        }
    }
    console.log(nums);
    return k+1;
};


// console.log(removeDuplicates([1,3,3,6,4,6]));



// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
var removeElement = function(nums, val) {
    let k = 0;
    for(let i in nums){
        if(nums[i]!=val){
            nums[k] = nums[i];
            k++;
        }
    }
    console.log(nums);
    return k;
};
console.log(removeElement([3,2,2,3],3));