class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        # l=1
        # h=max(arr)
        # r=[]
        # for i in range(l,h+k+1):
        #     if i in arr:
        #         continue
        #     else:
        #         r.append(i)
        # # if len(r)>=k:
        # #     return r[k-1]
        # ans=r[k-1]
        # return ans 
        l=0
        h=len(arr)-1
        while(l<=h):
            mid=(l+h)//2
            missingArray=arr[mid]-(mid+1)
            if missingArray<k:
                l=mid+1
            else:
                h=mid-1
        return l+k
         
        
