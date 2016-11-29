
module.exports = function Contact(fullname, phone, email)

{
	if(fullname === undefined){
        this.fullname = "Contact";
    }
    else{
        this.fullname = fullname;
    }
    if(phone === undefined){
        this.phone = "Empty";
    }
    else{
        this.phone = phone;
    }
    if(email === undefined){
        this.email = "Empty";
    }
    else{
        this.email = "Empty";
    }


Contact.prototype.savePhone = function(){
      this.phone.push(numberToAdd);
      return "Number added"
    }

Contact.prototype.editNumber = function(){
      this.phone = newNumber;
	  return "New Number Saved:" + this.phone;
    }

Contact.prototype.editEmail = function(){
      this.email = newEmail;
	  return "New Email Saved:" + this.email;
    }

var richard = new Contact("Richard", "08012345678", "richard_76@yahoo.com");
var alice = new Contact("Alice", "08098765432", "alice_54@gmail.com");
var charles = new Contact("Charles", "080556789012", "charles_76@hotmail.com");
}