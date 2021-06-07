// var () = document.getElementsByClassName(name),
//     (container) = document.querySelector('.container');
// //할일은 무조건함수 function(){}
// ().addEventListener('click', function(){
//   //클릭하면 실제로 할일
//   gg.style.color = 'red';
// }); 

// $(window).on('mousewheel', function(e){
//   if(e.originalEvent.wheelDelta < 0) { 
//     $('html, body').stop().animate({ 
//       scrollTop : '+=250px' },500); 
//   } else { 
//     $('html, body').stop().animate({ 
//       scrollTop : '-=250px' 
//     },500); 
//   } 
//     return false; 
// });




AOS.init();
var navbar = document.querySelector(".nav-bar");
var scrDown = 0;
var navbar = $(".nav-bar");


$(function(){
  var $title1 = $('.title1');
  var $title2 = $('.title2');
  var $offset = 750;
  var $title1OST = $title1.offset().top - $offset;
  var $title2OST = $title2.offset().top - $offset;
  var wind = $(window);



  
    wind.scroll(function(){
      if($(this).scrollTop() > $title1OST) {
        $title1.find('.one-title').addClass('word-active');
      }else {
        $title1.find('.one-title').removeClass('word-active');
      };
      if($(this).scrollTop() > $title2OST) {
        $title2.find('.one-title').addClass('word-active');
      }else {
        $title2.find('.one-title').removeClass('word-active');
      };
    });  




  
    $('.menu-icon').click(function(){
      $('body').toggleClass('nav-active'); 
    });
    $('.nav_list-item').click(function(){
      $('body').removeClass('nav-active');
    });

    wind.scroll(function(){
      if($(this).scrollTop() > 500) {
        $('[data-animate="animate"]').addClass('word-active');
      }else{
        $('[data-animate="animate"]').removeClass('word-active');
      }
    });
});



var $section = $('[id="parallax-img"]') ;
var $sectionInfo = [];
var $moveup = $('[id="move-up"]');

    $section.each(function(){
      var $this = $(this); 
      $sectionInfo.push($this.offset().top);
    });

    console.log($sectionInfo);

    // $section.css({position:'fixed'});

    $(window).scroll(function(){
      var sct = $(this).scrollTop();
      
      $section.each(function(idx){
        var $this = $(this);
        var $newtop = $sectionInfo[idx] + sct;
        
        if(sct > $sectionInfo[idx]) { $newtop *= 0.5; }

        $this.css({top:$newtop});
        


      
      });
      
    //   var parallax = new TimelineMax();
    //   var controller = new ScrollMagic.Controller();
    //   var casemove1 = parallax.to('.root-showcase', 1,
    //     {
    //       scale: 1 
    //     },
    //     {
      
    //       y: 0,
    //       scale: 1.08,
    //     },
    //     0.2   
    //   );



      var rotatemove = new TimelineMax();
      var controller = new ScrollMagic.Controller();
      var casemove2 = TweenMax.staggerFromTo('.imgwrapper', 0.3,
        {
          rotation: -30,
          y: 0
        },
        {
          rotation: -20,
          y: 200
        },
        0.2
      );




      var scene2 = new ScrollMagic.Scene({
        triggerElement: ".second-showcase" ,
        offset : -60,
        duration: 3000
      })
      .setTween( casemove2 )
      .addTo(controller)

      // .addIndicators({
      //   name: "1"
      // });

      

    });



    
  

    
    $('.second-showcase').parallax({
      imageSrc: 'img/secondshowcase.jpeg',
      speed: 0.2,
      bleed: 100
      }      
    );





  // function effectScroller() {
  //   const Scrollbar = window.Scrollbar;
  //   var myScrollbar = document.querySelector("#scrollbar");

  //   return {
    

  //     isScroller : function ( $print ) {
  //       if ( $print )
  //         myScrollbar = document.querySelector( "#scrollbar" );

  //     },

  //     getScrollbar : function ( $id ) {
  //       if ( $id === undefined ) {
  //           return Scrollbar.get( myScrollbar );
  //       }
  //       return Scrollbar.get( document.querySelector( $id ) );
  //     },

  //     getListener : function ( $obj ) {
  //       if ( $obj === undefined ) return;
  //       var $this = this;
  //       if ( $this.isScroller( true ) ) {
  //           $this.getScrollbar().addListener( $obj );
  //       } else {
  //           $(window).on( "scroll", $obj );
  //       }

  //     },
  //     showcaseScroll : function () {
  //       Scrollbar.init( document.querySelector(".root-showcase .slider-nav-list"), {
  //           damping : 0.05,
  //       } );
  //     }
      
  //   }
  
  // };


    





  /*-----------------*/
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 45,
    speed: 300
  });