var contact = {
  name: "Krysten",
  address: "000 SE Belmont, Portland, OR ",
  phoneNumber: "555-555-5555 ",
  age: "27 ",
  wombat: false
};

function recordMaker (contact) {
  console.log(contact.name + " is " + contact.age + "years old, and lives at " + contact.address);
  if (contact.wombat) {
    console.log("Calling " + contact.name + " at " + contact.phoneNumber + " about their wombat");
  } else {
    console.log(contact.name + " doesn't have a wombat");
  }
};

recordMaker(contact);