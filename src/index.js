module.exports = function check(str, bracketsConfig) {
   let bracketsS = bracketsConfig.map (element => element.join(''));

   for (let i = 0; i < bracketsS.length; i++) {
    if( str.includes(bracketsS[i]) ) {
        str = str.replace(bracketsS[i], "");
        i = -1;
      }
    }
    return  str.length === 0 ? true : false;
   }

