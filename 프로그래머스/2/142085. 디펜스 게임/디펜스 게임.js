function solution(n, k, enemies) {
    var answer = 0;
    
        class MinHeap {
        constructor() {
            this.heap = []
            this.size = 0;
        }
        push(number) {
            this.heap.push(number);
            this.bubbleUp();
            this.size++;
            // console.log(this.heap, this.size);
        }
        
        bubbleUp() {
            let childIdx = this.size;
            let parentIdx = Math.floor((childIdx-1)/2);
            while(this.heap[childIdx] < this.heap[parentIdx]){
                this.swap(childIdx,parentIdx);
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx-1)/2);
            }            
        }
        
        pop() {
            const popped = this.heap[0];
            // console.log(`popped: ${popped}`);
            const last = this.heap[this.size-1];
            // console.log(`last:${last}`);
            this.heap[0] = last;
            this.heap.pop();
            this.bubbleDown();
            this.size--;
            return popped;
        }
        
        bubbleDown() {
            let parentIdx = 0;
            let leftIdx = parentIdx * 2 +1;
            let rightIdx = parentIdx * 2 +2;
            
            while(true) {
                let swapIdx = null;
                if(this.size >= leftIdx && this.heap[parentIdx] > this.heap[leftIdx]) {
                    swapIdx = leftIdx;
                }

                if(this.size >= rightIdx && this.heap[parentIdx] > this.heap[rightIdx] && this.heap[leftIdx] > this.heap[rightIdx]) {
                    swapIdx = rightIdx;
                }

                if(swapIdx !== null) {
                    this.swap(parentIdx, swapIdx);
                    parentIdx = swapIdx;
                    leftIdx = parentIdx * 2 +1;
                    rightIdx = parentIdx * 2 +2;    
                }else {
                    break;
                }
            } 
        }
        
        
        swap(a,b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }
    }

    
    
    // 일단 무적권을 쓴다. (일단 queue에 넣는다.)
    const minHeap = new MinHeap(k+1);
    let currentCount = 0;
    for(let i = 0 ; i<enemies.length; i++) {
        const enemy = enemies[i];
        // console.log(`-------enemy: ${enemy}-------`);
        minHeap.push(enemy);
        answer++;
        // console.log(minHeap.heap);
        if(minHeap.size > k) {
            const shifted = minHeap.pop();
            currentCount += shifted;
            // console.log(`shifted: ${shifted}, currentCount :${currentCount} `)
            
            if(currentCount >n) {
                return answer-1;
            }
        }
    }
    
    return answer;
}