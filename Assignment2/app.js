function myFunction() {
  // Declare variables
  var input, filter, card, card1,li, a, i, txtValue,card_comp;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  console.log(filter);
  card = document.getElementsByClassName("card");
  console.log(card);
 

  // Loop through all list items, and hide those who don't match the search query
//   console.log(card);

  for (i = 0; i < card.length; i++) {
      
    a = card[i].getElementsByTagName("h4")[0];
    txtValue = a.textContent || a.innerText;
    console.log(txtValue);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
    } else {
        card[i].style.display = "none";
    }
  }
}
document.getElementById("bt1");
document.getElementById("bt2");
document.getElementById("bt3");
document.getElementById("bt4");

function myFunction1() {
    // Declare variables
    var input, filter, card, card1,li, a, i, txtValue,card_comp;
    // input = document.getElementById('myInput');
    // filter = input.value.toUpperCase();
    // console.log(filter);
    card = document.getElementsByClassName("card");
    console.log(card);
   
  
    // Loop through all list items, and hide those who don't match the search query
  //   console.log(card);
    for (i = 0; i < card.length; i++) {
        
          card[i].style.display = "";
    }
 
}
  function myFunction2() {
    // Declare variables
    var  filter, card, a, i, txtValue;
    // input = document.getElementById('myInput');
    var txt="Cake";
    filter = txt.toUpperCase();
    console.log(filter);
    card = document.getElementsByClassName("card");
    console.log(card);
   
  
    // Loop through all list items, and hide those who don't match the search query
  //   console.log(card);
    for (i = 0; i < card.length; i++) {
        
      a = card[i].getElementsByTagName("h4")[0];
      txtValue = a.textContent || a.innerText;
      console.log(txtValue);
      if (txtValue.toUpperCase()===filter) {
          card[i].style.display = "";
      } else {
          card[i].style.display = "none";
      }
    }
  }
  function myFunction3() {
    // Declare variables
    var  filter, card, a, i, txtValue;
    // input = document.getElementById('myInput');
    var txt="cupcake";
    filter = txt.toUpperCase();
   // console.log(filter);
    card = document.getElementsByClassName("card");
    console.log(card);
   
  
    // Loop through all list items, and hide those who don't match the search query
  //   console.log(card);
    for (i = 0; i < card.length; i++) {
        
      a = card[i].getElementsByTagName("h4")[0];
      txtValue = a.textContent || a.innerText;
      //console.log(txtValue);
      if (txtValue.toUpperCase()===filter) {
          card[i].style.display = "";
      } else {
          card[i].style.display = "none";
      }
    }
  }
  function myFunction4() {
    // Declare variables
    var  filter, card, a, i, txtValue;
    // input = document.getElementById('myInput');
    var txt="Sweet";
    filter = txt.toUpperCase();
  //  console.log(filter);
    card = document.getElementsByClassName("card");
    console.log(card);
   
  
    // Loop through all list items, and hide those who don't match the search query
  //   console.log(card);
    for (i = 0; i < card.length; i++) {
        
      a = card[i].getElementsByTagName("h4")[0];
      txtValue = a.textContent || a.innerText;
    //  console.log(txtValue);
      if (txtValue.toUpperCase()===filter) {
          card[i].style.display = "";
      } else {
          card[i].style.display = "none";
      }
    }
  }
  function myFunction5() {
    // Declare variables
    var  filter, card, a, i, txtValue;
    // input = document.getElementById('myInput');
    var txt="Donought";
    filter = txt.toUpperCase();
   // console.log(filter);
    card = document.getElementsByClassName("card");
    console.log(card);
   
  
    // Loop through all list items, and hide those who don't match the search query
  //   console.log(card);
    for (i = 0; i < card.length; i++) {
        
      a = card[i].getElementsByTagName("h4")[0];
      txtValue = a.textContent || a.innerText;
    //  console.log(txtValue);
      if (txtValue.toUpperCase()===filter) {
          card[i].style.display = "";
      } else {
          card[i].style.display = "none";
      }
    }
  }
          
