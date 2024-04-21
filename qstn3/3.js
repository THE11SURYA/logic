async function findCaliforniaCafes(srchTerm) {
    let final_arr = [];
    
    // Fetch cafes data from API
    const cafe_list = await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json');
    const cafes = await cafe_list.json();

    // Fetch places data from API
    const place_list = await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json');
    const places = await place_list.json();

    // Perform the search and matching logic
    for(let i=0; i<places.length; i++) {
        for(let j=0; j<cafes.length; j++) {
            if (cafes[j].name.toLowerCase().includes(srchTerm.toLowerCase())) {
                if (places[i].id == cafes[j].place_id) {
                    final_arr.push({
                        "name": cafes[j].name,
                        "street_no": places[i].street_no,
                        "locality": places[i].locality,
                        "postal_code": places[i].postal_code,
                        "lat": places[i].lat,
                        "long": places[i].long
                    });
                }
            }
        }
    }
    return final_arr;
}
