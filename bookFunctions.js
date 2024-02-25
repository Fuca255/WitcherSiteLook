let books;

let korpa=[]
function checkForm()
{
    if(korpa.length==0)
    {
        alert("Your basket is empty!!!");
        return;
    }
    let name=document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let adress=document.getElementById("adress").value;
    let number=document.getElementById("number").value;
    let mail=document.getElementById("mail").value;
    let regNameSurname=/^[a-z]{2,}$/i;
    let regAdress=/^[A-Z][a-zA-Z\ ]{2,}([0-9]{1,3}(\/[0-9]{1,})*)$/;
    let regNumber=/^\+[0-9]{3}\ *[0-9]{2}\ *[0-9]{3}\ *[0-9]{4}$/;
    let regMail=/^[a-z][a-z0-9\~\-\_\.]{1,}[a-z0-9]{1}(\@[a-z]{3,6}\.com)$/;
    let message="";
    let flag=1;
    if(!regNameSurname.test(name))
    {
        flag=0;
        message+="Name is not valid(it should have at least 2 letters)\n";
    }
    if(!regNameSurname.test(surname))
    {
        flag=0;
        message+="Surname is not valid(it should have at least 2 letters)\n";
    }
    if(!regAdress.test(adress))
    {
        flag=0;
        message+="Address is not valid(it should start with Capital letter and should have letters and numbers)\n";
    }
    if(!regMail.test(mail))
    {
        flag=0;
        message+="Email is not valid(It consists only of letters,numbers,.,~,_)\n";
    }
    if(!regNumber.test(number))
    {
        flag=0;
        message+="Contact number is not valid(Format:+XXX XX XXX XXXX)\n";
    }
    if(flag)
    {
        message="Thank you for your purchase, hope you will enjoy it :)";
        document.getElementById("name").value="";
        document.getElementById("surname").value="";
        document.getElementById("adress").value="";
        document.getElementById("number").value="";
        document.getElementById("mail").value="";
        removeAll();
        prompt(message);
    }
    else
    {
        alert(message);
    }
}
function removeAll()
{
    korpa=[];
    for(let i=0;i<books.length;i++)
    {
        let elem=document.getElementById("book_"+i);
        elem.checked=false;
        addToBasket(elem);
    }
    document.getElementById("korpa").innerHTML="Currently there are no selected items";
}
function selectAll()
{
    korpa=[];
    for(let i=0;i<books.length;i++)
    {
        let elem=document.getElementById("book_"+i);
        elem.checked=true;
        addToBasket(elem);
    }
    document.getElementById("total").innerHTML="Total:150$";
}
function addToBasket(elem)
{
    let content="<ol>";
    let sum=0;
    let id=elem.id;
    let i=Number(id.split("_")[1]);
    if(elem.checked)
    {
        korpa.push(books[i].getElementsByTagName("title")[0].textContent);
    }
    else{
        let index=korpa.indexOf(books[i].getElementsByTagName("title")[0].textContent);
        korpa.splice(index,1);
    }

    for(let j=0;j<books.length;j++)
    {
        let title=books[j].getElementsByTagName("title")[0].textContent;
        for(let k=0;k<korpa.length;k++)
        {
            if(title==korpa[k])
            {
                content+="<li>"+title+"</li>";
                sum+=Number(books[j].getElementsByTagName("price")[0].textContent);
                break;
            }
        }
    }
    content+="</ol>"
    content+="<p id='total'>Total:"+sum+"$</p>";
    document.getElementById("korpa").innerHTML=content;
    if(korpa.length==9)
        document.getElementById("total").innerHTML="Total:150$";
    if(korpa.length==0)
        document.getElementById("korpa").innerHTML="Currently there are no selected items";
}
function addBook(elem)
{
    let id=elem.id;
    let i=Number(id.split("_")[1]);
    let checkbox=document.getElementById("book_"+i);
    if(checkbox.checked)
        checkbox.checked=false;
    else
        checkbox.checked=true;
    addToBasket(checkbox);
}
function showBooks()
{
    let content="";
    if(korpa.length==0)
        document.getElementById("korpa").innerHTML="Currently there are no selected items";
    for(let i=0;i<books.length;i++)
    {
        content+="<div class='knjiga'>";
        let title=books[i].getElementsByTagName("title")[0].textContent;
        let slika=books[i].getElementsByTagName("slika")[0].textContent;
        let price=books[i].getElementsByTagName("price")[0].textContent;
        content+="<h3>"+title+"</h3>";
        content+="<img id='img_"+i+"' src='images/knjige/"+slika+"' alt='"+title+"' onclick='addBook(this)' >";
        content+="<p><span>Price:</span>"+price+"$</p>";
        content+="<input id='book_"+i+"' type='checkbox' onclick='addToBasket(this)'>";
        content+="</div>"
    }
    content+="<br>"
    document.getElementById("knjige").innerHTML=content;
}

function loadXML()
{
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onload= function()
    {
        if(xmlhttp.status!=200) return;

        let xmlDoc=xmlhttp.responseXML;
        books=xmlDoc.getElementsByTagName("book");
        showBooks();
    }

    xmlhttp.open("GET","witcherBooks.xml",true);
    xmlhttp.send();
}