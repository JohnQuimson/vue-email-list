'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },
  methods: {
    addEmail() {
      axios.get(this.apiUrl).then((response) => {
        this.emails.push(response.data.response);
      });
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.addEmail();
    }
  },
  mounted() {},
}).mount('#app');
