var srchTerm;
function findCaliforniaCafes(srchTerm) {
    
    let C_id;
    let final_arr = [];
    
    const cafes = [{
        "name": "Ashley's Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
        },
        {
        "name": "Avenue Bakery Cafe",
        "place_id": "jahgde7wgdiau8ewsahgosd"
        },
        {
        "name": "Avenue Cafe",
        "place_id": "skjd86svvfdrsv55svbvf3f"
        },
        {
        "name": "Bazaar Cafe",
        "place_id": "kjk234g4gcvfx8usg1l33pi"
        },
        {
        "name": "California Chicken Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
        },
        {
        "name": "Hi-Lo Cafe",
        "place_id": "mjdhgetr4pojfyts22fzfsh"
        },
        {
        "name": "Philz Coffee",
        "place_id": "urhw3837ehalod7w02b7835"
        }];
    const places = [{
        "id": "12hydbdf76sljfts87sbfis",
        "street_no": "1B",
        "locality": "Macarthur Blvd",
        "postal_code": "20619",
        
        "lat": "38.1781 N",
        "long": "118.4171 W"
        },
        {
        "id": "jahgde7wgdiau8ewsahgosd",
        "street_no": "60H",
        "locality": "Solomos Island Road",
        "postal_code": "20688",
        "lat": "36.7783 N",
        "long": "119.4179 W"
        },
        {
        "id": "kjk234g4gcvfx8usg1l33pi",
        "street_no": "45250",
        "locality": "Worth Avenue, Unit A",
        "postal_code": "20619",
        "lat": "36.1152",
        "long": "117.521"
        },
        {
        "id": "saswe3s6yydtdr52hsd72yst",
        "street_no": "1X",
        "locality": "Macarthur Blvd",
        "postal_code": "20687",
        "lat": "36.7783",
        "long": "119.4179"
        },
        {
        "id": "skjd86svvfdrsv55svbvf3f",
        "street_no": "7S",
        "locality": "Three Notch Road",
        "postal_code": "20619",
        "lat": "36.83",
        "long": "119.6"
        },
        {
        "id": "mjdhgetr4pojfyts22fzfsh",
        "street_no": "22803",
        "locality": "Gunston Dr Lexington Park",
        "postal_code": "20688",
        "lat": "35.7788",
        "long": "119.979"
        },
        {
        "id": "urhw3837ehalod7w02b7835",
        "street_no": "225",
        "locality": "Macarthur Blvd",

        "postal_code": "20687",
        "lat": "35.77813",
        "long": "119.41791"
        }
    ];
    
    
    
    for(let i=0;i<places.length;i++)
    {
        for(let j=0;j<cafes.length;j++)
        {
            if (cafes[j].name.includes(srchTerm))
            {  
               C_id=cafes[j].place_id ;
              
               
            
        if(places[i].id==C_id)
        {
            final_arr.push({
                "name":cafes[j].name,
                "street_no":places[i].street_no,
                "locality":places[i].locality,    
                "postal_code":places[i].postal_code, 
                "lat":places[i].lat,
                "long":places[i].long

              });

           
        }
    }
        }
    }
    return final_arr;
    }


 
 const results=findCaliforniaCafes(prompt("Enter Cafe Name  Which Is Present In The Array e.g Avenue"));
 let s1 = document.getElementById("res");
 s1.innerHTML=JSON.stringify(results);//this is for printing to html doc
 console.log(results);//this is for printing to console
