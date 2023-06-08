

let datalist=[]

async function getData(type)
{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11c8587924mshe3bf68c89100cffp1ae2d2jsn9cdc9c732b42',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    


    let result=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
    let data=await result.json()
    datalist=data
    display()
}

getData("mmorpg")


// بتعرض الالعاب
function display()
{
    temp=''
    datalist.forEach(element => {
        temp+=
        `
        <div gameId=${element.id} class="col-md-3 text-center item border border-1 border-dark g-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img src="${element.thumbnail}" alt="" class="w-100 h-50 p-3">
        <p class='text-white px-2'>${element.title}</p>
        <p class='desc text-center px-1'>${element.short_description.split(" ").splice(0,10).join(" ")}</p>
        <div class='brd-tb pt-3 d-flex justify-content-between px-2 pt-4'>
        <p  class='f-div'>${element.genre}</p>
        <p  class='f-div'>${element.platform}</p>
        </div>

        
      </div>
        `
    });
    document.getElementById('myRow').innerHTML=temp
    getIdOFGame()
}


let links=document.querySelectorAll('.nav-link')







// // كده بتجيب نوع اللعبه
function getSpecialGame() {
    
    links.forEach(element => {
        element.addEventListener('click',function () {
           let type=this.getAttribute("about_game")
           getData(type)
        })
    });
}

getSpecialGame()






let specialGame=[]
async function getDetails(id)
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11c8587924mshe3bf68c89100cffp1ae2d2jsn9cdc9c732b42',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    let response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    let data=await response.json()
    specialGame=data
     displayGame()


}



function displayGame()
{

    document.getElementById('myImage').setAttribute('src',specialGame.thumbnail)
    document.getElementById('myTiltle').innerHTML=specialGame.title
    document.getElementById('short_description').innerHTML=specialGame.short_description
    document.getElementById('details').setAttribute('href',specialGame.game_url)
    document.getElementById('cate').innerHTML=specialGame.genre
    document.getElementById('platform').innerHTML=specialGame.platform
    document.getElementById('status').innerHTML=specialGame.status



}


// // هنلف علي الالعاب  عشان نجيب التفاصيل بتاعتهم


function getIdOFGame()
{
    let items=document.querySelectorAll('.item')

    items.forEach(element => {
        element.addEventListener('click',function (){
            let idOfGame=this.getAttribute("gameId")

            getDetails(idOfGame)
        })
        
    }); 
}


var allLinks = btnContainer.querySelectorAll(".nav-link");

for (var i = 0; i < btns.length; i++) {
    allLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
} 
