
  'use strict';
var chai = require('chai');
var expect = chai.expect;

var my_app = require('../Apps/getPrimes.js');

  describe('Prime Numbers in a List: ', function () {

    describe('Return the prime numbers from 0 to n in a list as follows', function () {

      it('should return [] for 0', function () {
        expect(my_app.getPrimes(0)).to.eql([]);
      });

      it('should return [2, 3, 5] for 5', function () {
        expect(my_app.getPrimes(5)).to.eql([2, 3, 5]);
      });

      it('should return [2, 3, 5, 7] for 10', function () {
        expect(my_app.getPrimes(10)).to.eql([2, 3, 5, 7]);
      });

      it('should return [2, 3, 5, 7, 11, 13] for 15', function () {
        expect(my_app.getPrimes(15)).to.eql([2, 3, 5, 7, 11, 13]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
        expect(my_app.getPrimes(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 25', function () {
        expect(my_app.getPrimes(25)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30', function () {
        expect(my_app.getPrimes(30)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31] for 35', function () {
        expect(my_app.getPrimes(35)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39] for 40', function () {
        expect(my_app.getPrimes(40)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 39, 41, 43] for 45', function () {
        expect(my_app.getPrimes(45)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
      });
});

});