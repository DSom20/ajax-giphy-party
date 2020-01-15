async function getGIFs(e) {
    e.preventDefault();
    let searchTerm = $("#search").val();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "XpnJmFyftKp552IPQFxS4efe6Tb676RV"
        }
    });

    let gif1URL = response.data.data[1].images.fixed_height.url;
    let img1 = `<img src="${gif1URL}">`;
    $("#gif-container").append(img1);
}

function removeGIFs(e) {
    $("#gif-container").empty();
}

$("#submit").on("click", getGIFs);
$("#remove").on("click", removeGIFs);


// console.log(axios.get("http://api.giphy.com/v1/gifs/search", {params: {
//     q : "giraffe",
//     api_key : "XpnJmFyftKp552IPQFxS4efe6Tb676RV"
// }})
// )

// Api Key
//    XpnJmFyftKp552IPQFxS4efe6Tb676RV

// why await axios... won;t work in side a console.log...error is that it needs extra parentheses
