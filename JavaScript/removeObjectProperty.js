function removeProperty(obj, prop) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const entries = Object.entries(obj)
    console.log(keys,values,entries)
    for (const key of keys) {
      if(key == prop){
        delete obj[key]
        // return true
      }
    }
    // return false;
    return obj
  }

  const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }

  const newObj=removeProperty(fruits,"apple")
  console.log(newObj)