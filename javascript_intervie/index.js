// const intArray=[1,3,4]
// intArray[50]=50;
// console.log(intArray)

//genrate alpha numeric captch using javascript
function randomGen(){
    const char="1234567890QWERTYUIOPLKJHGFDSAZXCVBNMqwertsyhauiokhnbvcxzaml"


    let charlen = 7 ;
    let result = "";

    for (i =0; i<charlen; i++){
      let randomGenn = Math.floor(Math.random() * char.length)  
          
         result +=char.substring(randomGenn , randomGenn+1);
    }
    document.getElementById("randomchar").innerHTML= result;
}
