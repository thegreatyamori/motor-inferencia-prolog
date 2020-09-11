Vue.component('editor', {
  data() {
    return {
      code: String,
      title: "Editor de código",
    }
  },
  created() {
    this.code = "Escribe las reglas aquí";
  },
  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.prolog, "prolog");
    }
  },
});


Vue.component('consulta', {
  data() {
    return {
      query: String,
      title: "Consultas",
    }
  },
  created() {
    this.query = "Escribe la consulta aquí";
  },
  methods: {
    highlighter(query) {
      return Prism.highlight(query, Prism.languages.prolog, "prolog");
    }
  },
});


Vue.component('respuesta', {
  data() {
    return {
      response: String,
      title: "Respuesta",
    }
  },
  created() {
    this.response = "";
  },
  methods: {
    highlighter(response) {
      return Prism.highlight(response, Prism.languages.prolog, "prolog");
    }
  },
});


let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})