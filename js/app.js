jQuery(document).ready(function(){
    
//Events for section 1
    
    var cupcakeCheck = jQuery('.cupcakeCheck');
    
    cupcakeCheck.hide();
    
    var cupcakeSec1 = jQuery('.section1').find('.cupcake');
    
    cupcakeSec1.on('mouseover', function(){
        jQuery(this).children().show();
    })
    
     cupcakeSec1.on('mouseleave', function(){
        jQuery(this).children().hide();
    })
     
    
//Przypisanie tła cupcake z section 1 do section 2
     
    var cupcakeSec2 = jQuery('.section2').find('.cupcake');
    
    var cupcakeSec3 = jQuery('.section3').find('.cupcake');
    
    
//wybranie smaku ciasta
    cupcakeCheck.on('click', function(){
        
        var flavour = jQuery(this).parent().data('flavour');
        
       //przed dodaniem klasy z nowym tłem usuwam wszystkie        poprzednie. Można poprawci, zeby nie bazowac na sztywnych danych
     
        cupcakeSec2.removeClass('lemon');
        cupcakeSec2.removeClass('hazelnut');
        cupcakeSec2.removeClass('chocolate');
        
        cupcakeSec2.addClass(flavour);
        
        //to samo robię już z cupcake w section3
        cupcakeSec3.removeClass('lemon');
        cupcakeSec3.removeClass('hazelnut');
        cupcakeSec3.removeClass('chocolate');
        
        cupcakeSec3.addClass(flavour);
        
//dodanie składników na ciasto do ostatniej sekcji
        
        var cakeIngList = jQuery('.cakeIngList');
        var recipe = jQuery(this).parent().data('recipe');
        
        cakeIngList.find('li').remove();
            
        cakeIngrid[recipe].forEach(function(element, index, array){

            var newLi = jQuery('<li></li>');
            newLi.html(element).css('line-height', '25px');
            
            cakeIngList.append(newLi).css('list-style-type', 'circle').css('margin','5% 0 5% 5%');
            
        });
        
//dodanie instrukcji cupcakes do ostatniej sekcji
        
        var cakeInst = jQuery('.cakeInst');
        
        cakeInst.find('div').remove();
        
        cakeRecipe[recipe].forEach(function(element, index, array){
            
            var newDiv = jQuery('<div></div>');
            newDiv.html(element).css('margin','20px');
            
            cakeInst.append(newDiv);
        });

    })
    
//events for section 2
    
    var spoonInfo = jQuery('.spoonInfo').hide();
    var spoonSelect = jQuery('.spoonSelect');
    var cupcakeFilling = jQuery('.cupcakeFilling');
    
    spoonSelect.on('mouseover', function(){
        
        
        if (window.matchMedia("(max-width: 725px)").matches) {
          jQuery(this).prev('.spoonInfo').hide();
        } else {
          jQuery(this).prev('.spoonInfo').show();
        }  
        
    })
    
    spoonSelect.on('mouseleave', function(){
        
        if (window.matchMedia("(max-width: 725px)").matches) {
          jQuery(this).prev('.spoonInfo').hide();
        } else {
          jQuery(this).prev('.spoonInfo').hide();
        }
        
    })
    
    spoonSelect.on('click', function(){
        
        var flav = jQuery(this).next('.spoonTop').data('flavour');
        
        cupcakeFilling.removeClass('cherry');
        cupcakeFilling.removeClass('peanut');
        cupcakeFilling.removeClass('whitechoc');
        
        cupcakeFilling.addClass(flav);
        
//dodanie składników na filling do ostatniej sekcji
        
        var fillingIngList = jQuery('.fillingIngList');
        
        var getFilData = jQuery(this).next().data('recipe');
        
        fillingIngList.find('li').remove();
            
        fillingIngrid[getFilData].forEach(function(element, index, array){

            var newLi = jQuery('<li></li>');
            newLi.html(element).css('line-height', '25px');
      
            fillingIngList.append(newLi).css('list-style-type', 'circle').css('margin','5% 0 5% 5%');        
        });
        
//dodanie instrukcji fillingu do ostatniej sekcji
        
        var fillingInst = jQuery('.fillingInst');
        fillingInst.find('div').remove();
        
        fillingRecipe[getFilData].forEach(function(element, index, array){
            
            var newDiv = jQuery('<div></div>');
            newDiv.html(element).css('margin','20px');
            
            fillingInst.append(newDiv);
        });
        
    })
    
    //events for section 3
    
    var frostingCheck = jQuery('.frostingCheck');
    frostingCheck.hide();
    
    var descBar = jQuery('.descBar');
    descBar.hide();
    
    var frostingCircle = jQuery('.frostingCircle');
    
    frostingCircle.on('mouseover', function(){
        jQuery(this).find('.frostingCheck').show();
        jQuery(this).find('.descBar').show();
    })
    
     frostingCircle.on('mouseleave', function(){
        jQuery(this).find('.frostingCheck').hide();
        jQuery(this).find('.descBar').hide();
    })
     
     
    frostingCheck.on('click', function(){
        
        var frostFlav = jQuery(this).parent().data('flavour');
        
        var frostingA = jQuery('.frosting').find('.frostingA');
        var frostingM = jQuery('.frosting').find('.frostingM');
        var frostingL = jQuery('.frosting').find('.frostingL');
        
        
        frostingA.removeClass('choco meringue raspberry');
        frostingM.removeClass('choco meringue raspberry');
        frostingL.removeClass('choco meringue raspberry');
        
        frostingA.addClass(frostFlav);
        frostingM.addClass(frostFlav);
        frostingL.addClass(frostFlav);
        
        
//dodanie składników na frosting do ostatniej sekcji
        
        var frostIngList = jQuery('.frostIngList');
        var getFroData = jQuery(this).parent().data('recipe');
        
        frostIngList.find('li').remove();
            
        frostingIngrid[getFroData].forEach(function(element, index, array){

            var newLi = jQuery('<li></li>');
            newLi.html(element).css('line-height', '25px');
            
            frostIngList.append(newLi).css('list-style-type', 'circle').css('margin','5% 0 5% 5%'); 
            
        });
        
        
//dodanie instrukcji frostingu do ostatniej sekcji
        
        var frostingInst = jQuery('.frostingInst');
        frostingInst.find('div').remove();
        
        frostingRecipe[getFroData].forEach(function(element, index, array){
              
            var newDiv = jQuery('<div></div>');
            newDiv.html(element).css('margin','20px');
            
            frostingInst.append(newDiv); 
        });
        
    })
    
    
    //events for section 4 and 5
    
    var section5 = jQuery('.section5').hide();
    
    var recBtn = jQuery('.recBtn');
    
    recBtn.on('click', function(){
        
        //pokazanie i przeskoczenie do sekcji 5 po kliknięciu
        
        section5.show();
        
        var recBoxOffset = jQuery('.RecBox').offset();
        
        jQuery('html, body').animate({scrollTop: recBoxOffset.top}, 1000);
        
        //copy the created cupcake from prev section
        var cupcakeToClone = jQuery('.section3').find('.frostingCupcake');

        var RecImg = jQuery('.RecImg');

        var clonedCupcake= cupcakeToClone.clone();
        clonedCupcake.appendTo(RecImg).css('width', '100%');
        
        //change the color of frosting element
        var frostingS = clonedCupcake.find('.frostingS').addClass('newBckg');
        
        //change the position of frosting element
        var frostingM = jQuery('.frostingM').css('z-index', '0');
        
    })

// Dodanie animacji
    
var sec1tit = jQuery('.section1-title').hide();

var waypoint = new Waypoint({
    element: jQuery('.section1'),
    offset:'50%',
    handler: function(direction) {
        sec1tit.show().addClass('bounceInRight');
    }
})

var sec2tit = jQuery('.section2-title').hide();
    
var waypoint1 = new Waypoint({
    element: jQuery('.section2'), 
    offset:'50%',
    handler: function(direction) {
        sec2tit.show().addClass('bounceInLeft');
    }
})

var spoonBox = jQuery('.spoonBox').hide();

var waypoint2 = new Waypoint({
    element: jQuery('.section2'), 
    offset:'70%',
    handler: function(direction) {
        spoonBox.show().addClass('fadeInUp');
    }
})

var sec3tit = jQuery('.section3-title').hide();
var circBox = jQuery('.circleBox').hide();

var waypoint3 = new Waypoint({
    element: jQuery('.section3'), 
    offset:'50%',
    handler: function(direction) {

        sec3tit.show().addClass('bounceInRight');
        circBox.show().addClass('bounceInLeft');
    }
})

var scrolltop = window.pageYOffset;
    
    console.log(scrolltop);

// tło w kropki z parallax
    
function parallax(){
    var scrolled = $(window).scrollTop();
    
    $('.paralex').css('top', +(scrolled * 0.4) + 'px');
}
    
$(window).scroll(function(e){
    parallax();
});
    
function parallax1(){
    var scrolled = $(window).scrollTop();
    
    $('.paralex1').css('top', +(scrolled * 0.3) + 'px');
}
    
$(window).scroll(function(e){
    parallax1();
});
    
function parallax2(){
    var scrolled = $(window).scrollTop();
    
    $('.paralex2').css('top', +(scrolled * 0.2) + 'px');
}
    
$(window).scroll(function(e){
    parallax2();
});

    
    
    
    
});