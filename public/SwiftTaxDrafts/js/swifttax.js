$(".nextBtn1").fadeOut();
$("#validNameCheck").hide();
$("#interestForm").hide();
$("#unemploymentForm").hide();
$(document).ready(function(){

 $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 600, // Transition in duration
      out_duration: 0, // Transition out duration
      // ready: function() { $.show('#modal2'); }, // Callback for Modal open
      // complete: function() { $.hide('#modal1'); } // Callback for Modal close
    
  });

  var inputName;

  $("#inputFirstName").keyup(function(){
    if ((/[A-Z]/ig).test($("#inputFirstName").val())) {
        $("#validNameCheck").hide()
        if ($("#inputFirstName").val().length > 1) {
          $(".nextBtn1").fadeIn(1000).css("transition: ''");
        }
    }
    if (($("#inputFirstName").val().length < 2)) {
      $(".nextBtn1").fadeOut(1000).css("transition: ''");
    }
    if (!((/[A-Z]/ig).test($("#inputFirstName").val()))) {
      $("#validNameCheck").show() }

  });


	$(".nextBtn1").click(function(){
    inputName = $.trim($("#inputFirstName").val())
    $("#inputNameValue").text("Thanks " + inputName + "!")
    $('#modal1').closeModal({out_duration: 0,});
    $('#modal2').openModal({in_duration: 0,});
  });
  $(".nextBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal3').openModal({in_duration: 0,});
  });
   $(".backBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal1').openModal({in_duration: 0,});
  });
   $(".nextBtn3").click(function(){
    $('#modal3').closeModal({out_duration: 0,});
    $('#modal4').openModal({in_duration: 0,});
  });
   $(".backBtn3").click(function(){
    $('#modal3').closeModal({out_duration: 0,});
    $('#modal2').openModal({in_duration: 0,});
  });
    $(".nextBtn4").click(function(){
    $('#modal4').closeModal({out_duration: 0,});
    $('#modal5').openModal({in_duration: 0,});
    $('.centerBtn5').show();
    $("#interestForm").hide();
    $(".nextBtn5").text("No");
    $("#interestQuestion").text("Did you receive any taxable interest in 2015?");
  });
   $(".backBtn4").click(function(){
    $('#modal4').closeModal({out_duration: 0,});
    $('#modal3').openModal({in_duration: 0,});
  });
    $(".nextBtn5").click(function(){
    $('#modal5').closeModal({out_duration: 0,});
    $('#modal6').openModal({in_duration: 0,});
    $('.centerBtn6').show();
    $("#unemploymentForm").hide();
    $(".nextBtn6").text("No");
    $("#unemployQuestion").text("Did you receive any unemployment compensation in 2015?");
  });
   $(".backBtn5").click(function(){
    $('#modal5').closeModal({out_duration: 0,});
    $('#modal4').openModal({in_duration: 0,});
  });
  $(".centerBtn5").click(function(){
    $('.centerBtn5').hide();
    $("#interestForm").slideDown(1500);
    $(".nextBtn5").text("Continue");
    $("#interestQuestion").text("Enter your total taxable interest.");
  });
    $(".nextBtn6").click(function(){
    $('#modal6').closeModal({out_duration: 0,});
    $('#modal7').openModal({in_duration: 0,});
    $('.centerBtn7').show();
    $("#alaskaForm").hide();
    $(".nextBtn7").text("No");
    $("#alaskaQuestion").text("Did you receive any Alaska Permanent Fund dividends in 2015?");
  });
   $(".backBtn6").click(function(){
    $('#modal6').closeModal({out_duration: 0,});
    $('#modal5').openModal({in_duration: 0,});
    $('.centerBtn5').show();
    $("#interestForm").hide();
    $(".nextBtn5").text("No");
    $("#interestQuestion").text("Did you receive any taxable interest in 2015?");
  });
  $(".centerBtn6").click(function(){
    $('.centerBtn6').hide();
    $("#unemploymentForm").slideDown(1500);
    $(".nextBtn6").text("Continue");
    $("#unemployQuestion").text("Enter your total unemployment compensation received in 2015.");
  });
    $(".nextBtn7").click(function(){
    $('#modal7').closeModal({out_duration: 0,});
    $('#modal8').openModal({in_duration: 0,}); 
    $("#greatNews").text("Great news, " + inputName + "!")
  });
    $(".backBtn7").click(function(){
    $('#modal7').closeModal({out_duration: 0,});
    $('#modal6').openModal({in_duration: 0,});
    $('.centerBtn6').show();
    $("#unemployForm").hide();
    $(".nextBtn6").text("No");
    $("#unemployQuestion").text("Did you receive any unemployment compensation in 2015?");
  });
  $(".centerBtn7").click(function(){
    $('.centerBtn7').hide();
    $("#alaskaForm").slideDown(1500);
    $(".nextBtn7").text("Continue");
    $("#alaskaQuestion").text("Enter your total Alaska Permanent Fund dividends received in 2015.");
  });
    $(".nextBtn8").click(function(){
    $('#modal8').closeModal({out_duration: 0,});
    $('#modal9').openModal({in_duration: 0,}); 
  });
    $(".backBtn8").click(function(){
    $('#modal8').closeModal({out_duration: 0,});
    $('#modal7').openModal({in_duration: 0,});
    $('.centerBtn7').show();
    $("#alaskaForm7").hide();
    $(".nextBtn7").text("No");
    $("#alaskaQuestion").text("Did you receive any Alaska Permanent Fund dividends in 2015?");
  });
    $(".nextBtn9").click(function(){
    $('#modal9').closeModal({out_duration: 0,});
    $('#modal10').openModal({in_duration: 0,}); 
    $("#doneIncome").text("Congrats, " + inputName + "!")
  });
    $(".backBtn9").click(function(){
    $('#modal9').closeModal({out_duration: 0,});
    $('#modal8').openModal({in_duration: 0,});
  });
  $(".centerBtn9").click(function(){
  });
    $(".nextBtn10").click(function(){
    $('#modal10').closeModal({out_duration: 0,});
    $('#modal11').openModal({in_duration: 0,}); 
  });
    $(".backBtn10").click(function(){
    $('#modal10').closeModal({out_duration: 0,});
    $('#modal9').openModal({in_duration: 0,});
  });
    $(".nextBtn11").click(function(){
    $('#modal11').closeModal({out_duration: 0,});
    $('#modal12').openModal({in_duration: 0,}); 
  });
    $(".backBtn11").click(function(){
    $('#modal11').closeModal({out_duration: 0,});
    $('#modal10').openModal({in_duration: 0,});
  });
     $(".nextBtn12").click(function(){
    $('#modal12').closeModal({out_duration: 0,});
    $('#modal13').openModal({in_duration: 0,}); 
  });
    $(".backBtn12").click(function(){
    $('#modal12').closeModal({out_duration: 0,});
    $('#modal11').openModal({in_duration: 0,});
  });


});


// Indeed API //

var zip = 78234;
var jobTitle = " web developer  ";
var query = ($.trim(jobTitle)).replace(/\s/g, "+");
console.log(query);
var jobUrl = "http://api.indeed.com/ads/apisearch?publisher=6167575085685252&q=" + query + "&l=" + zip + "&sort=&radius=&st=&jt=&start=&limit=3&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2"


$.get(jobUrl, {
    dataType: 'xml' 
  })
  .done(function(data){
    console.log(data);
    console.log(data.childNode[0]);
  })


    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  //   $('.modal-trigger').leanModal();

  // });
  

    