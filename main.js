$(document).ready(function(){

    $('.loop').owlCarousel({
        center: false,
        rtl:true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
                    0:{
                        items:4
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:8.5
                    } 
                 }
    });





    $('.vitreen').owlCarousel({
        loop:true,
        rtl:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    });


    var coll = document.getElementsByClassName("collapsible__expand");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var content = document.getElementsByClassName('collapsible__container')[0];
        var icon = document.getElementsByClassName('collapsible__expand-btn')[0];
        console.log(icon);
        if (content.style.overflow === "visible") {
          content.style.overflow = "hidden";
          content.style.maxHeight = '300px';
          this.style.background = 'linear-gradient(180deg,rgba(249, 250, 253, 0) 70%,hsla(0, 0%, 100%, 0.7) 90%,#fff 99%)';
          icon.style.transform= 'unset';
        } else {
          content.style.overflow = "visible";
          content.style.maxHeight = '100%';
          this.style.background = 'none';
          icon.style.transform= 'rotate(180deg)';
        }
      });
    }


document.getElementsByClassName('toggler')[0].addEventListener('click', ()=>{
    document.getElementsByClassName('toggler')[0].classList.toggle("change")
})











