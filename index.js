
let allData;

fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
    .then(data => {

        allData = data;

        console.log("\n---------------------------------------------------------------------------------\n");
        exercise1(allData);
        console.log("\n---------------------------------------------------------------------------------\n");
        exercise2(allData);
        console.log("\n---------------------------------------------------------------------------------\n");
        exercise3(allData);
        console.log("\n---------------------------------------------------------------------------------\n");
        exercise4(allData);
        console.log("\n---------------------------------------------------------------------------------\n");
        exercise5(allData);

    });





function exercise1(allData) {

    console.log("Exercise 1\n");

    exercise1Sugar(allData);
    console.log(""); (allData);
    exercise1Iron(allData);
    console.log("");
    exercise1Protein(allData)
    console.log("");
    exercise1Fiber(allData);
    console.log("");

}

function exercise1Sugar(allData) {


    let sugarQuantity = 0;
    let names = [];
    // console.log(allData..item[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        let itemSugar = item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        itemSugar = itemSugar.replace("g", "");
        itemSugar = parseInt(itemSugar);

        if (itemSugar === sugarQuantity) {

            names.push(item.name);

        } else if (itemSugar > sugarQuantity) {

            sugarQuantity = itemSugar;
            names = [];
            names.push(item.name);

        }

    }


    console.log("+ The donut with the most sugar has " + sugarQuantity + "g: ");

    for (let i = 0; i < names.length; i++) {

        console.log("     ~~~> " + names[i]);

    }

}

function exercise1Protein(allData) {


    let proteinQuantity = 0;
    let names = [];

    // console.log(allData.items.item[0].nutrition_facts.nutrition.vitamines[0]);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        let itemProtein = item.nutrition_facts.nutrition.proteine;
        itemProtein = itemProtein.replace("g", "");
        itemProtein = parseInt(itemProtein);

        if (itemProtein === proteinQuantity) {

            names.push(item.name);

        } else if (itemProtein > proteinQuantity) {

            proteinQuantity = itemProtein;
            names = [];
            names.push(item.name);

        }

    }


    console.log("+ The donut with the most protein has " + proteinQuantity + "g: ");

    for (let i = 0; i < names.length; i++) {

        console.log("     ~~~> " + names[i]);

    }

}


function exercise1Iron(allData) {


    let ironQuantity = 0;
    let names = [];

    // console.log(allData.items.item[0].nutrition_facts.nutrition.vitamines[0]);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];
        const itemName = item.name;

        for (let i = 0; i < item.nutrition_facts.nutrition.vitamines.length; i++) {
            const vitamine = item.nutrition_facts.nutrition.vitamines[i];


            let itemIron = vitamine.percent;
            itemIron = itemIron.replace("%", "");
            itemIron = parseInt(itemIron);

            if (itemIron === ironQuantity) {

                names.push(item.name);

            } else if (itemIron > ironQuantity) {

                ironQuantity = itemIron;
                names = [];
                names.push(item.name);

            }
        }


    }


    console.log("+ The donut with the most iron has " + ironQuantity + "%: ");

    for (let i = 0; i < names.length; i++) {

        console.log("     ~~~> " + names[i]);

    }

}

function exercise1Fiber(allData) {


    let fiberQuantity = 0;
    let names = [];

    // console.log(allData.items.item[0].nutrition_facts.nutrition.vitamines[0]);


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        let itemFibre = item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        itemFibre = itemFibre.replace("g", "");
        itemFibre = parseInt(itemFibre);

        if (itemFibre === fiberQuantity) {

            names.push(item.name);

        } else if (itemFibre > fiberQuantity) {

            fiberQuantity = itemFibre;
            names = [];
            names.push(item.name);

        }




    }


    console.log("+ The donut with the most fibre has " + fiberQuantity + "g: ");

    for (let i = 0; i < names.length; i++) {

        console.log("     ~~~> " + names[i]);

    }

}


function exercise2(allData) {

    console.log("Exercise 2\n");


    console.log("");
    exercise2AllCalories(allData);
    console.log("");
    exercise2AllCarbohydrate(allData);
    console.log("");
    exercise2AllCaloriesMedia(allData);
    console.log("");
    exercise2SumSaturatedFat(allData);
    console.log("");
    exercise2AllVitaminesMedia(allData);
    console.log("");
}


function exercise2AllCalories(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("The donut -" + item.name + "- has " + item.nutrition_facts.nutrition.calories + " calories");

    }
}


function exercise2AllCarbohydrate(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+ The donut -" + item.name + "- has the following carbohydrates values:");
        console.log("     ~~~> Daily value: " + item.nutrition_facts.nutrition.carbohydrate.daily_value);
        console.log("     ~~~> Amount: " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);
        console.log("      ~~~> Fibre: " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);
        console.log("      ~~~> Sugar: " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);


    }
}

function exercise2AllCaloriesMedia(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    let sumCalories = 0;
    let itemQuantity = allData.items.item.length;
    let caloriesMedia = 0;

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        sumCalories += item.nutrition_facts.nutrition.calories;

    }

    caloriesMedia = (sumCalories / itemQuantity);

    console.log("The calories media of all the donuts is " + caloriesMedia.toFixed(2));



}

function exercise2SumSaturatedFat(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    let sumSaturatedFat = 0;

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        let itemSaturatedFat = item.nutrition_facts.nutrition.fat.fat_type.saturated;
        itemSaturatedFat = itemSaturatedFat.replace("g", "");
        itemSaturatedFat = parseInt(itemSaturatedFat);

        sumSaturatedFat += itemSaturatedFat;

    }


    console.log("The sum of the saturated fat of all the donuts is " + sumSaturatedFat + "g");



}

function exercise2AllVitaminesMedia(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    let sumVitamines = [];
    let nameVitamines = [];
    let vitamineQuantity = 0;

    for (let i = 0; i < allData.items.item[0].nutrition_facts.nutrition.vitamines.length; i++) {
        sumVitamines.push(0);
    }


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        for (let i = 0; i < item.nutrition_facts.nutrition.vitamines.length; i++) {

            const vitamine = item.nutrition_facts.nutrition.vitamines[i];
            vitamineQuantity = item.nutrition_facts.nutrition.vitamines.length;

            let itemVitamine = vitamine.percent;
            itemVitamine = itemVitamine.replace("%", "");
            itemVitamine = parseFloat(itemVitamine);

            sumVitamines[i] = itemVitamine + sumVitamines[i];
            nameVitamines[i] = vitamine.type;

        }
    }

    for (let i = 0; i < vitamineQuantity; i++) {

        let vitamineMedia = (sumVitamines[i] / vitamineQuantity);
        console.log("The media of the vitamine -" + nameVitamines[i] + "- is " + vitamineMedia.toFixed(2) + "%");
    }





}


function exercise3(allData) {

    console.log("Exercise 3\n");


    console.log("");
    exercise3PosibleButter(allData);
    console.log("");
    exercise3PosibleTopping(allData);
    console.log("");
}

function exercise3PosibleButter(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The donut -" + item.name + "- has the following posible butters:");

        for (let i = 0; i < item.batters.batter.length; i++) {
            const butter = item.batters.batter[i];
            console.log("     ~~~> " + butter.type);

        }
    }
}

function exercise3PosibleTopping(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The donut -" + item.name + "- has the following posible toppings:");

        for (let i = 0; i < item.topping.length; i++) {
            const topping = item.topping[i];
            console.log("     ~~~> " + topping.type);

        }
    }
}


function exercise4(allData) {

    console.log("Exercise 4\n");


    console.log("");
    exercise4HowManyDonutsCanBuy(allData);
    console.log("");
}


function exercise4HowManyDonutsCanBuy(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        let silverCoins = 4;
        let quantity = 0;

        do {
            quantity++;
            silverCoins -= item.ppu;
        } while ((silverCoins - item.ppu) > 0);

        console.log("You can buy " + quantity + " -" + item.name + "- donuts (the price is " + item.ppu.toFixed(2) + " silver coins or " + (item.ppu * 100).toFixed(0) + " bronze coins for 1 unity) and you have " + (silverCoins * 100).toFixed(0) + " bronze coins left");

    }
}

function exercise5(allData) {

    console.log("Exercise 5\n");

    exercise5UpdateTransFat(allData);
    console.log("");
    exercise5UpdateCarbohydrate(allData);
    console.log("");
    exercise5AddVitamineNitacina(allData);
    console.log("");
    exercise5UpdateCarbohydateDailyValue(allData);
    console.log("");
    exercise5NewAlergen(allData);
    console.log("");
}


function exercise5UpdateTransFat(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The trans fat of the donut-" + item.name + "- before the change is " + item.nutrition_facts.nutrition.fat.fat_type.trans + " and has " + item.nutrition_facts.nutrition.cholesterol.amount + " cholesterol");

        let itemCholesterol = item.nutrition_facts.nutrition.cholesterol.amount;
        itemCholesterol = itemCholesterol.replace("mg", "");
        itemCholesterol = parseInt(itemCholesterol);


        if (itemCholesterol > 12) {
            item.nutrition_facts.nutrition.fat.fat_type.trans = "3.2g"
            console.log("-The trans fat of the donut-" + item.name + "- after the change is " + item.nutrition_facts.nutrition.fat.fat_type.trans);

        } else {
            console.log("There are no need to update the trans fat value");

        }

        console.log("*****************************************************************");

    }
}

function exercise5UpdateCarbohydrate(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The carbohydrate amount of the donut-" + item.name + "- before the change is " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount + " and has " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars + " sugar");

        let itemSugars = item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        itemSugars = itemSugars.replace("g", "");
        itemSugars = parseInt(itemSugars);


        if (itemSugars > 50) {
            item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42g"
            console.log("-The carbohydrate amount of the donut-" + item.name + "- after the change is " + item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);

        } else {
            console.log("-There are no need to update the carbohydrate amount value");

        }

        console.log("*****************************************************************");

    }
}

function exercise5AddVitamineNitacina(allData) {


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The vitamines of the donut -" + item.name + "- before updates");


        for (let i = 0; i < item.nutrition_facts.nutrition.vitamines.length; i++) {
            const vitamine = item.nutrition_facts.nutrition.vitamines[i];
            console.log("     ~~~> " + vitamine.type + " has " + vitamine.percent);
        }


        if (item.name === "Magic Fusion") {
            const nicatina = {
                type: "Nicatina",
                percent: "2.1%",
            }

            item.nutrition_facts.nutrition.vitamines.push(nicatina);

            console.log("+The vitamines of the donut -" + item.name + " after updates");


            for (let i = 0; i < item.nutrition_facts.nutrition.vitamines.length; i++) {
                const vitamine = item.nutrition_facts.nutrition.vitamines[i];
                console.log("     ~~~> " + vitamine.type + " has " + vitamine.percent);
            }
        }else{
            console.log("This is not the donut -Magic Fusion-, there are not changes");
        }

        console.log("*****************************************************************");

    }
}


function exercise5UpdateCarbohydateDailyValue(allData) {

    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);


    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+The carbohydrate daily value of the donut-" + item.name + "- before the change is " + item.nutrition_facts.nutrition.carbohydrate.daily_value);
        
        item.nutrition_facts.nutrition.carbohydrate.daily_value = "53%"

        console.log("-The carbohydrate daily value of the donut-" + item.name + "- after the change is " + item.nutrition_facts.nutrition.carbohydrate.daily_value);

    
        console.log("*****************************************************************");

    }
}

function exercise5NewAlergen(allData) {
    
    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        

        if (item.name === "Relaxing Alchemy") {

            console.log("+ The donut -" + item.name + "- has the following values before updating:");
            console.log(item);

            const alergen = {
                type: "Gluten Free",
            }

            item.alergen = alergen;
            
            
            console.log("+ The donut -" + item.name + "- has the following values after updating:");
            console.log(item);
        }else{
            console.log("+The donut -"+ item.name + "- does not need to update");
            
        }

        
    }
}