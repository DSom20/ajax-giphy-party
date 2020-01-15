async function getJokes() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let json = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        accept: "text/plain"
      }
    })
    arr.push(json.data);
  }
  jokeListDisplay(arr);
}

function jokeListDisplay(jokes){
  for(let i in jokes){
    let upButton = `<button class="upBtn">I like this</button>`;
    let downButton = `<button class="downBtn">This is bad</button>`;
    let scoreSpan = `<span>0</span>`;
    let li = `<li>${upButton}${downButton}  ||  ${scoreSpan}  ||  ${jokes[i]}</li>`;
    $("#joke-list").append(li);
  }
}

$("#joke-list").on("click","button",function(event){
  let btn = $(event.target);
  let targ = btn.siblings("span");
  let prevVal = Number.parseInt(targ.text());
  if(btn.hasClass("upBtn")){
    prevVal += 1;
  }
  if(btn.hasClass("downBtn")){
    prevVal -= 1;
  }
  targ.text(prevVal);
  reprintListSorted();
});

function reprintListSorted(){
  let ul = $("#joke-list")
  let lis = ul.children("li");
  lis.sort(sortTwoJokes);
  ul.empty();
  ul.append(lis);
}

function sortTwoJokes(a, b){
  let aText = $(a).children("span").text();
  let bText = $(b).children("span").text();
  return Number.parseInt(bText) - Number.parseInt(aText);
}

getJokes();