// 1.adding up all digits
// 2.run iteration and adding up result number
// 3.repeat 2 until single digit 

function createCheckDigit(membershipId) {
  while(membershipId.length>1){
    console.log(membershipId.length)
    membershipId = addingStringNumber(membershipId)
  }
  if(membershipId.length==1){
    return membershipId;
  }
}

function addingStringNumber(stringNumber){  
  console.log("stringNumber",stringNumber)
  let arrayNumber = stringNumber.split("")
  arrayNumber=arrayNumber.reduce((currentTotal,item)=>{
    return currentTotal+Number(item)
  },0)
  console.log("arrayNumber",arrayNumber)
  return String(arrayNumber)
}
   
  console.log(createCheckDigit("3333"));
  console.log(createCheckDigit("55555"));
  console.log(createCheckDigit("999999999"));