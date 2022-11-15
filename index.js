function createGame(player1 , hour , player2){
    return `<li>
    <img src="./img/${player1}.png" alt="bandeira do ${player1}"> <strong>${hour}</strong> <img src="./img/${player2}.png" alt="bandeira do ${player2}"></li>`
}

function createCard(date, day, games){
    return `<div class="card">
    <h2>${date} <span> ${day}</span></h2>
    <ul>
       ${games}
       
    </ul>
</div>`
}



document.querySelector("#app").innerHTML = `
<header>
<img src="./img/header.png" alt="logo da NLW Copa">
            
</header>
<main id="cards">
${createCard("24/11", "QUINTA" , createGame('brazil','16:00','servia'))}
${createCard("28/11","SEGUNDA" , createGame('brazil','13:00','suiça'))}
${createCard("02/12","TERÇA", createGame('camaroes','16:00','brazil'))}
</main>
`