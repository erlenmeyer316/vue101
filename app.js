const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://www.google.com",
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>',
      age: 41,
    };
  },
  methods: {    
    incrementAge() {
      this.age++;
    },
    decrementAge() {
      this.age--;
    },
    updateLastName(msg, event) {      
      //console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  computed: {
    fullName() {
      console.log("fullName computed was called")
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },    
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  }
}).mount("#app");
