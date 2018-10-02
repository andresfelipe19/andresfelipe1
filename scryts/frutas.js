var frutas=['fresa','uva','mora','brouni','pera'];

frutas.push('mandarina');
/*push agrega un  uevo elemento a un arreglo*/
frutas.push('brouni');
mostrar_frutas('');
frutas.pop();

/*pop elimina el ultimo arreglo*/
/*
console.log('--------------------------------');
mostrar_frutas();



function mostrar_frutas(){
	console.log("en total hay"+frutas.length+ "frutas");
	/*length cuenta la cantida de elementos de un arreglo*/
	for(var i=0; i<frutas.length;i++){
	console.log(" en la posicion "+i+  " esta en la frutas " +frutas[i]);

     }
}




console.log(frutas.length);
/*
var amigos_derechos=['andres','felipe','milena'];
var amigos_trabajo=['andres','alejandra'];

var amigos=amigos_derechos.concat(amigos_trabajo);
/*concat une dos arreglos*/
console.log(amigos);
console.log(amigos.join("-"));
/*join convierte un arreglo en una cadena de texto y separa las posicion por el (los) caracteres que yo defina como parametro*/
console.log(amigos.sort());
/*sort ordena los elementos de un arreglo*/



var posicion_milena=amigos.indesof('milena');
 
 console.log(posicion_milena);
 /*indexof me devuelve la posicion del elemnto que yo indique como parametro*/

 amigos.splice(posicion_milena,1);
/*splice elimina la cantidad un elemento que especificamos apartir de una posicion*/
console.log(amigos);

var persona={
	nombre:"andres",
	edad:19,
	tiene_mascota:true,
	mascota:{
		nombre:"zeus", 
		raza:"galgo"
	 }
 };
console.log(persona.nombre);
console.log(persona.mascota.raza);

var ahora=new date();
console.log(ahora);

console.log(typeof persona.edad);
console.log(persona.edad);
console.log(persona.edad.tostring());


var cantidad="25 manzanas";
console.log(parseint(cantidad));

var texto="te adoro muñeca";
console.log(texto.length);
console.log(texto.indexof('adoro'));

var palabra= texto.slice(3,7);
console.log(palabra);

var palabra2= texto.substr(3,1);
console.log(palabra2);

console.log(texto.replace('muñeca','bebe'));

console.log(texto.touppercase());
console.log(texto.tolowercase());
console.log(texto);
console.log(texto.trim());



