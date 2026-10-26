// Recettes : [nom, catégorie, emoji, minutes, personnes, ingrédients, étapes]
const DATA = [
["Pâtes carbonara","Plat","🍝",20,4,"spaghetti 400 g,lardons 200 g,œufs 3,parmesan 80 g,poivre","Fais cuire les pâtes dans l’eau salée.|Fais dorer les lardons sans matière grasse.|Mélange les œufs, le parmesan et beaucoup de poivre.|Égoutte les pâtes, mélange-les hors du feu avec les lardons puis la sauce. Sers aussitôt."],
["Omelette aux champignons","Rapide","🍳",10,2,"œufs 4,champignons 150 g,beurre 15 g,persil,sel","Émince et fais revenir les champignons au beurre 5 min.|Bats les œufs avec sel et poivre.|Verse sur les champignons, cuis à feu moyen en ramenant les bords.|Plie, parsème de persil."],
["Crêpes","Petit-déj","🥞",30,4,"farine 250 g,œufs 3,lait 50 cl,beurre fondu 30 g,sucre 2 c. à s.","Mélange farine, sucre et œufs.|Ajoute le lait petit à petit puis le beurre fondu.|Laisse reposer 15 min.|Cuis une louche de pâte dans une poêle chaude, 1 min par face."],
["Salade niçoise","Entrée","🥗",20,4,"tomates 4,thon 1 boîte,œufs durs 3,olives,haricots verts 150 g,huile d’olive","Cuis les œufs 10 min et les haricots 6 min.|Coupe les tomates en quartiers.|Dispose tout dans un plat avec thon et olives.|Assaisonne d’huile d’olive, sel et poivre."],
["Ratatouille","Plat","🍆",60,4,"aubergine 1,courgettes 2,poivrons 2,tomates 4,oignon 1,ail 2 gousses,huile d’olive","Coupe tous les légumes en dés.|Fais revenir oignon et ail, puis les aubergines et poivrons 10 min.|Ajoute courgettes et tomates.|Couvre et laisse mijoter 40 min en remuant de temps en temps."],
["Gratin dauphinois","Plat","🥔",75,4,"pommes de terre 1 kg,crème 40 cl,lait 20 cl,ail 1 gousse,muscade","Frotte un plat à l’ail et allume le four à 160 °C.|Coupe les pommes de terre en fines rondelles.|Dispose-les en couches, verse crème et lait salés avec muscade.|Cuis 1 h, jusqu’à dorure."],
["Poulet rôti au citron","Plat","🍗",70,4,"poulet 1,citrons 2,ail 4 gousses,thym,beurre 30 g,pommes de terre 600 g","Four à 200 °C. Glisse citron, ail et thym dans le poulet.|Beurre la peau, sale et poivre.|Entoure de pommes de terre en morceaux.|Rôtis 1 h, arrose régulièrement."],
["Soupe à l’oignon","Entrée","🧅",50,4,"oignons 6,beurre 40 g,bouillon 1 L,pain,gruyère râpé 100 g","Fais fondre les oignons émincés au beurre 20 min jusqu’à coloration.|Mouille avec le bouillon, mijote 20 min.|Verse en bols, pose du pain et du gruyère.|Gratine 5 min sous le grill."],
["Quiche lorraine","Plat","🥧",55,6,"pâte brisée 1,lardons 200 g,œufs 3,crème 25 cl,lait 10 cl,gruyère 80 g","Four à 180 °C. Étale la pâte dans un moule.|Parsème de lardons et de gruyère.|Bats œufs, crème et lait, sale peu, poivre.|Verse et cuis 35 min."],
["Tarte aux pommes","Dessert","🍎",60,6,"pâte brisée 1,pommes 5,sucre 40 g,beurre 20 g,cannelle","Four à 180 °C. Étale la pâte dans un moule.|Épluche et tranche les pommes, dispose-les en rosace.|Saupoudre de sucre et cannelle, ajoute des noisettes de beurre.|Cuis 40 min."],
["Mousse au chocolat","Dessert","🍫",20,4,"chocolat noir 200 g,œufs 6,sel","Fais fondre le chocolat, ajoute les jaunes.|Monte les blancs en neige avec une pincée de sel.|Incorpore-les délicatement au chocolat.|Réserve 4 h au frais."],
["Riz sauté aux légumes","Rapide","🍚",20,3,"riz cuit 300 g,œufs 2,carottes 2,petits pois 100 g,sauce soja 3 c. à s.,oignon 1","Fais revenir oignon et carottes en dés 5 min.|Ajoute petits pois et riz, saute à feu vif.|Pousse sur le côté, brouille les œufs puis mélange.|Assaisonne de sauce soja."],
["Bœuf bourguignon","Plat","🥩",180,6,"bœuf 1 kg,vin rouge 75 cl,carottes 3,oignons 2,lardons 150 g,champignons 250 g,thym","Fais dorer la viande, puis les lardons et oignons.|Ajoute carottes, thym, farine et le vin.|Mijote à couvert 2 h 30 à feu doux.|Ajoute les champignons poêlés 20 min avant la fin."],
["Lasagnes","Plat","🧀",90,6,"feuilles de lasagne 12,bœuf haché 500 g,sauce tomate 600 g,béchamel 50 cl,mozzarella 200 g,oignon 1","Fais revenir oignon et bœuf, ajoute la sauce tomate, mijote 15 min.|Alterne dans un plat : sauce, pâtes, béchamel.|Termine par béchamel et mozzarella.|Cuis 40 min à 180 °C."],
["Salade de pâtes","Entrée","🥙",20,4,"pâtes 250 g,tomates cerises 200 g,mozzarella 125 g,basilic,huile d’olive,olives","Cuis les pâtes et laisse-les refroidir.|Coupe tomates et mozzarella.|Mélange tout avec basilic et olives.|Assaisonne d’huile d’olive, sel, poivre."],
["Cake au citron","Dessert","🍋",55,8,"farine 200 g,sucre 150 g,œufs 3,citrons 2,beurre fondu 100 g,levure 1 sachet,lait 10 cl","Four à 180 °C. Mélange œufs et sucre.|Ajoute farine, levure, zestes et jus des citrons.|Incorpore le beurre fondu et le lait.|Verse en moule à cake, cuis 40 min."],
["Soupe de potiron","Entrée","🎃",35,4,"potiron 800 g,oignon 1,pommes de terre 2,crème 10 cl,bouillon 75 cl","Fais revenir l’oignon, ajoute potiron et pommes de terre en cubes.|Mouille avec le bouillon, cuis 25 min.|Mixe lisse, ajoute la crème.|Rectifie l’assaisonnement."],
["Croque-monsieur","Rapide","🥪",12,2,"pain de mie 4 tranches,jambon 2 tranches,gruyère 80 g,beurre 20 g","Beurre le pain, garnis de jambon et de fromage.|Referme les sandwichs, ajoute du fromage dessus.|Gratine 10 min à 200 °C."],
["Pancakes moelleux","Petit-déj","🥞",20,4,"farine 200 g,lait 25 cl,œufs 2,sucre 2 c. à s.,levure 1 sachet,beurre 30 g","Mélange les ingrédients secs.|Ajoute lait, œufs et beurre fondu, sans trop remuer.|Cuis des petits tas de pâte 2 min par face.|Sers avec du miel ou des fruits."],
["Poêlée de légumes","Rapide","🥦",20,3,"courgette 1,poivron 1,brocoli 200 g,carottes 2,ail 1 gousse,huile d’olive","Coupe les légumes en petits morceaux.|Saisis les carottes 5 min, puis ajoute le reste.|Cuis 10 min à feu moyen avec l’ail.|Sale, poivre, sers chaud."],
["Tiramisu","Dessert","☕",30,6,"mascarpone 250 g,œufs 3,sucre 80 g,café 25 cl,boudoirs 24,cacao","Mélange jaunes et sucre, ajoute le mascarpone.|Incorpore les blancs en neige.|Trempe les boudoirs dans le café, alterne avec la crème.|Saupoudre de cacao, réserve 6 h au frais."],
["Houmous","Entrée","🧆",10,4,"pois chiches 1 boîte,tahini 2 c. à s.,citron 1,ail 1 gousse,huile d’olive","Égoutte les pois chiches (garde un peu de jus).|Mixe avec tahini, jus de citron, ail et huile.|Ajoute du jus de cuisson si trop épais.|Sers avec du pain ou des légumes."],
["Clafoutis aux cerises","Dessert","🍒",50,6,"cerises 500 g,œufs 3,farine 100 g,sucre 80 g,lait 25 cl","Four à 180 °C. Dispose les cerises dans un plat beurré.|Mélange farine, sucre, œufs puis lait.|Verse sur les cerises.|Cuis 35 min."],
["Œufs brouillés","Petit-déj","🍳",8,2,"œufs 4,beurre 20 g,ciboulette,pain","Bats les œufs avec sel et poivre.|Fais fondre le beurre à feu doux.|Verse les œufs, remue sans cesse 3 min.|Sers sur du pain grillé avec de la ciboulette."]
];

const RECIPES = DATA.map(([nom,cat,emo,min,pers,ing,etapes],i)=>({
  id:i, nom, cat, emo, min, pers,
  ing: ing.split(","), etapes: etapes.split("|")
}));
const HUES = ["#ffd9c9","#fff0b3","#c9ecdd","#d6e4ff","#f5d0e6","#e2f0c4"];

const $ = s => document.querySelector(s);
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/œ/g,"oe");
const save = (k,v) => { try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} };
const load = (k,d) => { try{ return JSON.parse(localStorage.getItem(k)) ?? d; }catch(e){ return d; } };

let state = { q:"", cat:"Tout", fridge:load("fm-fridge",[]), favs:load("fm-favs",[]), onlyFavs:false };
const CATS = ["Tout","Entrée","Plat","Dessert","Petit-déj","Rapide"];

function ingName(s){ return s.replace(/\s\d.*$/,"").replace(/\s\d+\s?(g|cl|L).*$/,"").trim(); }
function matchCount(r){
  if(!state.fridge.length) return 0;
  const names = r.ing.map(i=>norm(ingName(i)));
  return state.fridge.filter(f=>names.some(n=>n.includes(norm(f)))).length;
}

function renderFilters(){
  $("#filters").innerHTML = CATS.map(c=>`<button data-c="${c}" aria-pressed="${state.cat===c}">${c}</button>`).join("");
}
function renderChips(){
  $("#chips").innerHTML = state.fridge.map((f,i)=>`<li><button data-i="${i}" aria-label="Retirer ${f}">${f}</button></li>`).join("");
}
function renderGrid(){
  const q = norm(state.q.trim());
  let list = RECIPES.filter(r=>{
    if(state.onlyFavs && !state.favs.includes(r.id)) return false;
    if(state.cat!=="Tout" && r.cat!==state.cat) return false;
    if(q && !norm(r.nom+" "+r.ing.join(" ")).includes(q)) return false;
    if(state.fridge.length && !matchCount(r)) return false;
    return true;
  });
  if(state.fridge.length) list.sort((a,b)=>matchCount(b)-matchCount(a)||a.min-b.min);
  $("#count").textContent = `${list.length} recette${list.length>1?"s":""}` + (state.fridge.length?" avec tes ingrédients":"");
  $("#empty").hidden = list.length>0;
  $("#grid").innerHTML = list.map(r=>{
    const m = matchCount(r), fav = state.favs.includes(r.id);
    return `<article class="card-wrap" style="position:relative">
      <button class="card" data-id="${r.id}" aria-label="Ouvrir la recette ${r.nom}">
        <div class="thumb" style="background:${HUES[r.id%HUES.length]}">${r.emo}</div>
        ${m?`<span class="match">${m} / ${r.ing.length} en stock</span>`:""}
        <div class="info"><h3>${r.nom}</h3><div class="meta"><span>⏱ ${r.min} min</span><span>👥 ${r.pers}</span><span>${r.cat}</span></div></div>
      </button>
      <button class="heart" data-fav="${r.id}" aria-pressed="${fav}" aria-label="${fav?"Retirer des":"Ajouter aux"} favoris">${fav?"♥":"♡"}</button>
    </article>`;
  }).join("");
  const n = state.favs.length;
  $("#favCount").textContent = n;
  $("#favBtn").setAttribute("aria-pressed", state.onlyFavs);
}

function openRecipe(id){
  const r = RECIPES[id];
  const names = state.fridge.map(norm);
  $("#mBody").innerHTML = `
    <div class="m-head" style="background:${HUES[r.id%HUES.length]}">
      <div class="big">${r.emo}</div><h2 id="mTitle">${r.nom}</h2>
      <div class="meta" style="justify-content:center"><span>⏱ ${r.min} min</span><span>👥 ${r.pers} pers.</span><span>${r.cat}</span></div>
    </div>
    <div class="m-body">
      <div><h3>Ingrédients</h3><ul>${r.ing.map(i=>{
        const have = names.some(f=>norm(ingName(i)).includes(f));
        return `<li class="ing${have?" have":""}">${i}${have?" ✓":""}</li>`;}).join("")}</ul></div>
      <div><h3>Préparation</h3><ol>${r.etapes.map(e=>`<li>${e}</li>`).join("")}</ol></div>
    </div>`;
  $("#modal").showModal();
}

function toggleFav(id){
  state.favs = state.favs.includes(id) ? state.favs.filter(x=>x!==id) : [...state.favs,id];
  save("fm-favs",state.favs); renderGrid();
}

$("#fridgeForm").addEventListener("submit",e=>{
  e.preventDefault();
  const v = $("#ing").value.trim();
  v.split(/[,;]+/).map(s=>s.trim()).filter(Boolean).forEach(s=>{
    if(!state.fridge.map(norm).includes(norm(s))) state.fridge.push(s);
  });
  $("#ing").value=""; save("fm-fridge",state.fridge); renderChips(); renderGrid();
});
$("#chips").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  state.fridge.splice(+b.dataset.i,1); save("fm-fridge",state.fridge); renderChips(); renderGrid();
});
$("#q").addEventListener("input",e=>{ state.q=e.target.value; renderGrid(); });
$("#filters").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  state.cat=b.dataset.c; renderFilters(); renderGrid();
});
$("#grid").addEventListener("click",e=>{
  const h=e.target.closest("[data-fav]"); if(h) return toggleFav(+h.dataset.fav);
  const c=e.target.closest("[data-id]"); if(c) openRecipe(+c.dataset.id);
});
$("#favBtn").addEventListener("click",()=>{ state.onlyFavs=!state.onlyFavs; renderGrid(); });
$("#close").addEventListener("click",()=>$("#modal").close());
$("#modal").addEventListener("click",e=>{ if(e.target===$("#modal")) $("#modal").close(); });

renderFilters(); renderChips(); renderGrid();

