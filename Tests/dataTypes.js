'use strict'

var chai = require('chai');
var expect = chai.expect;

var my_app = require('../Apps/dataTypes.js');

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(my_app.dataTypes(null)).to.equal('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(my_app.dataTypes(undefined)).to.equal('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for true", function() {
      expect(my_app.dataTypes(true)).to.be.equal(true);
    });

    it("should return false for false", function() {
      expect(my_app.dataTypes(false)).to.be.equal(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(my_app.dataTypes(44)).to.equal('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(my_app.dataTypes(144)).to.equal('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(my_app.dataTypes(100)).to.equal('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(my_app.dataTypes('tergiversate')).to.be.equal(12);
    });

    it("should return the length of an empty string", function() {
      expect(my_app.dataTypes('')).to.be.equal(0);
    });

    it("should return the length of `555`", function() {
      expect(my_app.dataTypes('555')).to.be.equal(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(my_app.dataTypes([0, 1, 2])).to.be.equal(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(my_app.dataTypes([])).to.equal('undefined');
    });

    it("should return `undefined` for `[4, 9]`", function() {
      expect(my_app.dataTypes([4, 9])).to.equal('undefined');
    });

  });


  describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).to.equal(true);
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(my_app.dataTypes(callback)).to.equal('called callback');
    });
  });


});