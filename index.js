let uzer = {
    name: "Andrew",
    surename: "Garfield",
    age: 40,
    passport: {
        number: 543366422,
        birthday: "20.08.1983",
        dateOFissue: "20.08.1998",
        dateExpiry: "20.08.2008",
        burn: "Los Angeles, California, USA"
    },
    job: "actor"
}

let uzer2 = {
    name: "Tobey",
    surename: "Maguire",
    age: 48,
    passport: {
        number: 334785338,
        birthday: "20.08.1975",
        dateOFissue: "20.08.1990",
        dateExpiry: "20.08.2000",
        burn: "Santa Monica, California, USA"
    },
    job: "actor"
}

let newUzer = Object.assign({}, uzer, uzer2);
let keys = Object.keys(newUzer);
let values = Object.values(uzer);
let arr = keys.concat(values);

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
};

arr.forEach(element => {
    if (typeof element === "string") {
        types.string.push(element);
    } else if (typeof element === "number") {
        types.number.push(element);
    } else if (typeof element === "object") {
        types.object.push(element);
    } else if (typeof element === "boolean") {
        types.boolean.push(element);
    }
});


console.log(newUzer);
console.log(values);
