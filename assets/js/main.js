/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp({
    data() {
        return {
            mailsArray: []
            //potrei anche creare un data da dare in pasto sotto ad axios.get con il link dell'API da recuperare
            //mailsUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    mounted() {
        //eseguo un ciclo per 10 volte per recuperare 10 email
        for (let i = 0; i < 10; i++) {
            axios
            //chiedo ad axios di prendere le mail dal link
            //avrei potuto anche scriverlo così
              //.get(this.mailsUrl)
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
            //infine gli chiedo di pushare la mail ottenuta nell'array
                .then(response => {
                    this.mailsArray.push(response.data.response)
                })
        }
    }
}).mount("#app")