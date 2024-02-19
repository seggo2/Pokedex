
 


async function chartrender(i) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['hp', 'atack', 'defense', 'special-atack', 'special-Defense', 'Speed'],
            datasets: [{
                label: 'Stats',
                data: [currentpokemon[i]['stats'][0]['base_stat'], currentpokemon[i]['stats'][1]['base_stat'], currentpokemon[i]['stats'][2]['base_stat'], currentpokemon[i]['stats'][3]['base_stat'], currentpokemon[i]['stats'][4]['base_stat'], currentpokemon[i]['stats'][5]['base_stat']],
                borderWidth: 2,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',

               
            }]
        },
        options: {
            
          scales:{
            r:{
                angleLines:{
                color:'black'
                },
                grid:{
                    color:'black'
                },
                ticks:{
                    color:'blue'
                }
                
            }
          }
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20
                        },
                    }
                }
            }
        },
         
    });    
}
