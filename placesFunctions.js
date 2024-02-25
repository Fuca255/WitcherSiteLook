let oldContent;

function showRest()
{
    let content=document.getElementById("galerija_kingdoms");
    oldContent=document.getElementById("galerija_kingdoms").innerHTML;
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");
    div1.className="kingdom";
    div2.className="kingdom";
    div3.className="kingdom";
    div4.className="kingdom";

    let h31=document.createElement("h3");
    let h32=document.createElement("h3");
    let h33=document.createElement("h3");
    let h34=document.createElement("h3");

    h31.innerHTML="Cintra";
    h32.innerHTML="Nilfgaardian Empire";
    h33.innerHTML="Skellige";
    h34.innerHTML="Kovir and Poviss";
    div1.appendChild(h31);
    div2.appendChild(h32);
    div3.appendChild(h33);
    div4.appendChild(h34);

    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img3=document.createElement("img");
    let img4=document.createElement("img");
    
    img1.src="images/Drzave/Cintra.png";
    img2.src="images/Drzave/NilfGard.png";
    img3.src="images/Drzave/Skellige.png";
    img4.src="images/Drzave/KovirPovis.png";

    img1.alt="Cintra";
    img2.alt="Nilfgard";
    img3.alt="Skellige";
    img4.alt="KovisPovris";

    div1.appendChild(img1);
    div2.appendChild(img2);
    div3.appendChild(img3);
    div4.appendChild(img4);

    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");
    let p4=document.createElement("p");

    p1.innerHTML="Cintra (Elder Speech: Xin'trea) is one of the Northern Kingdoms, located south of Sodden, Riverdell, and the great river Yaruga.Cintra was a very powerful kingdom in the times of Queen Calanthe, but was conquered by Nilfgaard during the First Nilfgaard War. After the Second Nilfgaard War, the kingdom was nominally an independent state, but was actually ruled by Emperor Emhyr var Emreis of Nilfgaard because of his marriage to Empress Cirilla, also known as False Ciri.";
    p1.innerHTML+="Cintra was a very powerful kingdom in the times of Queen Calanthe, but was conquered by Nilfgaard during the First Nilfgaard War. After the Second Nilfgaard War, the kingdom was nominally an independent state, but was actually ruled by Emperor Emhyr var Emreis of Nilfgaard because of his marriage to Empress Cirilla, also known as False Ciri.";
    p1.innerHTML+="Cintra's neighbors are Sodden, Brugge, and the Nilfgaard province of Nazair. When Emhyr var Emreis proclaimed False Ciri queen, he also named her princess of Brugge, duchess of Sodden, heir of Skellige, and sovereign of Attre and Abb Yarra.";
    p2.innerHTML="Nilfgaardian Empire is the most powerful empire in the history of the known world. It is located in the southern part of the Continent and boasts both a thriving economy and a strong, well-trained army with talented commanders. It has expanded mostly through the conquest of foreign countries, which were then turned into provinces of the Empire. The Empire's inhabitants believe that 'real' Nilfgaardians are only those born in the heart of the Empire, and not those born in the conquered provinces.";
    p2.innerHTML+="The provinces are ruled by either stewards or kings (in cases in which a king willingly surrenders, he retains his throne but is subject to the Emperor or just a vassal). The empire has expanded throughout the years, conquering new lands and going as far to the north as the Yaruga River during the reign of Emperor Emhyr var Emreis.";
    p2.innerHTML+="In the Northern Kingdoms, the Empire is portrayed as an overarching antagonist, with many free people of the North expressing hatred towards it with passion.";
    p3.innerHTML="Skellige, commonly referred to as the Skellige Isles or the Isles of Skellige, is an archipelago and one of the Northern Kingdoms. The group of six islands is situated in the Great Sea, off the coast of Cintra and southwest of Cidaris and Verden. It's legendary, famous for the unrivaled corsairs and swift longships that sail many seas.";
    p3.innerHTML+="Its people are united under the King of the Skellige Isles, who's elected by the jarls of the seven major clans during traditional moots. In practice, however, the kings are from the same clan or at least related." ;
    p3.innerHTML+="Even though their relations with most of the North were always tense, to say the least, they were longtime allies of Cintra, due to the marriage between Queen Calanthe and Eist Tuirseach of Skellige. After King Eist's death in the Battle of Marnadal, the Islanders concentrated their raids on the Nilfgaardian Empire in an act of revenge.";
    p4.innerHTML="The Kingdom of Kovir and Poviss (also known shortly as Kovir and Poviss or simply Kovir) is one of the Northern Kingdoms located on the Gulf of Praxeda. It is also the largest exporter of mineral resources in the known world, with huge profits from trade. It is ruled by king Tankred Thyssen of the House of Thyssen and maintained neutrality during the Second Nilfgaard War, refraining from lending coin or men to either side.";
    p4.innerHTML+="Because it is so mountainous, the region is rich in mines. Kovir and Poviss export glass, salt, iron ore, silver, nickel, lead, tin, zinc, copper, chromium, titanium, tungsten, and platinum. The Kingdom accounts for three-quarters of the world's ferroaurum, kryobelitium, and dimeritium and 80% of the world's gold.";

    div1.appendChild(p1);
    div2.appendChild(p2);
    div3.appendChild(p3);
    div4.appendChild(p4);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
    let buttons="<button onclick='showLess()'>Show less</button>";
    document.getElementById("buttonMore").innerHTML=buttons;
}
function showLess()
{
    document.getElementById("galerija_kingdoms").innerHTML=oldContent;
    let buttons="<button onclick='showRest()'>Show more</button>";
    document.getElementById("buttonMore").innerHTML=buttons;
}