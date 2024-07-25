
import { showMovieInfantil } from "./show.js";

export const getMovieInfantil = async (url) => {
    console.log("hola", url);
    try {
        const respuesta = await fetch(url);
        console.log(respuesta);
        const data = await respuesta.json();
        console.log("lo que se convirtio a jsopn es: ",data);
        showMovieInfantil(data.results);
    } 
    catch  {
        console.log("Existe un error")
        
    }
    
};