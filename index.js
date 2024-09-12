
let allData;

fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
    .then(data => { 
        
        allData = data; 
    
        console.log("\n---------------------------------------------------------------------------------\n");
        
    
        exercise1(allData);


    
    });





function exercise1(allData) {

    console.log("Exercise 1\n");
    

    exercise1Sugar(allData);
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

        }else if( itemSugar > sugarQuantity){

            sugarQuantity = itemSugar;
            names = [];
            names.push(item.name);
            
        }
        
    }


    console.log("+ The donut with the most sugar has "+ sugarQuantity +"g: ");

    for (let i = 0; i < names.length; i++) {

        console.log("     ~~~> "+ names[i]);
        
    }
    
}





