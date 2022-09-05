let r=5;
 
for(let i=1;i<=r;i++){
    for(s=r-1;s>=i;s--){
        document.write("&nbsp;&nbsp;")
    }
    for(j=1;j<=i;j++){
        document.write(j);
    }
    document.write("<br/>")
}