
var callback = function(){
  

var userinput = document.getElementById("ingredient");
if (userinput){
	userinput.addEventListener('input', searchIngredients);
}

var inp = document.getElementById("recipeurl");
if (inp){
	inp.addEventListener('input', extractRecipe);
}

var recipeSubmit = document.getElementById('recipesubmit');
if (recipeSubmit){
	recipeSubmit.addEventListener('click', getRecipeID);
	
}

var ingSubmit = document.getElementById('ingsubmit');
if (ingSubmit){
	ingSubmit.addEventListener('click', storeIng);
}

var listSubmit = document.getElementById('listsubmit');
if (listSubmit){
	listSubmit.addEventListener('click', myFunction);
}

var chosenValue = "";
var garbageArray = new Array();
var idArray = new Array();

function getRecipeID(){
	//document.getElementById("ingfromrecipe").value
	var chosenrecipe = document.getElementById('recipeurl').value;
	console.log(chosenrecipe);
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};

	fetch("https://api.spoonacular.com/recipes/complexSearch?query="+chosenrecipe+"&apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
	  .then(response => response.json())
	  .then(result => {
	  	
	      idArray.push( result["results"][0]["id"]);
	      console.log("id is org "+idArray[0])
	      

	      getRecipe();

	  })
	  .catch(error => console.log('error', error));
	  

}

function getRecipe(){
	var id = idArray[0];
	console.log("id is "+id);
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};
	fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
	        .then(response => response.json())
	        .then(result => {
	        	console.log(result)
	        	document.getElementById("recipeinfo").innerHTML += "Title: "+result["title"]
	        })
	        .catch(error => console.log('error', error));

}

function extractRecipe(event){
	event.preventDefault();
	var recipe = document.getElementById('recipeurl').value;
	if (recipe.substring(0,4)==("http")){
		console.log("yes");
		var requestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};
		
		console.log(recipe);

		fetch("https://api.spoonacular.com/recipes/extract?url="+recipe+"&apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
		  .then(response => response.json())
		  .then(result => {
		  	console.log(result);
		  	for (var i = 0; i < result["extendedIngredients"].length; i++) {
		  		
		  		console.log(result["extendedIngredients"][i]["name"]);
				 document.getElementById('ingfromrecipe').innerHTML +=  "<br/>"+result["extendedIngredients"][i]["name"]
				//myArr.push(result[i]["name"]);
				}
		  })
		  .catch(error => console.log('error', error));
	}
	else{
		//autocomplete recipe search
		var recipeJSON = new Array();

		var requestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};

		fetch("https://api.spoonacular.com/recipes/autocomplete?number=10&query="+recipe+"&apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
		  .then(response => response.json())
		  .then(result => {
		      //console.log(result)
        	for (var i = 0; i < result["length"]; i++) {
      		 //document.getElementById('text').innerHTML +=  "<br/>"+result[i]["name"]
      		 recipeJSON.push(result[i]["title"]);
      		}
		   

		  function autocomplete(inp, arr) {
		    /*the autocomplete function takes two arguments,
		    the text field element and an array of possible autocompleted values:*/
		    var currentFocus;
		    /*execute a function when someone writes in the text field:*/
		   // inp.addEventListener("input", function(e) {
		        var a, b, i, val = recipe;
		        /*close any already open lists of autocompleted values*/
		        closeAllLists();
		        if (!val) { return false;}
		        currentFocus = -1;
		        /*create a DIV element that will contain the items (values):*/
		        a = document.createElement("DIV");
		        a.setAttribute("id", inp.id + "autocomplete-list");
		        a.setAttribute("class", "autocomplete-items");
		        /*append the DIV element as a child of the autocomplete container:*/
		        inp.parentNode.appendChild(a);
		        
		        /*for each item in the array...*/
		        for (i = 0; i < arr.length; i++) {
		          /*check if the item starts with the same letters as the text field value:*/
		          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
		            /*create a DIV element for each matching element:*/
		            b = document.createElement("DIV");
		            /*make the matching letters bold:*/
		            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		            b.innerHTML += arr[i].substr(val.length);
		            /*insert a input field that will hold the current array item's value:*/
		            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		            /*execute a function when someone clicks on the item value (DIV element):*/
		            b.addEventListener("click", function(e) {
		                /*insert the value for the autocomplete text field:*/


		                inp.value = this.getElementsByTagName("input")[0].value;
		                document.getElementById('recipeurl').value = this.getElementsByTagName("input")[0].value;


		                /*close the list of autocompleted values,
		                (or any other open lists of autocompleted values:*/
		                closeAllLists();		                
		            });

		            a.appendChild(b);
		          }
		        }
		      

		    //});
		    /*execute a function presses a key on the keyboard:*/
		    inp.addEventListener("keydown", function(e) {
		        var x = document.getElementById(this.id + "autocomplete-list");
		        if (x) x = x.getElementsByTagName("div");
		        if (e.keyCode == 40) {
		          /*If the arrow DOWN key is pressed,
		          increase the currentFocus variable:*/
		          currentFocus++;
		          /*and and make the current item more visible:*/
		          addActive(x);
		        } else if (e.keyCode == 38) { //up
		          /*If the arrow UP key is pressed,
		          decrease the currentFocus variable:*/
		          currentFocus--;
		          /*and and make the current item more visible:*/
		          addActive(x);
		        } else if (e.keyCode == 13) {
		          /*If the ENTER key is pressed, prevent the form from being submitted,*/
		          e.preventDefault();
		          if (currentFocus > -1) {
		            /*and simulate a click on the "active" item:*/
		            if (x) x[currentFocus].click();
		          }
		        }
		    });
		    function addActive(x) {
		      /*a function to classify an item as "active":*/
		      if (!x) return false;
		      /*start by removing the "active" class on all items:*/
		      removeActive(x);
		      if (currentFocus >= x.length) currentFocus = 0;
		      if (currentFocus < 0) currentFocus = (x.length - 1);
		      /*add class "autocomplete-active":*/
		      x[currentFocus].classList.add("autocomplete-active");
		    }
		    function removeActive(x) {
		      /*a function to remove the "active" class from all autocomplete items:*/
		      for (var i = 0; i < x.length; i++) {
		        x[i].classList.remove("autocomplete-active");
		      }
		    }
		    function closeAllLists(elmnt) {
		      /*close all autocomplete lists in the document,
		      except the one passed as an argument:*/
		      var x = document.getElementsByClassName("autocomplete-items");
		      for (var i = 0; i < x.length; i++) {
		        if (elmnt != x[i] && elmnt != inp) {
		          x[i].parentNode.removeChild(x[i]);
		        }
		      }
		    }
		    /*execute a function when someone clicks in the document:*/
		    document.addEventListener("click", function (e) {
		        closeAllLists(e.target);
		    });
		  }

		  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
		  autocomplete(document.getElementById("recipeurl"), recipeJSON);

		   })
		  
		
	.catch(error => console.log('error', error));
}
}

//stores a list of inputted events in garbagearray
function storeIng(event){
	
	var ingInput = document.getElementById('ingredient').value;
	
	if (ingInput==""){
			alert("Please enter a value");
	}
	else{
		garbageArray.push(ingInput);
		//document.getElementById('list').innerHTML +=  "<br/>"+ingInput;
		document.getElementById('chosenIngredients').innerHTML +=  "<br/>"+ingInput;
	}
	event.preventDefault();
	testing();
}

function testing(){
for (var i = 0; i < garbageArray.length; i++) {
  console.log("um "+garbageArray[i]);
}
}

//user inputs ingredients and autofill helps
function searchIngredients(){
	var ingInput = document.getElementById('ingredient').value;
	//document.getElementById('text').innerHTML = "";
	//const autoCompleteJS = new autoComplete({ config });
	var myArr = new Array();
	

console.log("passed searchingredients");


	//var myHeaders = new Headers();
	//myHeaders.append("", "");

	var requestOptions = {
	  method: 'GET',
	  //headers: myHeaders,
	  redirect: 'follow',
	 
   	 // mode: 'no-cors'

	};

	fetch("https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=43a4e9d10c734a80b463bce2e9f79b72&query="+ingInput, requestOptions)
	  .then(response => response.json())
	  .then(result => {
	  	for (var i = 0; i < result["length"]; i++) {
			 //document.getElementById('text').innerHTML +=  "<br/>"+result[i]["name"]
			 myArr.push(result[i]["name"]);
			}
		console.log("inside loop "+myArr.length);
	  
	  
		
	 //autocomplete code


	 function autocomplete(inp, arr) {
	   /*the autocomplete function takes two arguments,
	   the text field element and an array of possible autocompleted values:*/
	   var currentFocus;
	   /*execute a function when someone writes in the text field:*/
	  // inp.addEventListener("input", function(e) {
	       var a, b, i, val = ingInput;
	       /*close any already open lists of autocompleted values*/
	       closeAllLists();
	       if (!val) { return false;}
	       currentFocus = -1;
	       /*create a DIV element that will contain the items (values):*/
	       a = document.createElement("DIV");
	       a.setAttribute("id", inp.id + "autocomplete-list");
	       a.setAttribute("class", "autocomplete-items");
	       /*append the DIV element as a child of the autocomplete container:*/
	       inp.parentNode.appendChild(a);
	       
	       /*for each item in the array...*/
	       for (i = 0; i < arr.length; i++) {
	         /*check if the item starts with the same letters as the text field value:*/
	         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
	           /*create a DIV element for each matching element:*/
	           b = document.createElement("DIV");
	           /*make the matching letters bold:*/
	           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
	           b.innerHTML += arr[i].substr(val.length);
	           /*insert a input field that will hold the current array item's value:*/
	           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
	           /*execute a function when someone clicks on the item value (DIV element):*/
	           b.addEventListener("click", function(e) {
	               /*insert the value for the autocomplete text field:*/


	               inp.value = this.getElementsByTagName("input")[0].value;
	               document.getElementById('ingredient').value = this.getElementsByTagName("input")[0].value;


	               /*close the list of autocompleted values,
	               (or any other open lists of autocompleted values:*/
	               closeAllLists();

	               


	               
	           });

	           a.appendChild(b);
	         }
	       }
	     

	   //});
	   /*execute a function presses a key on the keyboard:*/
	   inp.addEventListener("keydown", function(e) {
	       var x = document.getElementById(this.id + "autocomplete-list");
	       if (x) x = x.getElementsByTagName("div");
	       if (e.keyCode == 40) {
	         /*If the arrow DOWN key is pressed,
	         increase the currentFocus variable:*/
	         currentFocus++;
	         /*and and make the current item more visible:*/
	         addActive(x);
	       } else if (e.keyCode == 38) { //up
	         /*If the arrow UP key is pressed,
	         decrease the currentFocus variable:*/
	         currentFocus--;
	         /*and and make the current item more visible:*/
	         addActive(x);
	       } else if (e.keyCode == 13) {
	         /*If the ENTER key is pressed, prevent the form from being submitted,*/
	         e.preventDefault();
	         if (currentFocus > -1) {
	           /*and simulate a click on the "active" item:*/
	           if (x) x[currentFocus].click();
	         }
	       }
	   });
	   function addActive(x) {
	     /*a function to classify an item as "active":*/
	     if (!x) return false;
	     /*start by removing the "active" class on all items:*/
	     removeActive(x);
	     if (currentFocus >= x.length) currentFocus = 0;
	     if (currentFocus < 0) currentFocus = (x.length - 1);
	     /*add class "autocomplete-active":*/
	     x[currentFocus].classList.add("autocomplete-active");
	   }
	   function removeActive(x) {
	     /*a function to remove the "active" class from all autocomplete items:*/
	     for (var i = 0; i < x.length; i++) {
	       x[i].classList.remove("autocomplete-active");
	     }
	   }
	   function closeAllLists(elmnt) {
	     /*close all autocomplete lists in the document,
	     except the one passed as an argument:*/
	     var x = document.getElementsByClassName("autocomplete-items");
	     for (var i = 0; i < x.length; i++) {
	       if (elmnt != x[i] && elmnt != inp) {
	         x[i].parentNode.removeChild(x[i]);
	       }
	     }
	   }
	   /*execute a function when someone clicks in the document:*/
	   document.addEventListener("click", function (e) {
	       closeAllLists(e.target);
	   });
	 }

	 /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
	 autocomplete(document.getElementById("ingredient"), myArr);

	 })


	.catch(error => console.log('error', error));
	
	}

	//gives random recipes
function myFunction(){
	document.getElementById('log').innerHTML = "";
	console.log("passed myfunction");
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};
	//var ing = document.getElementById("ingredient").value;
	// fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=43a4e9d10c734a80b463bce2e9f79b72&ingredients="+garbageArray, requestOptions)
	//   .then(response => response.json())
	  
	// .then(result => {
		
		
	// 	for (var i = 0; i < result["length"]; i++) {
	// 		 document.getElementById('log').innerHTML +=  "<br/>"+result[i]["title"]
			
	// 	}
		 
		
	// })
	
	//  .catch(error => console.log('error', error));
	fetch("https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert"+"&apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
	  .then(response => response.json())
	  .then(result => {
	  	
	      //idArray.push( result["results"][0]["id"]);
	      console.log("title "+result["recipes"][0]["title"])
	      

	      //getRecipe();

	  })
	  .catch(error => console.log('error', error));
	  


  
}


};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}


