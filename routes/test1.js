// const numbers = [8,7,1,2,3,4,5];

// const findSecondHigest = () => {
//     var highest = 0;
//     var secondHighest = 0;
//     for(var i = 0; i < numbers.length - 1; i++) {
//         if(numbers[i] > highest) {
//             highest = numbers[i];
//         }
//     }
//     for(var i = 0; i < numbers.length - 1; i++) {
//         if(numbers[i] > secondHighest && numbers[i] != highest) {
//             secondHighest = numbers[i];
//         }
//     }
//     console.log("Highest Number: " + highest);
//     console.log("Second Highest: " + secondHighest);
// }

// findSecondHigest(numbers);

// const numbers1 = [1,1,1,2,2,1,1,3,3];

// const findDuplicate = () => {
//     var duplicates = 0;
//     var duplicatesArray = [];
//     for(var i = 0; i < numbers1.length; i++) {
//         if(numbers1[i] == numbers1[i + 1]) {
//             if(!duplicatesArray.includes(numbers1[i])) {
//                 duplicatesArray.push(numbers1[i]);
//             }
//             duplicates++;
//         }
//     }
//     console.log(duplicates);
//     console.log(duplicatesArray);
// }

// findDuplicate();


var array = [{
    name: 'sajjad',
    age: 21
}, {
    name: 'umair',
    age: 21
}];

var newArray = array.filter((data) => data.name === 'umair');
console.log(newArray);

var numbers = [1,2,3,4,5];

const reverseArray = () => {
    for(var i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i])
    }
}

reverseArray();

const updateName = () => {
    for(var i = 0; i < array.length; i++) {
        if(array[i].name === "sajjad") {
            array[i].name = "Ali";
        }
    }
}

updateName();
console.log(array);

var names = {
    id: 1,
    name: 'sajjad',
    age: 21
}

names.age = 23;

console.log(names)

const unsortedArray = [5,3,2,4,1];

const sorting = (array1) => {
    for(var i = 0; i < array1.length; i++) {
        for(var j = 0; j < array1.length - i - 1; j++) {
            if(array1[i] > array1[j]) {
                var temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }
    console.log(array1);
}
sorting(unsortedArray);


