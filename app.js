new Vue({
  el: '#app',
  // vuetify: new Vuetify(),
  /*data () {
    return {
      e6: 1,
    }
  },*/
  vuetify: new Vuetify(),
  filters: {
    getNamesByComma: function (data) {
      let names;
      names = data.map((e) => e.name);
      names = names.toString();
      // names = names.replace(",", ", ");
      names = names.replace(/,/ig, ", ");
        return names;
      }
  },
  data: () => ({
    loginValid: true,
    isLoginValid: false,
    billingValid: true,
    checkoutStep:1,
    password: '',
    loginForm: {email: '', password: ''},
    billingForm: {firstName: '', lastName: ''},
    passwordRules: [
      v => !!v || 'Please enter password',
      v => (v && v.length >= 6) || 'Password length must be 6 letter',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Please enter email',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
    names: [{name: "chandan", age: 12},{name: "Madan", age: 15},{name: "Gopal", age: 17}]
  }),

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    /*validate () {
      this.$refs.form.validate()
    },*/
    login () {
      this.myFun();
      console.log("login val: ",this.$refs.loginForm.validate());
      if(this.$refs.loginForm.validate()) {
        console.log("loginform data: ",this.loginForm);
        this.checkoutStep++;
      }
      
    },

    myFun() {
      console.log("user scrolls");
    },

    testFun(){
      return "xyz";
    },

    handleScroll() {
      console.log("user is scrolling");
    },
    /*reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },*/
    validate(str) {
      // return this.$refs.loginForm.validate();
      console.log("btn clicked: ",str);
      // console.log("login val: ",this.$refs.loginForm.validate());
      // console.log(this.$refs.loginForm.validate());
      return false;
    },
  },


})
