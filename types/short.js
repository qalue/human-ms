module.exports = (ms = 0) => {
    const levels = require("./_levels_")(ms);
    
    let returntext = new String();
    levels.reverse();
    for (const i in levels) {
      if (levels[i] == null) continue;

      if (i == 0) returntext = levels[i]+"s "+returntext;
      if (i == 1) returntext = levels[i]+"m "+returntext;
      if (i == 2) returntext = levels[i]+"h "+returntext;
      if (i == 3) returntext = levels[i]+"d "+returntext;
      if (i == 4) returntext = levels[i]+"y "+returntext;
    };
    return returntext.trim();
}