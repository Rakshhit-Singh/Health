onEvent("signIn", "click", function( ) {
  setScreen("loginScreen");
});
onEvent("signUp", "click", function( ) {
  setScreen("createAnAccount");
});
onEvent("medical_Form", "click", function( ) {
  setScreen("Medical_Form");
});
onEvent("MEDIC", "click", function( ) {
  setScreen("medicLogin");
});
onEvent("first_name", "input", function( ) {
  onEvent("last_name", "input", function( ) {
    onEvent("username", "input", function( ) {
      onEvent("password", "input", function( ) {
        onEvent("SignUp", "click", function( ) {
          setScreen("Form1");
onEvent("DONE", "click", function( ) {
  setScreen("Form2");
onEvent("done", "click", function( ) {
            createRecord(getText("username"), {First_Name:(getText("first_name")), 
            Last_Name:(getText("last_name")),
            USERNAME:(getText("username")),
            PASSWORD:(getText("password")),
            IMAGE:(getImageURL("photo_select1")),
            DOB:(getText("DOB")),
            GENDER:(getText("GENDER")),
            AGE:(getText("AGE")),
            ADDRESS:(getText("ADDRESS")),
            CITY:(getText("CITY")),
            STATE:(getText("STATE")),
            ZIP_CODE:(getText("ZIP_CODE")),
            Social_Security:(getText("Social_Security")),
            Cell_Phone:(getText("cell_Phone")),
            Occupation:(getText("occupation")),
            BloodGroup:(getText("bloodGroup")),
            Height:(getText("Height")),
            Weight:(getText("Weight")),
            Medical_Conditions:(getText("medicalConditions")),
            Allergies:(getText("Allergies")),
            Relative:(getText("Relative")),
            Relationship:(getText("Relationship")),
            PhoneNo:(getText("phoneno"))
            
            });

            setScreen("LeaveScreen");
            
            });
          });
        });
      });
    });
  });
});
onEvent("medicusername", "input", function( ) {
  onEvent("medicpassword", "input", function( ) {
    onEvent("signin1", "click", function( ) {
            readRecords("Users", {}, function(records) {

              for (var i =0; i < records.length; i++) {
         if((records[i]).USERNAME == getText("medicusername") || records[i].PASSWORD == getText("medicpassword")){
           setScreen("DOCTOR");
     
         }
              }
            });
    });
  });
});
onEvent("USERNAME", "input", function( ) {
  onEvent("PASSWORD", "input", function( ) {
    onEvent("SignIn", "click", function( ) {
      readRecords(getText("USERNAME"), {}, function(records) {
        for (var a =0; a < records.length; a++) {
         if((records[a]).USERNAME == getText("USERNAME") || records[a].PASSWORD == getText("PASSWORD")){
           setScreen("HomeScreen");
     
         }else
      setText("firstname", (records[a]).First_Name);
      setText("lastname", (records[a]).Last_Name);
      setImageURL("image4", (records[a]).IMAGE);
      setText("dob", (records[a]).DOB);
      setText("gender", (records[a]).GENDER);
      setText("age", (records[a]).AGE);
      setText("address", (records[a]).ADDRESS);
      setText("city", (records[a]).CITY);
      setText("state", (records[a]).STATE);
      setText("zipcode", (records[a]).ZIP_CODE);
      setText("socialsecurity", (records[a]).Social_Security);
      setText("cellphone", (records[a]).Cell_Phone);
      setText("Occupation", (records[a]).Occupation);
      setText("blood", (records[a]).BloodGroup);
      setText("height", (records[a]).Height);
      setText("weight", (records[a]).Weight);
      setText("medical", (records[a]).Medical_Conditions);
      setText("allergies", (records[a]).Allergies);
      setText("relative", (records[a]).Relative);
      setText("relationship", (records[a]).Relationship);
         setText("cellphoneno", (records[a]).PhoneNo);
         setText("WELCOME", "Welcome back " +(records[a]).First_Name);
}
      });
    });
  });
});
onEvent("medical_form", "click", function( ) {
  readRecords(getText("SEARCHUSERNAME"), {}, function(records) {
        for (var a =0; a < records.length; a++) {
      setText("firstname", (records[a]).First_Name);
      setText("lastname", (records[a]).Last_Name);
      setImageURL("image4", (records[a]).IMAGE);
      setText("dob", (records[a]).DOB);
      setText("gender", (records[a]).GENDER);
      setText("age", (records[a]).AGE);
      setText("address", (records[a]).ADDRESS);
      setText("city", (records[a]).CITY);
      setText("state", (records[a]).STATE);
      setText("zipcode", (records[a]).ZIP_CODE);
      setText("socialsecurity", (records[a]).Social_Security);
      setText("cellphone", (records[a]).Cell_Phone);
      setText("Occupation", (records[a]).Occupation);
      setText("blood", (records[a]).BloodGroup);
      setText("height", (records[a]).Height);
      setText("weight", (records[a]).Weight);
      setText("medical", (records[a]).Medical_Conditions);
      setText("allergies", (records[a]).Allergies);
      setText("relative", (records[a]).Relative);
      setText("relationship", (records[a]).Relationship);
         setText("cellphoneno", (records[a]).PhoneNo);
         setText("WELCOME", "Welcome back " +(records[a]).First_Name);
}
      });
      
      setScreen("Medical_Form");
});
