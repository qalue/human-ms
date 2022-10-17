module.exports = (ms = 0) => {
    const levels = require("./_levels_")(ms);
    
    let returntext = new String();
    levels.reverse();
    for (const i in levels) {
      if (levels[i] == null) continue;
      if (i == 0) returntext = (levels[i]===1 && levels[i]+" second "+returntext) || levels[i]+" seconds "+returntext;
      if (i == 1) returntext = (levels[i]===1 && levels[i]+" minute "+returntext) || levels[i]+" minutes "+returntext;
      if (i == 2) returntext = (levels[i]===1 && levels[i]+" hour "+returntext) || levels[i]+" hours "+returntext;
      if (i == 3) returntext = (levels[i]===1 && levels[i]+" day "+returntext) || levels[i]+" days "+returntext;
      if (i == 4) returntext = (levels[i]===1 && levels[i]+" year "+returntext) || levels[i]+" years "+returntext;
    };
    return returntext.trim();
}
