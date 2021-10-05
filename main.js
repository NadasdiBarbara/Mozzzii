class Film{
    constructor(nev, rendezo, kiadasiEv){
        this.nev=nev;
        this.rendezo=rendezo;
        this.kiadasiEv=kiadasiEv;
    }
}

let filmAdat=[];

function hozzaAd(){
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadasiEv = document.getElementById('kiadasiEv').value; 

    if(nev =="" || rendezo == "" ||kiadasiEv == ""){
        alert("Nem lehet üres egyik mező sem!");
    }
    else{
        let obj = new Film(nev, rendezo, kiadasiEv);
        filmAdat.push(obj);

        document.getElementById('nev').value = "";
        document.getElementById('rendezo').value = "";
        document.getElementById('kiadasiEv').value = "";
        console.log(filmAdat);
        
    }

 }
let vissza=true;
function listaz(){
    
    if (!vissza) {
        document.getElementById("lista").innerHTML="";
        vissza=true;
    }
    else{
        let ures="";
        for (let i = 0; i < filmAdat.length; i++) {
            if (i%2!=0) {
            ures+="<tr>";
            ures+="<td>"+ filmAdat[i].nev+"</td>";
            ures+="<td>"+ filmAdat[i].rendezo+"</td>";
            ures+="<td>"+ filmAdat[i].kiadasiEv+"</td>";
            ures+="</tr>";  
            }
            else{
                ures+="<tr class='table-success'>";
                ures+="<td>"+ filmAdat[i].nev+"</td>";
                ures+="<td>"+ filmAdat[i].rendezo+"</td>";
                ures+="<td>"+ filmAdat[i].kiadasiEv+"</td>";
                ures+="</tr>";  
            }
                    
        }
        document.getElementById("lista").innerHTML=ures;
        vissza=false;
    }
    


}

document.getElementById('hozzaAd').addEventListener('click', hozzaAd);
document.getElementById('listaz').addEventListener('click', listaz);
