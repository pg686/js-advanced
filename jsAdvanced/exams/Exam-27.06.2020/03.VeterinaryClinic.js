class VeterinaryClinic{
    constructor (clinicName, capacity){
        this.clinicName= clinicName;
        this.capacity = capacity;
        this.clients = {};
    }
    newCustomer(ownerName, petName, kind, procedures){
        let current = Object.entries(this.clients).find(([key,val]) => val.petName === petName)

        if(current){
            `This pet is already registered under ${current.ownerName} name! ${ petName } is on our lists, waiting for { all his procedures separated by ', ' }.`
        }else{
            let currentPet = {petName, kind, procedures}
            this.clients[ownerName] = [];
            //this.clients[ownerName].push(currentPet)
        }
    }
// to add solution
}