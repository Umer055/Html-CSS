var names = new Array();
names[0] = "Yakoov";
names[1] = "Umer";
names[2] = "Jason";
names[3] = "Jim";
names[4] = "Ali";
names[5] = "Jilla";
names[6] = "larry";
names[7] = "Jordan";
for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
