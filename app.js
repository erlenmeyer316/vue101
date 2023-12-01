const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      url: "https://www.google.com",
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>',
      age: 41,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {
      this.age++;
    },
    decrementAge() {
      this.age--;
    },
    updateLastName(msg, event) {      
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount("#app");
