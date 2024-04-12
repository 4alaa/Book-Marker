var websiteName=document.getElementById("websiteName")
var websiteURL=document.getElementById("websiteURL")



var myLniks=[]
if(localStorage.getItem("storageLinks"))
{
    myLniks=JSON.parse(  localStorage.getItem("storageLinks")  )
    displyLinks()

}
var Link;

// add link
function addLink()
{

    validateInputs()
    if(validateInputs()==true)
    {

            // object of the added link
    LinkOFpage=
    {
        siteName:websiteName.value,
        siteUrl:websiteURL.value,
    }

    // add it to the other links
    myLniks.push(LinkOFpage)

    // save
    localStorage.setItem("storageLinks",JSON.stringify(myLniks))

    displyLinks()

    // clear all inputs 
    claerInputs()



    }


}





// view all links
var cartoona;
function displyLinks()
{
    cartoona=''
    for (let i = 0; i < myLniks.length; i++) {
       
        cartoona+=
        `
        <div class="col-md-4">
        <div class="text-center border border-2 border-secondary p-4 link_contain">
        <p class="text-warning text-center fs-5">( ${i+1} )</p>
        <h3 class="d-flex align-items-center justify-content-center mb-4"><img class="linkimg me-2" id="linkimg${i}"  src="urlicons/unkownUrl.png"alt="">${myLniks[i].siteName}</h3>
        <div class="d-flex justify-content-center">

        <a  href="${myLniks[i].siteUrl}" target="_blank" class="linkEye btn btn-outline-info me-2"><i class="fa-solid fa-eye"></i></a>
        <button onclick="selcetLinkToUpdate(${i})" class="btn btn-outline-success me-2"><i class="fa-solid fa-pen"></i></button>
        <button  onclick="deleteLink(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can-arrow-up"></i></button>

        </div>

        </div>
        </div>

        `


        
    }
    
    document.getElementById("htmlLinks").innerHTML=cartoona


    

    // after display you will set img
    for (let i = 0; i < myLniks.length; i++) {
        if(myLniks[i].siteUrl.trim().toLowerCase().includes("facebook".trim().toLowerCase()))
        {
           document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/1.png"); 
        }  
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("mail.google".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/2.png"); 

        }      
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("whatsapp".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/3.png"); 

        }    
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("youtube".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/4.png"); 

        }    
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("twitter".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/5.png"); 

        }    
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("instagram".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/6.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("github".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/7.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("bootstrap".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/8.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("www.google.com".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/9.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("drive.google".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/10.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("play.google".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/11.png"); 

        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("www.google.com/maps".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/12.png"); 
            
        }
        else if(myLniks[i].siteUrl.trim().toLowerCase().includes("meet.google".trim().toLowerCase()))
        {
            document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/13.png"); 
        }
        

    }









    if(myLniks.length>0)
    {
            document.getElementById("DeleteAllBtn").classList.remove("d-none")
            document.getElementById("totalLinks").innerHTML=` ${myLniks.length }`
    }
    else
    {
        document.getElementById("totalLinks").innerHTML=` NO LINKS`

    }
}


if(myLniks.length>0)
{
        document.getElementById("DeleteAllBtn").classList.remove("d-none")
        document.getElementById("totalLinks").innerHTML=` ${myLniks.length }`
}
else
{
    document.getElementById("totalLinks").innerHTML=`NO LINKS`

}



// selcet to update
var updateIndex
function selcetLinkToUpdate(selectIndex) {
updateIndex=selectIndex

window.scrollTo(0, 0);

websiteName.value=myLniks[selectIndex].siteName
websiteURL.value=myLniks[selectIndex].siteUrl

document.getElementById("ubpadreBtn").classList.remove("d-none")
websiteName.classList.remove("is-valid")
websiteName.classList.remove("is-invalid")
document.getElementById("NameAlert").classList.add("d-none")

websiteURL.classList.remove("is-valid")
websiteURL.classList.remove("is-invalid")
document.getElementById("URLAlert").classList.add("d-none")
document.getElementById("updateNum").innerHTML=`number ${selectIndex+1}`

document.getElementById("addLink").classList.add("d-none")

}


// update
function updateLink()
{
validateInputs()
if(validateInputs()==true)
{
    myLniks[updateIndex].siteName=websiteName.value
    myLniks[updateIndex].siteUrl=websiteURL.value
    
    
    
    // save
    localStorage.setItem("storageLinks",JSON.stringify(myLniks))
    
    displyLinks()
    
    // clear all inputs 
    claerInputs()

    document.getElementById("ubpadreBtn").classList.add("d-none")
    document.getElementById("addLink").classList.remove("d-none")







}

}



// delete
function deleteLink(selectIndex)
{
    myLniks.splice(selectIndex,1)
    // save
    localStorage.setItem("storageLinks",JSON.stringify(myLniks))

    displyLinks()
}

// delete all linkes
function deleteAllLinks()
{
    myLniks.splice(0)
    // save
    localStorage.removeItem("storageLinks")

    displyLinks()

    document.getElementById("DeleteAllBtn").classList.add("d-none")

    document.getElementById("sure").classList.toggle("d-none")

    document.getElementById("totalLinks").innerHTML=` NO LINKS`


}




// clear inputs
var searchValue=document.getElementById("searchValue")

function claerInputs()
{
websiteName.value=""
websiteURL.value=""
searchValue.value=""

websiteName.classList.remove("is-valid")
websiteName.classList.remove("is-invalid")
document.getElementById("NameAlert").classList.add("d-none")

websiteURL.classList.remove("is-valid")
websiteURL.classList.remove("is-invalid")
document.getElementById("URLAlert").classList.add("d-none")


}


claerInputs()


// search mood

function searchNameMood()
{
    
    document.getElementById("searchValue").placeholder="Search By Name"
    document.getElementById("searchValue").value=""
    displyLinks()

}



// search 
function searchLink()
{

        cartoona=''

        for (let i = 0; i < myLniks.length; i++) {
            
            
            if(myLniks[i].siteName.includes(searchValue.value.trim().toLowerCase()))
            {   
                    cartoona+=
                    `
                    <div class="col-md-4">
                    <div class="text-center border border-2 border-secondary p-4 link_contain">
                    <p class="text-info text-center fs-5">( ${i+1} )</p>
                    <h3 class="d-flex align-items-center justify-content-center mb-4"><img class="linkimg me-2" id="linkimg${i}"  src="urlicons/unkownUrl.png"alt="">${myLniks[i].siteName.replace(searchValue.value.trim().toLowerCase(),`<span class="text-danger my-3">${searchValue.value.trim().toLowerCase()}</span>`)}</h3>

                    <div class="d-flex justify-content-center">
            
                    <a  href="${myLniks[i].siteUrl}" target="_blank" class="linkEye btn btn-outline-info me-2"><i class="fa-solid fa-eye"></i></a>
                    <button onclick="selcetLinkToUpdate(${i})" class="btn btn-outline-success me-2"><i class="fa-solid fa-pen"></i></button>
                    <button  onclick="deleteLink(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can-arrow-up"></i></button>
            
                    </div>
            
                    </div>
                    </div>
            
                    ` 

                    
                
            }
            
            




            
            document.getElementById("htmlLinks").innerHTML=cartoona
    
    
            
        }


                   // after display you will set img
                   for (let i = 0; i < myLniks.length; i++) {
                    if(myLniks[i].siteName.includes(searchValue.value.trim().toLowerCase()))
                    {   
                    if(myLniks[i].siteUrl.trim().toLowerCase().includes("facebook".trim().toLowerCase()))
                    {
                    document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/1.png"); 
                    }  
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("mail.google".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/2.png"); 
    
                    }      
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("whatsapp".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/3.png"); 
    
                    }    
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("youtube".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/4.png"); 
    
                    }    
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("twitter".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/5.png"); 
    
                    }    
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("instagram".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/6.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("github".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/7.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("bootstrap".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/8.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("www.google.com".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/9.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("drive.google".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/10.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("play.google".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/11.png"); 
    
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("www.google.com/maps".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/12.png"); 
                        
                    }
                    else if(myLniks[i].siteUrl.trim().toLowerCase().includes("meet.google".trim().toLowerCase()))
                    {
                        document.getElementById(`linkimg${i}`).setAttribute("src", "urlicons/13.png"); 
                    }
                    
                   }
                    }






        if(searchValue.value=='')
        {
            displyLinks()
        }


        


}




// validation
var regex
function nameValidation()
{
    regex=/^[a-z].{4,12}$/
    if(regex.test(websiteName.value))
    {
        websiteName.classList.add("is-valid")
        websiteName.classList.remove("is-invalid")
        document.getElementById("NameAlert").classList.add("d-none")
        return true

    }
    else
    {
        websiteName.classList.remove("is-valid")
        websiteName.classList.add("is-invalid")
        document.getElementById("NameAlert").classList.remove("d-none")
        return false
    }
}


























function urlValidation()
{
    regex=/^(https:\/\/|http:\/\/)?(www)?\.?.*\.com/;
    if(regex.test(websiteURL.value))
    {
        websiteURL.classList.add("is-valid")
        websiteURL.classList.remove("is-invalid")
        document.getElementById("URLAlert").classList.add("d-none")
        return true


    }
    else
    {
        websiteURL.classList.remove("is-valid")
        websiteURL.classList.add("is-invalid")
        document.getElementById("URLAlert").classList.remove("d-none")
        return false


    }
}




function validateInputs()
{
    nameValidation()
    urlValidation()
    if(nameValidation()==true&&urlValidation()==true)
    {
        return true
    }
    else
    {
        return false
    }
}



function arrowUp() {
    window.scrollTo(0, 0);
  }
  



  function sure()
  {
    document.getElementById("sure").classList.toggle("d-none")
  }




  



var app = document.getElementsByTagName("body")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}

function toggle_light_mode() {
    var app = document.getElementsByTagName("body")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");

    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");

    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);
