

// 22. Pedir un número de 0 a 999 y mostrarlo escrito. Por ejemplo, para 56 mostrar: cincuenta y seis.


const numeros = [
    ["uno",          1],
    ["dos",          2],
    ["tres",         3],
    ["cuatro",       4],
    ["cinco",        5],
    ["seis",         6],
    ["siete",        7],
    ["ocho",         8],
    ["nueve",        9],
    ["diez",        10],
    ["once",        11],
    ["doce",        12],
    ["trece",       13],
    ["catorce",     14],
    ["quince",      15],
    ["veinte",      20],
    ["treinta",     30],
    ["cuarenta",    40],
    ["cincuenta",   50],
    ["sesenta",     60],
    ["setenta",     70],
    ["ochenta",     80],
    ["noventa",     90],
    ["cien",       100]
]
var incognita = 0;
var inicio = 0;
var dieci = "dieci";
var veinti = "veinti";
var y = " y ";
var cientos = "cientos ";
var ciento  = "ciento "
var arreglo =[]
var centena = undefined;
var contador = 0;

prompt("INICIAR?")

var REPETICION = setInterval(function(){
    incognita++
    var contenedor = document.getElementById("contenedor")

    if(incognita ===200 || incognita ===300 || incognita ===400 ||
        incognita ===400 || incognita ===500 || incognita===600 ||
        incognita ===700 || incognita ===800 || incognita === 900)contador=0;

    for(numero of numeros){

        var color = '#' + Math.floor(Math.random()*16777215).toString(16)
        var id = "identificador" + Math.floor(Math.random()*100000).toString()

        
        if(incognita === numero[1]){
            if(incognita === 20 || incognita === 30 || incognita === 40 || 
                incognita === 50 || incognita === 60 || incognita === 70 || 
                incognita === 80 || incognita === 90 || incognita === 100) {
                  //   console.log(numero[0])
                    contenedor.innerHTML += `<p class="texto" id="`+ id+`" id="`+ id+`">` + numero[0]+ `</p>`
                    document.getElementById(id).style.background = color;
                  arreglo.push(numero[0])
                    break;
                }
          }
        if(incognita <= 15){
            if(incognita === numero[1]){
              contenedor.innerHTML +=`<p class="texto" id="`+ id+`" id="`+ id+`">` + numero[0]+ `</p>`;
              document.getElementById(id).style.background = color;
                arreglo.push(numero[0])
            }                
        }else if(incognita >=16 && incognita <=19 ){
            var resta =  incognita - 11;
            const  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + dieci + num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(dieci + num[0])
            break;
        }else if(incognita >=21 && incognita <=29 ){
            var resta =  incognita - 21;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + veinti + num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(veinti + num[0])
            break;
        }else if(incognita >=31 && incognita <=39 ){
            var resta =  incognita - 31;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[16][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[16][0] + y +num[0])
            break;
        }else if(incognita >=41 && incognita <=49 ){
            var resta =  incognita - 41;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[17][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[17][0] + y +num[0])
            break;
        }else if(incognita >=51 && incognita <=59 ){
            var resta =  incognita - 51;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[18][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[18][0] + y +num[0])
            break;
        }else if(incognita >=61 && incognita <=69 ){
            var resta =  incognita - 61;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[19][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[19][0] + y +num[0])
            break;
        }else if(incognita >=71 && incognita <=79 ){
            var resta =  incognita - 71;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[20][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[20][0] + y +num[0])
            break;
        }else if(incognita >=81 && incognita <=89 ){
            var resta =  incognita - 81;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[21][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[21][0] + y +num[0])
            break;
        }else if(incognita >=91 && incognita <=99 ){
            var resta =  incognita - 91;
            var  num  = numeros[resta]
            contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[22][0] + y +num[0]+ `</p>`
            document.getElementById(id).style.background = color;
            arreglo.push(numeros[22][0] + y +num[0])
            break;
        }else if(incognita >=91 && incognita <=99 ){
          var resta =  incognita - 91;
          var  num  = numeros[resta]
          contenedor.innerHTML += `<p class="texto" id="`+ id+`">` + numeros[22][0] + y +num[0]+ `</p>`
          document.getElementById(id).style.background = color;
          arreglo.push(numeros[22][0] + y +num[0])
          break;
      } else if(incognita >=101 && incognita <=999){
          if(incognita === 200){contenedor.innerHTML+=`<p id="`+ id+`">`+"docientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break};
          if(incognita === 300){contenedor.innerHTML+=`<p id="`+ id+`">`+"trecientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 400){contenedor.innerHTML+=`<p id="`+ id+`">`+"cuatrocientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 500){contenedor.innerHTML+=`<p id="`+ id+`">`+"quinientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 600){contenedor.innerHTML+=`<p id="`+ id+`">`+"seiscientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 700){contenedor.innerHTML+=`<p id="`+ id+`">`+"setecientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 800){contenedor.innerHTML+=`<p id="`+ id+`">`+"ochocientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if(incognita === 900){contenedor.innerHTML+=`<p id="`+ id+`">`+"novecientos"+`</p>`;
          document.getElementById(id).style.background = color;
          break}
          if (incognita >=101 && incognita <=199)centena=ciento;
          else if(incognita >=201 && incognita <=299)centena=arreglo[1] + cientos;
          else if(incognita >=301 && incognita <=399)centena=arreglo[2] + cientos;
          else if(incognita >=401 && incognita <=499)centena=arreglo[3] + cientos;
          else if(incognita >=501 && incognita <=599)centena="quinientos ";
          else if(incognita >=601 && incognita <=699)centena=arreglo[5] + cientos;
          else if(incognita >=701 && incognita <=799)centena="setecientos";
          else if(incognita >=801 && incognita <=899)centena=arreglo[7] + cientos;
          else if(incognita >=901 && incognita <=999)centena="nove" + cientos;

          // console.log(centena+arreglo[0+contador])
          contenedor.innerHTML += `<p id="`+ id+`">`+centena+arreglo[0+contador]+`</p>`;
          document.getElementById(id).style.background = color;
          contador++
          break;
      }
    }
    if(incognita===999){
        clearInterval(REPETICION)
    }


},50)

     