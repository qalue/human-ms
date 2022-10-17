const types = {
    clock: require("./types/clock"),
    full: require("./types/full"),
    fullLowercase: require("./types/fullLowercase"),
    short: require("./types/short"),
}

function error(message) {
    return new Error(`human-ms\n-------------------------------------------\n${message}\n-------------------------------------------`);
}

module.exports = (ms=0, type="clock") => {
    if (typeof ms != "number") return error(`Value 'ms' must be of type 'number'. Given type: '${typeof ms}'`);

    return types[type](parseInt(ms));
}
