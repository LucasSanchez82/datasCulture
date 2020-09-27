// chemin vers </main>
let writeMain = document.querySelector('main');

//contenu des h2
const h2Numero1 = '<h2>' + "anglais: EX:3 [en fr]"  +'</h2>'
    const h2Numero2 = '<h2>' + "anglais: EX4 [en anglais]" + '</h2>';

//contenu des paragraphes
const PNumero1 = '<p>' + "<em>On voit donc sur ce document, ce qui ressemble a une publicité. c'est donc une video avec une pomme centree au premier plant <strong>\
\
{it's a video align in width and height}.</strong>c'est donc un design tres épurée et simple\
</em>\
(ce qui peut renvoyer aux information ssimples et comprehensibles donnes par CNN)la publicité reste dynamique avec un agrandissement leger pour accentuer le fait qe c'est une pomme, a ce niveau nous sommes sur que c'est une pomme mais le narrateur nous dit que certains pourraient nous repeterque c'est une bananne,on a donc un fort decalage entre l'evidence des images et le doute que peut infliger une tierce information. enfin le narreteur conclu en nous confirmant que c'est une pomme et que bien que ce fut evident, un doute est toujours possible. Pour finnallement dire implicitement que CNN donnera des informations simple (a l'effigie du clip) et surtout, CNN hotera tous les doutes et ne donnera pas d'infoxes  en rajoutant <strong>\"premier de linfos{Fact First} \"</strong>" + '</p>';
    const PNumero2 = '<p>' + "I see in this document we understand this is a Publicity. so it's a video with a apple:  this apple is align in width and height. In the background we see a white page. So it's a a very refined design and it's a simple design (maybe it's a reference for the simplicity of CNN informations ) but this publicity is always dynamic thanks to the slight progressive enlargement for accentuate the fact that it's an apple but the narrator tells us that some might repeat that it is a banana, so there is a strong gap between the evidence of the images and the doubt that third information can inflict. finally the narrator concluded by confirming that it is an apple and that although it was obvious, a doubt is always possible. To finally say implicitly that CNN will give simple information (with the image of the clip) and above all, CNN will take all doubts and will not give infoxes by adding <strong> \ \"first of the info {Fact First}\"" + '</p>';

// mettre en place la base de </main>
writeMain.innerHTML = `<section> ${h2Numero1} ${PNumero1}</section>`
writeMain.innerHTML += `<section> ${h2Numero2} ${PNumero2}</section> `;
// i = 1;
// document.querySelector('#menu').addEventListener('click', () => {
//     if(i === 1){
//         document.querySelector('img').style.display = 'none'
//         i = 0;
//     }else{
//         document.querySelector('img').style.display = 'inline'
//         i = 1;
//     }
// });

