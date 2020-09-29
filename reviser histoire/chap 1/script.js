// chemin vers </main>
let writeMain = document.querySelector('main');
const tab = " <br /> <i class='fas fa-arrow-circle-right' style='margin-left: 30px;'></i>"
const importantTriangle = " <i class='fas fa-exclamation-triangle'></i>"
////////////////////                   PARTIE SUR DOLEANCES                  /////////////////////////////
//contenu partie une sur 1789
const cahierDeDoleancesH1 = `<h1> ${importantTriangle}Revolution francaise a l empire  (1789-1815)</h1>`
const cahierDeDoleancesH2 = '<h2>' + "L'annee 1789: Cahier de doléances"  +'</h2>'

const cahierDeDoleancesDef = `<p> ${tab} cahier déstiné au roi où sont consignés des voeux et des plaintes/demandes<strong>(doléances)</strong>.
<br />
${tab}Les 3 ordres ont des revendications, parfois communes </span> et ça montre que toute la société aspire au changement.</p>`;

const cahierDeDeDoleancesContenu = `<p> ${tab} On notera comme doleances du Tiers etat: <ul><strong><li>abolition des lettres cachées </li><li>Justice equitable</li><li>1vote par tete</li><li>impots equitables</li> </strong></ul> </p>`;
//</span sert au .CSS ligne 29

writeMain.innerHTML = `${cahierDeDoleancesH1} <section>  ${cahierDeDoleancesH2} <span>${cahierDeDoleancesDef} ${cahierDeDeDoleancesContenu}</span> </section>`

///////////////         PARTIE APARTE      //////////////////
const aparteFinancesH1 = `<h1> ${importantTriangle}L'impossible réforme financiere entraine la convocation des Etats generaux</h1>`;
const aparteFinancesP = "<span class='underline'>La France est en déficit économique</span>. Et pour contrer ça le roi décide d'augmenter les impôts au lieu de baisser les depenses";
const aparteFinancesP2 = `<h2>${importantTriangle}Pour tenter une réforme, le roi convoque les Etats generaux </h2><p>(Assemblée des representants des 3 ordres reunis par le roi dans des circonstances exceptionels)
${tab}puis tres vite la situation echappe à Louis XVI et la révolution éclate. La societe s'en touve transformée :
${tab}C'est la fin de l'ancien régime (Société d'ordre et monarchie absolue de droit divin)</p>`;
//ID='aparteFinances'
writeMain.innerHTML += `${aparteFinancesH1}<section id='aparteFinances'> ${aparteFinancesP} ${aparteFinancesP2}  </section>`;
//////////////         PARTIE DISPARITION DE L'ANCIEN REGIME           ///////////////////////
writeMain.innerHTML += `<h1>${importantTriangle}La disparition de l'ancien régime</h1><h3>${importantTriangle}SYMBOLE <i class="fas fa-arrow-right"></i> La prise de la bastille(14 juillet 1789) montre l'affirmation du Tiers Etat / Renvoie d'un ministre apprecie par le peuple (Necker)</h3>`;

//////////////            PARTIE SUR L ABOLITION DES PRIVILEGES ET LA CREATION DES DDH           ///////////////////////
const abolitionPrivilegesEtDroitsHommesH1 = `<h2>${importantTriangle}L'abolition des privilèges et la mise en place des droits de l'Hommes et du citoyen affirment l'égalité et les libértés individuelles</h2>`;
const decrireShemaP = `<p>${tab} prise de la Bastille + Grande Peur  </p><i style='margin: auto; font-size: 30px; color: green;'  class="fas fa-arrow-down"></i><p>Abolition des privilèges (Nuit du 04 au 05 /08/1789)</p><i style='margin: auto; font-size: 30px; color: green;'   class="fas fa-arrow-down"></i><p>Pas de privilèges = Pas de société d'ordres </p>`;
const shema = '<img src="../Shéma.PNG" alt="mon shema">';
writeMain.innerHTML += `<section> ${abolitionPrivilegesEtDroitsHommesH1} ${decrireShemaP}</section>${shema}`

/////////////////////////////////               D UNE REPUBLIQUE MENACE A L EMPIRE        /////////////////////////////////////

const republiqueAEmpireH1 = "<h1>D'une république menacée à l'empire (1792-1804)</h1>";
const girondinEtMontagnardsP = `<p>De <span class='underline'>1792-1793</span> les Girondins sont au pouvoir</p> <p>Et a partir de <span class='underline'>1793</span> les Montagnards sont au pouvoir de la Republique(republique +++) </p><span class='underline'>${tab}représenté par: Marat, Robespierre, Danton...</span>`;
const terreurP = `<h2>${importantTriangle}La terreur menace la Republique</h2>`;
const terreurDef = `<p>${tab}la terreur c'est une periode d'utilisation de la violence contre les enemis de la Republique.</p><p>${tab}mise en place en 1793 et durera 1an </p>`;
const shemaTerreur = '<img src="../shemaMenaceTerreur.PNG" alt="mon shema">'

writeMain.innerHTML += `${republiqueAEmpireH1} <section>${girondinEtMontagnardsP} ${terreurP} ${terreurDef} </section>${shemaTerreur}`;

//////////////////////////////////////////         PARTIE NAPOLEON BONAPARTE STABILISE POUVOIR ET EMPIRE                 ///////////////////////////////////////////////////

const NapoleonStabiliseLePouvoirH1 = `<h1>${importantTriangle}Napoleon Bonapart stabilise le pouvoir et fonde l'empire</h1>`;
const date1789P = `<p>${tab}1799: coup d'Etat de Napoleon Bonapart, il fonde l'empire en 1804</p> <p>${tab}de 1804-1812: Il conquiert la quasitotalité de l'europe, (il manque donc l'Angleterre, la Russie, l'Autriche), <span class='underline'>c'est un tournant dans l'histoire de l'empire</span>. La france envahit les troupes armés europeenes alliés(ou coalisés)</p><p><strong class='underline'>1815: Defaite de waterlo et fin de l'empire</strong> </p>`;
writeMain.innerHTML += `${NapoleonStabiliseLePouvoirH1} <section>${date1789P} </section>`;

///////////////////////////////////                    PARTIE LA CONQUETE DE L EUROPE  PAR NAPOLEON BONAPART (ou 1er)                         ////////////////////////////////////////

const conqueteEuropeH1 = `<h1>${importantTriangle}La conquete de l'europe par Napoleon Bonapart(ou 1er) Permet la diffusion des idees revolutionnaires</h1>`;
const exempleIdeesRevolutionnaires = `<strong class='underline'>${tab}Abolition de la Dîme; Abolition des banalites; Abolition des privilèges. Et nouvelle devise:ml Liberte, Egalité, fraternite; Code civile</strong>`;
const Conclusion = `<strong>${tab}Conclusion: La révolution etl'empire ont marqués les mentalités. Après la défaite de Waterlo (18juin 1815) la France est vaincue àet fragilisée. La monarchie rétablie tout comme en france, en Europe les rois triomphent et font une alliance: <cite>"La sainte Alliance"</cite> ${tab}Mais le peuple ayant gouté a la libérté, le maintient d'un monarchie semble compromis. </strong>`;

writeMain.innerHTML += `${conqueteEuropeH1} <section>${exempleIdeesRevolutionnaires} ${Conclusion} </section>`;
