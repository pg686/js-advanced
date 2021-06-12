function solve(area, vol, input) {
        //ToDo....
    let objInput = JSON.parse(input);
    let result = []
    objInput.forEach(element => {
      let currentArea =      area.call(element);
       let currentVol =  vol.call(element)  
    result.push({area: currentArea, volume: currentVol})
    });
    return result;
    }
    
    

function area() {
        return Math.abs(this.x * this.y);
    };
    function vol() {
            return Math.abs(this.x * this.y * this.z);
        };
