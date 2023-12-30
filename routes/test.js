const array = ["apple","orange","apple", "banana", "orange", "apple", "kiwi"];

const checkRepition = () => {
    const map = {

    }

    for(var i = 0; i < array.length;i ++) {
        if(map.hasOwnProperty(array[i])) {
            map[array[i]] ++;
        }
        else {
            map[array[i]] = 1;
        }
    }

    console.log(map);

    for(var key in map) {
        if(map[key] > 1) {
            console.log(`${map[key]} ${key}(s) in the array`);
        }
    }
}

checkRepition(array);