let button = document.getElementById("generatorButton");
async function generate(){
        const URL = 'https://api.adviceslip.com/advice';
        const request = await fetch(URL, {
            method: "GET",
            "Content-Type": "application/json",
            cors: "cors",
        });
        const response = await request.json();
    document.getElementById("advice").innerHTML ="'" + response.slip.advice + "'";
    document.getElementById("adviceId").innerHTML =response.slip.id;
}