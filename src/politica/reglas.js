const reglas = 
[
    {
        regla:"La longitud mínima de dicho password debe ser de 8 caracteres.",
        fn : (pass)=>{return pass.length >= 8}
    },
    {
        regla:"La longitud máxima de dicho password debe ser de 12 caracteres.",
        fn : (pass)=>{return pass.length <= 12}        
    },
    {
        regla:"No puede contener espacios en blanco.",
        fn : (pass)=>{
            const partes = pass.trim().split(" ");
            if (partes>=1){return false}
            else{
                return true;
            }      
        }    
    },
    {
        regla: "Debe contener al menos uno de los siguiente caracteres !#$%&=",
        fn: (pass)=>{const caracteres = ['!', '#', '$', '%', '&','='];
                    return caracteres.some((caracter)=>pass.includes(caracter));
                }
    },
    {

        regla:"Debe contener al menos un dígito número",
        fn:(pass)=>{ const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    return numeros.some(caracter => pass.includes(caracter));
                }
    },
    {
        regla: "El último caracter no puede ser ninguno de los definidos en la regla 4",
        fn : (pass)=>{
            {const caracteres_prohibidos = ['!', '#', '$', '%', '&','='];
                const ultima = pass[pass.length-1];
                console.log(ultima)
                return !caracteres_prohibidos.some((caracter)=>ultima.includes(caracter));
            }
        }
    }
]

const validarPolitica = (usuario)=>{
    return reglas.every(regla=>regla.fn(usuario.password));
}

module.exports = validarPolitica;
