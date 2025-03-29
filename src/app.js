let pronoun = ['the', 'our'];
let adjetive = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domains = ["com", "com.ve", "net"]


for ( let pro of pronoun){
  for(let adj of adjetive){
    for(let no of noun){
      for(let doma of domains){
        console.log(`${pro}${adj}${no}.${doma}`)
      }
    }
  }
}