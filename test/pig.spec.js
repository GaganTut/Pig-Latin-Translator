const chai = require("chai");
const expect = chai.expect;

const pig = require("../pig.js");

describe("toPig", () => {
  it("should only take in valid strings", () => {
    expect(pig.toPig.bind(null, {p: "pig"})).to.throw(Error);
  });

  it("should translate single words to pig", () => {
    expect(pig.toPig("pig")).to.equal("ig-pay");
    expect(pig.toPig("apple")).to.equal("apple-ay");
    expect(pig.toPig("fast")).to.equal("ast-fay");
  });

  it("should translate sentences to pig", () => {
    expect(pig.toPig("Turn this to pig please")).to.equal("urn-Tay is-thay o-tay ig-pay ease-play");
  });
});

describe("toEnglish", () => {
  it("should only take in strings", () => {
    expect(pig.toEnglish.bind(null, true)).to.throw(Error);
  });

  it("should translate single words", () => {
    expect(pig.toEnglish("ig-pay")).to.equal("pig");
    expect(pig.toEnglish("apple-ay")).to.equal("apple");
    expect(pig.toEnglish("ast-fay")).to.equal("fast");
  });

  it("should translate sentences", () => {
    expect(pig.toEnglish("urn-Tay is-thay o-tay ig-pay ease-play")).to.equal("Turn this to pig please");
  });
});