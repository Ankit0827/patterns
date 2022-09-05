let q=8;
for (let i = q; i>=1; i--) {

    for(let s = q; s>=i; s--){
        document.write("&nbsp;&nbsp;") ;
    }
       for (let j = i; j>=1; j--) {
        document.write(j) ;
       }
       document.write("<br/>");
} 