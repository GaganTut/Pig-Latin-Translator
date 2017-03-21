var pigTranslationModule = function() {

  function toPig(englishString) {
    var testString = englishString.toLowerCase();
    var strArray = testString.split(" ");
    var newPigSent = "";

    for (var i = 0; i < strArray.length; i++) {
      var prePigWord = strArray[i].split("");
      for (var j = 0; j < prePigWord.length; j++) {
        if (prePigWord[j] === "a" || prePigWord[j] === "e" || prePigWord[j] === "i" || prePigWord[j] === "o" || prePigWord[j] === "u") {
          prePigWord.push("-" + prePigWord.splice(0, j).join("") + "ay");
          break;
        }
      }
      newPigSent += prePigWord.join("") + " ";
    }
    return newPigSent;
  }

  function toEnglish(pigString) {
    var lowerString = pigString.toLowerCase();
    var strArray = lowerString.split(" ");
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
    return newEngSent;
  }


  return {
    toPig,
    toEnglish
  };
}();


console.log(pigTranslationModule.toPig("This is a super long test to see if my code is working"));
console.log(pigTranslationModule.toPig("Uganda is a country"));
console.log(pigTranslationModule.toEnglish("ig-Pay appy-hay uck-day"));