/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // let l=1
    // let h=Math.max(...arr)
    // let r=[]
    // for (let i=l ;i<=h+k;i++) {
    //     if ( arr.includes(i)){
    //         continue
    //     }else{
    //         r.push(i)
    //     }
    // }
    // let ans=r[k-1]
    // return ans

    let l=0
    let h= arr.length - 1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        let missingArray=arr[mid]-(mid+1)
        if (missingArray<k){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return l+k
};
