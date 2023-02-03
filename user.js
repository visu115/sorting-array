let array1 = ['seetha', 'raman', 'raja', 'karthick', 'veera'];

function msort(arr){
    for(var i =0;i<arr.length;i++){

        console.log(arr[i]);

        for(var j= i+1;j<arr.length;j++){
            console.log(arr[j])

            if(arr[i]>arr[j]){
                console.log(arr[i],arr[j])

                let swap = arr[i];

                arr[i] = arr[j];

                arr[j] = swap;

                console.log(arr[j])
            }
        }
    }
return arr;
}
console.log(msort(array1))
