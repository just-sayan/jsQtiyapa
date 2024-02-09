document.getElementById("demo").innerHTML ="Itna dhyaan se kya padh raha hai bsdk.. jaa naa maa chuda";
      alert("Jaisa bola jaiga.. waisa hi krna");
      let name = prompt("Naam likh madarchod");
      let lst = name.split();
      if (name.toLowerCase().trim() != "sayan") {
        alert(name + " ab maa chudale");
      } 
      else {
        alert("Apna naam likh madarchod");
        alert("chal ab reload kar jaldi");
        document.getElementById("demo").innerHTML="Chal reload kar bkl";
      }