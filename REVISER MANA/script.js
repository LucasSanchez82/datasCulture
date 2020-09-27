// chemin vers </main>
let writeMain = document.querySelector('main');

//contenu des h2
const h2Numero1 = '<h2>' + "Management chapitre: 1"  +'</h2>'
//sert a effectuer des tablations 
const tabulation = ' <span style="margin-left: 30px;> </span>"'
//contenu des paragraphes

const argument1chapitre1 = `${tabulation}  <strong>Une action collective</strong> avec un <strong> objectif commun</strong> et un groupe hierarchisé. Il est tout aussi bon de maintenir une bonne <strong>cohesion de groupe</strong>`
const argument2chapitre1 = ` ${tabulation} <strong>Le statut juridique permet de pereniser son action. en sachant que l'un des objectifs principaux des organisations est d'etre perennes !</strong>`
const argument3chapitre1 = ` ${tabulation} <strong>Pour fonctionner une organisation doit repartir et coordoner les taches entre ses membres</strong>`
const argument4chapitre1 = ` ${tabulation} <span> Pour fonctionner une organisation doit avoir des ressources types: </span><strong> R.Humaines; R.Financieres; R.Immaterielles; R.Materielle; R.Technologiques.<br />${tabulation}<span> FIXATION DES REGLES</span></strong>`

const PNumero1 = ' <section> <p>' +  `${tabulation}En management: Il est mieux d'avoir:
<ul>
<br /><li>${argument1chapitre1}</li>
<br /><li>${argument2chapitre1}</li>
<br /><li>${argument3chapitre1}</li>
<br /><li>${argument4chapitre1}</li>
</ul> 
<strong style='text-decoration: underline;'>ORGANISEES / FIXATIONS REGLES </strong>` + '</p> </section>';

// mettre en place la base de </main>
writeMain.innerHTML = `<section> ${h2Numero1} ${PNumero1}</section>`
