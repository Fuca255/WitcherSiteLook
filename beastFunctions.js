let monsters;

function showClassAndWeakness()
{
    let klase=new Set();
    let slabosti= new Set();
    let content="<option>All</option>";
    let contentSlabosti="<option>All</option>";
    for(let i=0;i<monsters.length;i++)
    {
        let klasa=monsters[i].getElementsByTagName("class")[0].textContent;
        let listWeakness=monsters[i].getElementsByTagName("weaknesses")[0];
        let weaknesses=listWeakness.getElementsByTagName("weakness");
        for(let j=0;j<weaknesses.length;j++)
            slabosti.add(weaknesses[j].textContent);
        klase.add(klasa);
    }
    klase.forEach(function(value){
        content+="<option>"+value+"</option>"
    })
    slabosti.forEach(function(value){
        contentSlabosti+="<option>"+value+"</option>"
    })
    document.getElementById("klasa").innerHTML=content;
    document.getElementById("slabost").innerHTML=contentSlabosti;
}
function checkWeakness(weaknesses,value)
{
    for(let j=0;j<weaknesses.length;j++)
    {
        if(weaknesses[j].textContent==value)
            return true;
    }
    return false;
}
function showDetails(elem)
{
    let content="<p>Name: <span>";
    let id=elem.id;
    let i=Number(id.split("_")[1]);
    let name=monsters[i].getElementsByTagName("name")[0].textContent;
    let klasa=monsters[i].getElementsByTagName("class")[0].textContent;
    let immunity=monsters[i].getElementsByTagName("immunity")[0].textContent;
    let lore=monsters[i].getElementsByTagName("lore")[0].textContent;
    let listWeakness=monsters[i].getElementsByTagName("weaknesses")[0];
    let listOccurrances=monsters[i].getElementsByTagName("occurrences")[0];
    let occurrances=listOccurrances.getElementsByTagName("occurrence");
    let weaknesses=listWeakness.getElementsByTagName("weakness");
    content+=name+"</span></p><p>Class: <span>";
    content+=klasa+"</span></p><p>Immunity: <span>";
    content+=immunity+"</span></p><p>Occurrances:</p><ol>"
    for(let j=0;j<occurrances.length;j++)
    {
        content+="<li>"+occurrances[j].textContent+"</li>";
    }
    content+="</ol><p>Weaknesses:</p><ol>"
    for(let j=0;j<weaknesses.length;j++)
    {
        content+="<li>"+weaknesses[j].textContent+"</li>";
    }
    content+="</ol><p>Lore:<span><br>"+lore+"</span></p>";
    document.getElementById("details").innerHTML=content;
}
function showPointer(elem)
{
    let id=elem.id;
    let i=Number(id.split("_")[1]);
    let content="<img style='width: 65px;' src='images/arrow.jpg' alt='arrow'>";
    let str="pointer_"+i;
    document.getElementById(str).innerHTML=content;
}
function deletePointer(elem)
{
    let id=elem.id;
    let i=Number(id.split("_")[1]);
    let str="pointer_"+i;
    document.getElementById(str).innerHTML="";
}
function showTable()
{
    document.getElementById("details").innerHTML="THERE ARE NO DETAILS SHOWING";
    let search=document.getElementById("search").value;
    let RegSearch=new RegExp(search.toLowerCase());
    let selectWeak= document.getElementById("slabost").value;
    let selectClass=document.getElementById("klasa").value;
    let content="<table>";
    content+="<tr id='prvi'>";
    content+="<th>Pointer</th>";
    content+="<th>Name</th>";
    content+="<th>Occurrances</th>";
    content+="<th>Weaknesses</th>";
    content+="<th>Class</th>";
    content+="</tr>";
    for(let i=0;i<monsters.length;i++)
    {
        let name=monsters[i].getElementsByTagName("name")[0].textContent;
        let klasa=monsters[i].getElementsByTagName("class")[0].textContent;
        let listWeakness=monsters[i].getElementsByTagName("weaknesses")[0];
        let listOccurrances=monsters[i].getElementsByTagName("occurrences")[0];
        let occurrances=listOccurrances.getElementsByTagName("occurrence");
        let weaknesses=listWeakness.getElementsByTagName("weakness");
        if((RegSearch.test(name.toLowerCase()) || search=="") && 
        (klasa==selectClass || selectClass=="All") &&
        (selectWeak=="All" || checkWeakness(weaknesses,selectWeak)))
        {
            content+="<tr id='red_"+i+"'onclick='showDetails(this)' onmouseover='showPointer(this)' onmouseout='deletePointer(this)'>";
            content+="<td id='pointer_"+i+"'></td>";
            content+="<td>"+name+"</td><td>";
            for(let j=0;j<occurrances.length;j++)
            {
                content+=occurrances[j].textContent+"<br>";
            }
            content+="</td><td>";
            for(let j=0;j<weaknesses.length;j++)
            {
                content+=weaknesses[j].textContent+"<br>";
            }
            content+="<td>"+klasa+"</td>";
            content+="</tr>";
        }
    }
    content+="</table>"
    document.getElementById("content").innerHTML=content;
}
function loadXML()
{
    let httpXML= new XMLHttpRequest();
    httpXML.onload = function()
    {
        if(httpXML.status!=200) return;
        let xmlDoc=httpXML.responseXML;
        monsters=xmlDoc.getElementsByTagName('monster');
        showClassAndWeakness();
        showTable();
    }
    httpXML.open("GET","monsters.xml",true);
    httpXML.send();
}