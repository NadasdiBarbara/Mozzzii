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

function listaz(){
    let ures="";
    for (let i = 0; i < filmAdat.length; i++) {
        
        
    }
}

document.getElementById('hozzaAd').addEventListener('click', hozzaAd);