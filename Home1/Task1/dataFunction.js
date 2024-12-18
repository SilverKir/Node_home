

export function add(params, value) {

    if (params === "year") {
        let year = new Date().getFullYear() + value;
        console.log(new Date(new Date().setFullYear(year)).toISOString());
    } else if (params === "month") {

        let month = new Date().getMonth() + value;
        console.log(new Date(new Date().setMonth(month)).toISOString());

    } else if (params === "day") {
        let day = new Date().getDate() + value;
        console.log(new Date(new Date().setDate(day)).toISOString());
    } else if (params === "current") {
        console.log(new Date().toISOString());
    }
    else {
        console.log("params is not valid");
    }
}

export function sub(params, value) {
    add(params, -value);
}

export function current(params, value) {
    if (params === "year") {
        console.log(new Date().getFullYear());
    } else if (params === "month") {
        console.log(new Date().getMonth());
    } else if (params === "day") {
        console.log(new Date().getDate());
    } else {
        console.log(new Date().toISOString());
    }
}

export function dataFunction(action, argv) {
    let params = null;
    let value = null;

    if (argv.y) {
        params = "year";
        value = argv.y;

    } else if (argv.m) {
        params = "month";
        value = argv.m;
    } else if (argv.d) {
        params = "day";
        value = argv.d;
    } else {
        action = "current";
    }

    if (action === "add") {
        add(params, value);
    } else if (action === "sub") {
        sub(params, value);
    } else if (action === "current") {
        current(params, value);
    } else {
        console.log("action is not valid");
    }

}
