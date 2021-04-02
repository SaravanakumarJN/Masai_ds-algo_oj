function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i=i+2){
        var array = input_arr[i].trim().split(" ").map(Number)
        // console.log(array)
        var inversion_count = 0
        divide(array)
        console.log(inversion_count)
    }

    function divide(array){
        if(array.length == 1){
            return array
        }
        else{
            var mid = Math.floor((array.length)/2)
            var left = divide(array.slice(0, mid))
            var right = divide(array.slice(mid, array.length))
            return merger(left, right)
        }
    }

    function merger(left, right){
        var sorted = []
        var i = 0
        var j = 0
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                sorted.push(left[i])
                i++
            }
            else{
                inversion_count += (left.length - i)
                sorted.push(right[j])
                j++
            }
        }
        while(i < left.length){
            sorted.push(left[i])
            i++
        }
        while(j < right.length){
            sorted.push(right[j])
            j++
        }
        return sorted
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

runProgram(`6
6
6 3 7 4 6 9
9
2 9 8 5 6 10 6 8 7
10
1 8 9 6 8 6 1 8 2 3
5
5 9 4 2 3
9
3 8 3 4 6 1 6 4 3
4
2 5 6 2`)




