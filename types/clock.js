module.exports = (ms = 0) => {
    ms = Math.floor((ms/1000)); // Not doing this seems to break the calculation
    let levels = [
      Math.floor(ms / 31536000) || null, //Years
      Math.floor((ms % 31536000) / 86400) || null, //Days
      Math.floor(((ms % 31536000) % 86400) / 3600) || null, //Hours
      Math.floor((((ms % 31536000) % 86400) % 3600) / 60), //Minutes
      Math.floor((((ms % 31536000) % 86400) % 3600) % 60), //Seconds
    ];
    levels = levels.filter((level) => level !== null);
    for (let i = 1; i < levels.length; i++) {
      levels[i] = levels[i].toString().padStart(2, "0");
    }
    // join the array into a string with : as a separator
    let returntext = levels.join(":");
    return returntext;
}