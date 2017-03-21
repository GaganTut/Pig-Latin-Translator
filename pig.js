var pigTranslationModule = function() {

  function toPig(englishString) {
    var strArray = englishString.split(" ");
    var newPigSent = "";

    for (var i = 0; i < strArray.length; i++) {
      var prePigWord = strArray[i].split("");
      for (var j = 0; j < prePigWord.length; j++) {
        if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(prePigWord[j] !== -1)) {
          prePigWord.push("-" + prePigWord.splice(0, j).join("") + "ay");
          break;
        }
      }
      newPigSent += prePigWord.join("") + " ";
    }
    return newPigSent;
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