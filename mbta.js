// MBTA homewrok 

redLineStops=['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'];
greenLineStops=['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'];
orangeLineStops=['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

function stopsBetweenStations(startline , startStation , endLine ,endStation){
    
    if(startline === 'Red' && endLine==='Red'){                      
        
        let stops=0;
        let count=0;
        for (let i = redLineStops.indexOf(startStation); i >= 0; i--) {            
            stops = count++;      
            if (redLineStops[i] === endStation) {
                          
                console.log('stops ' + stops + ' from ' + startStation + ' to ' + endStation);
            }
        }        
    }

    if(startline === 'Red' && endLine==='Green'){
        let stops=0;
        let count=0;
        for(let i=greenLineStops.indexOf(endStation); i>=0; i--){
            if(greenLineStops[i]!=='Park Street'){
                stops=count++;                
            }
        }        
        for(let i=redLineStops.indexOf('Park Street'); i>=0; i--){
            if(redLineStops[i]!==startStation){
                stops=count++;                
            }
        }
        console.log('stops ' + stops + ' from ' + startStation + ' to ' + endStation);
    }
        
}
/*Start Line, Start Station, End Line, End Station*/

//Call functions
//stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // >> 0 stops
//stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // >> 7 stops
//stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // >> 6 stops

