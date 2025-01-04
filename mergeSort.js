function mergeSort(array){
    if (array.length <= 1){
        return array;
    }
    const mid = array.length / 2;//split array into 2
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right); 
}

    function merge(left, right){
        const merged = []
        let i = 0, j = 0

        while(i < left.length && j < right.length){ //compare numbers 
            if(left[i] <= right[j]){
                merged.push(left[i++]);//push number then increase index pointer
            }else{
                merged.push(right[j++]);
            }
        }
        return merged.concat(left.slice(i)).concat(right.slice(j));//merge left and right sorted array
    }

const myArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
const myArray2 = [105, 79, 100, 110];
const sortedArray1 = mergeSort(myArray1);
const sortedArray2 = mergeSort(myArray2);
console.log(`Sorted List: ${sortedArray1}`);
console.log(`Sorted List: ${sortedArray2}`);
