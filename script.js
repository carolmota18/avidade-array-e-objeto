let grupo=["item1","item2","item3","intem4","item5"]
console.log(grupo)

grupo.unshift("item0")
grupo.pop()
grupo.push("item6","item7")
grupo.shift()

console.log(grupo)


 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort()
 console.log(numbers)

 let sobreMim = {
    nome:"caroline",
    idade:22,
    cidade:"rio de janeiro"

}

sobreMim.hobbie="ler"
delete sobreMim.cidade

console.log(sobreMim)

let cadastro=[{
    nome:"monica",
    idade:18,
    telefone: 98562-6788,
    amigos:["cebola","magali","cascao","milena"]
},{
    nome:"cebola",
    idade:18,
    telefone: 95667-1122,
    amigos:["monica","magali","milena","cascao"]
},{
    nome:"cascao",
    idade:18,
    telefone: 92334-0022,
    amigos:["monica","magali","cebola","milena"]
},{
    nome:"magali",
    idade:18,
    telefone: 91226-8745,
    amigos:["monica","cascao","cebola","milena"]
},{
    nome:"milena",
    idade:18,
    telefone: 95332-8854,
    amigos:["monica","cebola","cascao","magali"]
}]

cadastro.map((item) =>(console.log(item.amigos[0])))


