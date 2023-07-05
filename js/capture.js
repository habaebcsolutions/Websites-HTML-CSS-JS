function liberacaoAulas(aula) {
    const now = new Date(); // Data de hoje
    const past = new Date('2022-10-11'); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    // Mostra a diferença em dias
    // console.log( `Entre 11/10/2022 até agora já se passaram ${days} dias`);
    

    var nDia = 0 + days;

    // console.log( `Entre 30/08/2022 até agora já se passaram ${nDia} dias`);
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    const img4 = document.querySelector('#img4');

    if (nDia >= 27 && nDia < 28) {
        img1.src = './assets/image/img-classroom1-released.png';
    } else if (nDia >= 28 && nDia < 29) {
        img1.src = './assets/image/img-classroom1-released.png';
        img2.src = './assets/image/img-classroom2-released.png';
    } else if (nDia >= 29 && nDia < 36) {
        img1.src = './assets/image/img-classroom1-released.png';
        img2.src = './assets/image/img-classroom2-released.png';
        img3.src = './assets/image/img-classroom3-released.png';
    } else if (nDia >= 36) {
        img1.src = './assets/image/img-classroom1-released.png';
        img2.src = './assets/image/img-classroom2-released.png';
        img3.src = './assets/image/img-classroom3-released.png';
        img4.src = './assets/image/img-classroom4-released.png';
    }
}
