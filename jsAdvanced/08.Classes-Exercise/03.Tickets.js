function solve(arr,criteria) {



class Ticket {
constructor(destination,price,status){
    this.destination=destination,
    this.price =price,
    this.status=status
}
}


    let tickets = [];

    for(let el of arr){
        let  [destination,price,status] = el.split('|');
        let newTicket = new Ticket(destination,Number(price),status);
        tickets.push(newTicket)
    }
    
    const sortTickets = {
        "destination": (a,b) => a.destination.localeCompare(b.destination),
        "price": (a,b) => a.price - b.price,
        "status": (a,b) => a.status.localeCompare(b.status)
    }

    return tickets.sort(sortTickets[criteria])
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))