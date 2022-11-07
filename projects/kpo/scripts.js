let [gep_pont,jatekős_pont]=[0,0];
let vege_ref = document.getElementById("vege");
let lehetosegek = {
    'kő' : {
        'kő' : 'Döntetlen',
        'olló' : 'Győzelem',
        'papír' : 'Vereség'
    },
    'olló' : {
        'kő' : 'Vereség',
        'olló' : 'Döntetlen',
        'papír' : 'Győzelem'
    },
    'papír' : {
        'kő' : 'Győzelem',
        'olló' : 'Vereség',
        'papír' : 'Döntetlen'
    }

}

function valaszt(input){
    var choices = ["kő", "papír", "olló"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("gep_valasztas").innerHTML = 
    ` Gép választása<span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("jatekős_valasztas").innerHTML = 
    ` Te választásod <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(lehetosegek[input][computer_choice]){
        case 'Győzelem':
            vege_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            vege_ref.innerHTML = "Győzelem";
            jatekős_pont++;
            break;
        case 'Vereség':
            vege_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            vege_ref.innerHTML = "Vereség";
            gep_pont++;
            break;
        default:
            vege_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            vege_ref.innerHTML = "Döntetlen";
            break;
    }

    document.getElementById("gep_pont").innerHTML = gep_pont;
    document.getElementById("jatekős_pont").innerHTML = jatekős_pont;
}