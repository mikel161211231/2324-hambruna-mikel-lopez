
let allData;

fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
    .then(data => {

        allData = data;

        console.log("\n---------------------------------------------------------------------------------\n");
        exercise1(allData);
        console.log("\n---------------------------------------------------------------------------------\n");
        exercise2(allData);


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

}


function exercise2AllCalories(allData) {
    
    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("The donut -"+ item.name +"- has "+ item.nutrition_facts.nutrition.calories +" calories");
        
    }
}


function exercise2AllCarbohydrate(allData) {
    
    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];

        console.log("+ The donut -"+ item.name +"- has the following carbohydrates values:");
        console.log("     ~~~> Daily value: "+ item.nutrition_facts.nutrition.carbohydrate.daily_value);
        console.log("     ~~~> Amount: "+ item.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);
        console.log("      ~~~> Fibre: "+ item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);
        console.log("      ~~~> Sugar: "+ item.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        
        
    }
}

function exercise2AllCaloriesMedia(allData) {
    
    // console.log(allData.items.item[0].nutrition_facts.nutrition.calories);
    
    let sumSaturatedFat = 0;

    for (let i = 0; i < allData.items.item.length; i++) {
        const item = allData.items.item[i];
        
        let itemSaturatedFat = item.nutrition_facts.nutrition.fat.fat_type.saturated;
        itemSaturatedFat = itemSaturatedFat.replace("g", "");
        itemSaturatedFat = parseInt(itemSaturatedFat);

        sumSaturatedFat += itemSaturatedFat;
        
    }


    console.log("The sum of the saturated fat of all the donuts is "+ sumSaturatedFat.toFixed(2));
    


}

