
$(document).ready(function(){
  var btncount= 0
  var sbtcount=0
  var frmcount=0
  var allwordcount=0




// Say "button" voting
  $('#btnplus').click(function(){
    $('#saybtn').text(`Total Count:  ${btncount +1} `)
    $('.oversaid').text(`Lots of words said: ${allwordcount +1}`)
    btncount+=1
    allwordcount+=1
  })

  $('#btnminus').click(function(){
      if (btncount > 0){
          $("#saybtn").text(`Total Count:  ${btncount -1} `)
          $('.oversaid').text(`Lots of words said: ${allwordcount -1}`)
          btncount-=1
          allwordcount-=1
      }else{
        $('.oversaid').text(`Lots of words said: ${allwordcount}`)
          btncount=0
          }
    })

  $('#btnplusfive').click(function(){
    $("#saybtn").text(`Total Count:  ${btncount +5} `)
    $('.oversaid').text(`Lots of words said: ${allwordcount +5}`)
    btncount+=5
    allwordcount+=5
    enough()
  })

  $('#btnclear').click(function(){
    $("#saybtn").text(`Total Count: 0 `)
    $('.oversaid').text(``)
    btncount=0
    allwordcount=0
  })

// say "submit" voting functionallity

  $("#sbtplus").click(function(){
    $('#saysubmit').text(`Total Count:  ${sbtcount +1} `)
    $('.oversaid').text(`Lots of words said: ${allwordcount +1}`)
    sbtcount+=1
    allwordcount+=1
  })

  $('#sbtminus').click(function(){
      if (sbtcount > 0){
          $("#saysubmit").text(`Total Count:  ${sbtcount -1} `)
          $('.oversaid').text(`Lots of words said: ${allwordcount -1}`)
          sbtcount-=1
          allwordcount-=1
      }else{
          sbtcount=0

        }
    })

  $('#sbtplusfive').click(function(){
    $("#saysubmit").text(`Total Count:  ${sbtcount +5} `)
    $('.oversaid').text(`Lots of words said: ${allwordcount +5}`)
    sbtcount+=5
    allwordcount+=5
  })

  $('#sbtclear').click(function(){
    $("#saysubmit").text(`Total Count: 0 `)
    $('.oversaid').text(``)
    sbtcount=0
    allwordcount=0
  })

  // say "form" voting functionallity


    $('#frmplus').click(function(){
      $("#sayform").text(`Total Count:  ${frmcount +1} `)
      $('.oversaid').text(`Lots of words said: ${allwordcount +1}`)
      frmcount+=1
      allwordcount+=1
    })

    $('#frmminus').click(function(){
        if (frmcount > 0){
            $("#sayform").text(`Total Count:  ${frmcount -1} `)
            $('.oversaid').text(`Lots of words said: ${allwordcount -1}`)
            frmcount-= 1
            allwordcount-=1
        }else{
            frmcount=0
            }
      })

    $('#frmplusfive').click(function(){
      $("#sayform").text(`Total Count:  ${frmcount +5} `)
      $('.oversaid').text(`Lots of words said: ${allwordcount +5}`)
      frmcount+=5
      allwordcount+=5
    })

    $('#frmclear').click(function(){
      $("#sayform").text(`Total Count: 0 `)
      $('.oversaid').text(``)
      frmcount=0

    })


// PSuedo code to improve total project
    $(function() {
        $('input[type="button"]').click(function() {
          console.log('You clicked button with ID:' + this.id);
        })
      });

function enough(){
  if(allwordcount>100)
      $(".oversaid").text("Enough speaking already!!")
 }

})
