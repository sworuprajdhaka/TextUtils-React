console.log("Ajax tutorial in one video");

let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler()
{
    console.log("You have clicked the the popHandler");

    //Instantiat an xhr object
    const xhr=new XMLHttpRequest();

    //Use this for post request
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader("Content-type,'application/x-www-form-urlencoded");

    //What do to on progress(optional)
    xhr.onprogress=function()
    {
        console.log('On progress');
    }

    xhr.onreadystatechange=function()
    {
        console.log("ready state is",xhr.readyState);
    }

    //What to do when the response is ready
    xhr.onload=function()
    {
        if(this.status==200)
        {
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let list=document.getElementById('list');
        str="";
        for(key in obj)
        {
            str+=`<li>${obj[key].employee_name}</li>`;
        }

        }
        else
        {
            console.log("Some error occurred.");
        }
    }
}

xhr.send();
console.log("We are done fetching employees!");