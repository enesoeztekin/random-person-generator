const App = {
    data() {
      return {
        picturePath: "photo.jpg",
        fullname: "Enes Öztekin",
        username: "uaenesoztekin",
        email: "oztekinsoftware@gmail.com",
        dob:"8 Jun 2002",
        gender:"Male",
        genderIcon: "fa fa-mars",
        address:"221B Baker Street, London."
      }
    },
    methods: {
      async getPerson (){
        const response = await fetch("https://randomuser.me/api/")
        const {results} = await response.json();
        console.log()
        this.picturePath = `${results[0].picture.large}`
        this.fullname = `${results[0].name.first} ${results[0].name.last}`
        this.username = results[0].login.username
        this.email = results[0].email
        this.dob = new Date(Date.parse(results[0].dob.date)).toUTCString().substring(4,16)
        if(results[0].gender == "male"){
          this.gender = "Male"
          this.genderIcon = "fa fa-mars"
        }else if(results[0].gender == "female"){
          this.gender = "Female"
          this.genderIcon = "fa fa-venus"
        }else{
          this.gender = "Genderless"
          this.genderIcon = "fa fa-genderless"
        }
        
        this.address = `${results[0].location.street.name}, ${results[0].location.city}`
      }
    },
  }
  
  Vue.createApp(App).mount('#app')