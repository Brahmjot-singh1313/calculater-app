// quiz app
let count = 0;
let h1 = document.querySelector("#h");
let inputt = document.querySelectorAll("#i-1");
let a = document.querySelectorAll("a");
let hi = document.querySelectorAll("#hide");

inputt.forEach(function(e){
    e.addEventListener("click", function(dets){
        let valuee = e.value;

        if (valuee === "Whail") {
            e.classList.add("g");
            count ++;
        } else {
            e.classList.add("r");
        }

        hi.forEach(function(h){
            h.style.display = "block";
        });

        a.forEach(function(z){
            z.setAttribute("href","index2.html");
        });
    });
});

let inputt_2 = document.querySelectorAll("#i-2");
let a_2 = document.querySelectorAll("#a-2");
let hi_2 = document.querySelectorAll("#hide-2");

inputt_2.forEach(function(e){
    e.addEventListener("click", function(dets){
        let valuee = e.value;

        if (valuee === "Delhi") {
            e.classList.add("g");
            count ++;
        } else {
            e.classList.add("r");
        }

        hi_2.forEach(function(h){
            h.style.display = "block";
        });

        a_2.forEach(function(z){
            z.setAttribute("href","index3.html");
        });
    });
});

let inputt_3 = document.querySelectorAll("#i-3");
let a_3 = document.querySelectorAll("#a-3");
let hi_3 = document.querySelectorAll("#hide-3");

inputt_3.forEach(function(e){
    e.addEventListener("click", function(dets){
        let valuee = e.value;

        if (valuee === "Nealarmstron") {
            e.classList.add("g");
            count ++;
        } else {
            e.classList.add("r");
        }

        hi_3.forEach(function(h){
            h.style.display = "block";
        });

        a_3.forEach(function(z){
            z.setAttribute("href","submit.html");
        });
    });
}); 

h1.innerHTML = `Your Score is ${count} out of 3`;