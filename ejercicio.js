const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '73178550',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}];

const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
},
{
    clientId: 1,
    bankId: 3,
    balance: 18000
},
{
    clientId: 5,
    bankId: 3,
    balance: 135000
},
{
    clientId: 2,
    bankId: 2,
    balance: 5600
},
{
    clientId: 3,
    bankId: 1,
    balance: 23000
},
{
    clientId: 5,
    bankId: 2,
    balance: 15000
},
{
    clientId: 3,
    bankId: 3,
    balance: 45900
},
{
    clientId: 2,
    bankId: 3,
    balance: 19000
},
{
    clientId: 4,
    bankId: 3,
    balance: 51000
},
{
    clientId: 5,
    bankId: 1,
    balance: 89000
},
{
    clientId: 1,
    bankId: 2,
    balance: 1600
},
{
    clientId: 5,
    bankId: 3,
    balance: 37500
},
{
    clientId: 6,
    bankId: 1,
    balance: 19200
},
{
    clientId: 2,
    bankId: 3,
    balance: 10000
},
{
    clientId: 3,
    bankId: 2,
    balance: 5400
},
{
    clientId: 3,
    bankId: 1,
    balance: 9000
},
{
    clientId: 4,
    bankId: 3,
    balance: 13500
},
{
    clientId: 2,
    bankId: 1,
    balance: 38200
},
{
    clientId: 5,
    bankId: 2,
    balance: 17000
},
{
    clientId: 1,
    bankId: 3,
    balance: 1000
},
{
    clientId: 5,
    bankId: 2,
    balance: 600
},
{
    clientId: 6,
    bankId: 1,
    balance: 16200
},
{
    clientId: 2,
    bankId: 2,
    balance: 10000
}
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'NACION'
},
{
    id: 3,
    name: 'PROVINCIA'
}
];



//Ejercicio 0 

const listClientsIds = () => {

const idClient = clients.map(client=>{
        return client.id
    })
    return idClient
}

console.log(listClientsIds());

//Ejercicio 1

const listClientsIdsSortByTaxNumber = () => {

    const listClientsIdorder = clients.sort((a,b)=>a.taxNumber-b.taxNumber)
    .map((client)=>{
        return client.id
    })
    
    return listClientsIdorder;
}

console.log(listClientsIdsSortByTaxNumber());

//ejercicio 2
const sortClientsTotalBalances = () => {
 const client= clients.map(client =>{
    const re = accounts.filter(ac=>ac.clientId==client.id)
    return re
 }).map((groups,index) => {
     return groups.reduce((previous,next,index)=>{
         let id = next.clientId;
         let previs ={}
         if(previous == 0){
            previs.balance = previous+next.balance
            previs.id=id 
            return previs
         }
         previs.id=id
         previs.balance = previous.balance + next.balance
         return previs
        },0)
 }).sort((a,b)=>b.balance-a.balance).map(cli=>{
     let valor =''
   clients.forEach((clieid)=>{
       if(clieid.id == cli.id){
           valor = clieid.name
       }
   }) 
    return valor
 })
    return client

}
console.log(sortClientsTotalBalances())

//ejercicio 3
const banksClientsTaxNumbers = () => {
    let value = {}
    let value2 = {}
    banks.forEach(bank => {
        value[bank.name] =[]
        value2[bank.name] =[] 
        accounts.forEach((acount)=>{
            if(bank.id == acount.bankId){
              value[bank.name].push(acount.clientId)
            }
            value[bank.name]= [...new Set(value[bank.name])];
            
        })
        value[bank.name]=value[bank.name].map(id=>{
            clients.forEach(clientsid=>{
                if(clientsid.id==id){
                    value2[bank.name].push(clientsid.taxNumber)
                }
            })
        })
    })

    return value2
}

console.log(banksClientsTaxNumbers())


//ejercicio 4

const banksRankingByTotalBalance = () => {
    let value = []
    banks.forEach(bank => {
        accounts.forEach(account => {
            if (bank.id == 1 && account.bankId == 1 && account.balance > 25000) {
                value.push(account.balance)
            }
        })
    })
    return value.sort((a,b)=>b-a)
}

console.log(banksRankingByTotalBalance())


//ejercicio 5

const richClientsBalances = () => {
    
  const bankId = banks.map((bank, index) => {
    return   accounts.filter((acount)=>acount.bankId == bank.id)
    }).map((bank)=>{
       return bank.reduce((previous,next)=>{
            let id = next.bankId;
            let previs ={}
            if(previous == 0){
               previs.balance = previous+next.balance
               previs.id=id 
               return previs
            }
            previs.id=id
            previs.balance = previous.balance + next.balance
            return previs
        },0)
    }).sort((a,b)=>a.balance-b.balance).map(id=>id.id)

    return bankId
}

console.log(richClientsBalances());

//ejercicio 6

const banksFidelity = () => {
    
}
//ejercicio 7
const banksPoorClients = () => {
    let value={}
    banks.forEach(bank => {
        value[bank.name]= accounts.filter((account)=>bank.id==account.bankId)
        .sort((a,b)=>a.balance-b.balance)
        .find((id)=>bank.id==id.bankId).clientId
    })
    return value
}
console.log(banksPoorClients());

//ejercicio 8

const newClientRanking =()=>{
clients.push({
    id: 7,
    taxNumber: '86620822',
    name: 'RODRIGO ALEJANDRO ESPINOSA'
})

accounts.push({
    
    clientId: 7,
    bankId: 3,
    balance: 9000
})

const ranking=sortClientsTotalBalances()
return ranking.indexOf('RODRIGO ALEJANDRO ESPINOSA')
}

console.log(newClientRanking());