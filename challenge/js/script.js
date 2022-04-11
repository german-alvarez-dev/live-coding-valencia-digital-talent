Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


fetch('https://multiapi-app.herokuapp.com/foods')
    .then(response => response.json())
    .then(foods => printFoodsCharts(foods))



function printFoodsCharts(foods) {

    const [carrot, pumpkin, corn] = foods       // Tendrás que hacer uso también de los datos de los demás alimentos: aguacate, ternera...

    printCaloriesChart(carrot, pumpkin, corn)
}



function printCaloriesChart(carrot, pumpkin, corn) {

    // console.log('Estos son los datos del primer alimento:', carrot)
    // console.log('Puedo acceder a sus calorías a través de la propiedad kcal:', carrot.kcal)
    // console.log('Puedo acceder a sus proteínas a través de la propiedad protein:', carrot.protein)

}