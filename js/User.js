class User {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.login= null;
      this.password=null;
    }
  
    getCount(){
      var userCountRef = database.ref('userCount');
      userCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        userCount: count
      });
    }
  
    update(){
      var userIndex = "users/user" + this.index;
      database.ref(userIndex).set({
        name:this.name,
        login=this.login,
        password=this.password
        
      });
    }
  
    static getUserInfo(){
      var usersInfoRef = database.ref('users');
      usersInfoRef.on("value",(data)=>{
        allusers = data.val();
      })
    }
  

}