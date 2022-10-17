module.exports = (seconds = 0) => {
    seconds = Math.floor((seconds/1000)); // Not doing this seems to break the calculation
    let levels = [
      Math.floor(seconds / 31536000) || null, //Years
      Math.floor((seconds % 31536000) / 86400) || null, //Days
      Math.floor(((seconds % 31536000) % 86400) / 3600) || null, //Hours
      Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) || null, //Minutes
      Math.floor((((seconds % 31536000) % 86400) % 3600) % 60) || null, //Seconds
    ];
    return levels;
}