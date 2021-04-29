// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");


//UPDATE CHART
function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFF", - ratio, true);
    drawCircle("rgb(231, 33, 49)", 1 - ratio, false);
}