var pigTranslationModule = function() {

  function toPig(string) {
    let strArray = string.split(" ");
    let pigSent = "";

    for (var i = 0; i < strArray.length; i++) {
      let prePig = strArray[i].split("");
      for (var j = 0; j < prePig.length; j++) {
        if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(prePig[j]) !== -1) {
          if (j === 0) {
            prePig.push("-ay");
            break;
          } else {
            prePig.push("-" + prePig.splice(0, j).join("") + "ay");
            break;
          }
        }
      }
      pigSent += prePig.join("") + " ";
    }
    pigSent = pigSent.split("");
    pigSent.pop();
    pigSent = pigSent.join("");
    return pigSent;
  }

  function toEnglish(pigString) {
    var strArray = pigString.split(" ");
    var newEngSent = "";

    for (var i = 0; i < strArray.length; i++) {
      var preEngWord = strArray[i].split("");
      var findDash = preEngWord.lastIndexOf("-");
      var cutPigTail = preEngWord.splice(findDash);
      cutPigTail.shift();
      cutPigTail.pop();
      cutPigTail.pop();
      preEngWord.unshift(cutPigTail.join(""));

      newEngSent += preEngWord.join("") + " ";
    }
    newEngSent = newEngSent.split("");
    newEngSent.pop();
    newEngSent = newEngSent.join("");
    return newEngSent;
  }


  return {
    toPig,
    toEnglish
  };
}();

module.exports = pigTranslationModule;