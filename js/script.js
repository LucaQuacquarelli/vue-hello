// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
var app = new Vue( {
    
    el: "#root",
    data: {
        message: "Hello World!!!",
        img: "https://www.columbusassicurazioni.it/media/30543/paris.jpg?width=800"
    },
    methods: {
        changeImg: function () {
            switch (this.img) {
                case "https://www.columbusassicurazioni.it/media/30543/paris.jpg?width=800":
                    this.img = "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/07/iStock-496578476.jpg?v=330097"
                break;
                case "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/07/iStock-496578476.jpg?v=330097": 
                    this.img = "https://www.travel365.it/foto/istanbul-3.jpg"
                break;
                case "https://www.travel365.it/foto/istanbul-3.jpg":
                    this.img = "https://lh3.googleusercontent.com/proxy/1AKbZimqo7vycoB3hwzeYY1xDSSW7f02sM8u3qz1dl22QFoHXyLvv77Yf14laqF1ZSBU3VbcTJ1_0Ezjh6l-G156eqOwdUcAvI7-U8-oVp3ggVd4rzoT2TBlrnQpHKatGcE"
                break;
                case "https://lh3.googleusercontent.com/proxy/1AKbZimqo7vycoB3hwzeYY1xDSSW7f02sM8u3qz1dl22QFoHXyLvv77Yf14laqF1ZSBU3VbcTJ1_0Ezjh6l-G156eqOwdUcAvI7-U8-oVp3ggVd4rzoT2TBlrnQpHKatGcE":
                    this.img = "https://siviaggia.it/wp-content/uploads/sites/2/2016/04/sydney-t.jpg"
                break;
                case "https://siviaggia.it/wp-content/uploads/sites/2/2016/04/sydney-t.jpg":
                    this.img = "https://www.columbusassicurazioni.it/media/30543/paris.jpg?width=800"
                break;
            }
        }
    }

})

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

