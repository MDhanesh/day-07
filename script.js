var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    
    var result=JSON.parse(request.response);
    //console.log(result);

    /*----------Get all the countries from the Asia continent /region using the Filter function------------*/

    
    var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);

    console.log(res);

    /*-------------Get all the countries with a population of less than 2 lakhs using Filter function---------*/

    var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);

    console.log(res);

/*------------------Print the following details name, capital, flag using forEach function--------------*/
  
    var res=result.forEach((ele)=>{
        console.log(ele.name)
        console.log(ele.capital)
        console.log(ele.flag)
    })

/*----------------Print the total population of countries using reduce function----------------------*/

    var res=result.reduce((x,ele)=>x+ele.population,0)
    console.log(res)


/*----------------------Print the country which uses US Dollars as currency.----------------*/


    var res=result.filter((ele)=>{for (var i=0;i<(ele.currencies).length;i++){
    if(ele.currencies[i].code==="USD"){
        return true
    }

 } })
console.log(res)
}