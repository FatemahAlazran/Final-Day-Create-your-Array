// Create a empty array to store the names here 
let names = [];

// create a function that can add names to the array and print it in the list here 

function addName(){

    let inputval = document.getElementById('name').value;
    names.push(inputval);
    
    [inputval].forEach(e => {
    
        document.getElementById("namesList").innerHTML += "<li>" + e + "</li>"
    
    });

    console.log(names);
    }


// create a function that can remove the last name from the array and print it in the list here 

function removeName(){

    names.pop();
    let remover= document.getElementById("namesList");
    
    remover.removeChild(remover.lastChild);
    console.log(names);
    }




