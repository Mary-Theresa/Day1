'use strict'

var chai = require('chai');
var expect = chai.expect;


  describe("Contact Class: Create a contact, add details", function() {

    it("The contact should be a type of `object`, and an instance of the `Contact` class", function() {
      var richard = require('../Apps/addressBook.js');
      expect(typeof (richard)).to.equal(typeof {});
      expect(richard instanceof (Contact)).to.equal(true);
    });


    it("The contact name, phone and email to be properties of the contact", function() {
      var alice = new Contact(fullname, phone, email)
      expect(alice.fullname(Alice)).to.be(Alice);
      expect(alice.phone(08098765432)).to.be(08098765432);
      expect(alice.email("alice_54@gmail.com")).to.be("alice_54@gmail.com");
    });

  
    it("The savePhone function should add a number to the instance of the Contact class", function() {
      var aisha = require('../Apps/addressBook.js');
      expect(aisha.phone(08010472911)).to.be(08010472911);
    });

  
    it("The editNumber function should change the number of the instance of the Contact class", function() {
      var halima = require('../Apps/addressBook.js');
      expect(halima.phone(08012492911)).to.be(08012492911);
    });


    it("The editEmail function should change the email of the instance of the Contact class", function() {
      var halima = "halima_65@gmail.com";
      expect(my_app.editEmail("halima_65@gmail.com")).to.be(halima);
    });

})
