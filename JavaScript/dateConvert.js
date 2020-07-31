function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let newDate = userDate.split("/");
    if(newDate[0].length<2) newDate[0] = 0+newDate[0];
    if(newDate[1].length<2) newDate[1] = 0+newDate[1];
    
    return newDate[2]+newDate[0]+newDate[1];

  }
  
  console.log(formatDate("12/31/2014"));
  console.log(formatDate("2/3/2014"));