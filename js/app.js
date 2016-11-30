jQuery(document).ready(function(){
    
    //Events for section 1
    
    var cupcakeCheck = jQuery('.cupcakeCheck');
    console.log(cupcakeCheck);
    
    cupcakeCheck.hide();
    
    var cupcakeSec1 = jQuery('.section1').find('.cupcake');
    console.log(cupcakeSec1);
    
    cupcakeSec1.on('mouseover', function(){
        
        jQuery(this).children().show();
    })
    
     cupcakeSec1.on('mouseleave', function(){
      
        jQuery(this).children().hide();
    })
     
    
    //Przypisanie tła cupcake z section 1 do section 2
     
    var cupcakeSec2 = jQuery('.section2').find('.cupcake');
    console.log(cupcakeSec2);
    
    var cupcakeSec3 = jQuery('.section3').find('.cupcake');
    console.log(cupcakeSec3);
    
    
    cupcakeCheck.on('click', function(){
        console.log('działa mi klik');
        
        var flavour = jQuery(this).parent().data('flavour');
        console.log(flavour);
        
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
        
    })
    
    //events for section 2
    
    var spoonInfo = jQuery('.spoonInfo').hide();
    console.log(spoonInfo);
    
    var spoonSelect = jQuery('.spoonSelect');
    console.log(spoonSelect);
    
    var cupcakeFilling = jQuery('.cupcakeFilling');
    
    spoonSelect.on('mouseover', function(){
        jQuery(this).prev('.spoonInfo').show();
    })
    
    spoonSelect.on('mouseleave', function(){
        jQuery(this).prev('.spoonInfo').hide();
    })
    
    spoonSelect.on('click', function(){
        console.log('pick me');
        
        
        var flav = jQuery(this).next('.spoonTop').data('flavour');
        console.log(flav);
        
        cupcakeFilling.removeClass('cherry');
        cupcakeFilling.removeClass('peanut');
        cupcakeFilling.removeClass('whitechoc');
        
        cupcakeFilling.addClass(flav);
        
    })
    
    //events for section 3
    
    var frostingCheck = jQuery('.frostingCheck');
    console.log(frostingCheck);
    frostingCheck.hide();
    
    var descBar = jQuery('.descBar');
    console.log(descBar);
    descBar.hide();
    
    var frostingCircle = jQuery('.frostingCircle');
    console.log(frostingCircle);
    
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
        console.log(frostFlav);
        
        var frostingA = jQuery('.frosting').find('.frostingA');
        var frostingM = jQuery('.frosting').find('.frostingM');
        var frostingL = jQuery('.frosting').find('.frostingL');
        
        
        frostingA.removeClass('choco meringue raspberry');
        frostingM.removeClass('choco meringue raspberry');
        frostingL.removeClass('choco meringue raspberry');
        
        frostingA.addClass(frostFlav);
        frostingM.addClass(frostFlav);
        frostingL.addClass(frostFlav);
        
    })
    
    //events for section 4 and 5
    
    var section5 = jQuery('.section5').hide();
    
    var recBtn = jQuery('.recBtn');
    
    recBtn.on('click', function(){
        
        section5.show();
        
    })
    
    
    
    
    
});