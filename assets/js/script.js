const Multimedia = (function () {
    function insertarVideo(url, id) {
        let iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    };
    class Multimedia {
        constructor(url) {
            this._url = url;
        }
        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }
        insertarVideo(id) {
            insertarVideo(this._url, id);
        }
    };
    return Multimedia;
})();

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    playMultimedia() {
        this.insertarVideo(this._id);
    }
    setInicio(tiempo) {
        let tiempoInicio = `${this._url}?start=${tiempo}`;
        super.setInicio();
        this._url = tiempoInicio;
    }
};

let musica1 = new Reproductor("https://www.youtube.com/embed/Vk5-c_v4gMU?si=r24WzWuxhtVqqaiP", "musica");
let pelicula1 = new Reproductor("https://www.youtube.com/embed/2rPPppw6Bhk?si=eYoIQBVQd6wbgcDJ", "peliculas");
let serie1 = new Reproductor("https://www.youtube.com/embed/7w5Vfjozzb8?si=-0UNo1h-jR-ilaH8", "series");

musica1.playMultimedia();
pelicula1.playMultimedia();
serie1.playMultimedia();

pelicula1.setInicio(13);
pelicula1.playMultimedia();


