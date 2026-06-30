//LocalStorage --> its stores data inside browser,and gets erased when we explicitly remove it.

//Session Storage --> It stores data temporarily inside that tab,and gets erased when tab is closed.

//Cookies --> It also stores data but the catch here is its stores data inside cookies property,usually it is store light data


//local storage
//how to store -- setItems
//how to fetch data --getItems
//how to update and save -- setItem overwrite the existing value to update
// To remove  -- removeItem


localStorage.setItem("name","Ayaz");
let val= localStorage.getItem("name");
localStorage.setItem("name","Mohammed Ayaz");
//to remove
localStorage.removeItem("feedchain_api_base");

let frnd = localStorage.setItem("friends",JSON.stringify(["ayaz","ayaz2","ayaz3"]));
let fr = JSON.parse(localStorage.getItem("friends"));

//session storage

sessionStorage.setItem("age",20);



//cookies  used to small amount of data
//~4kb
//local storage and session storage 5MB