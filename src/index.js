
$(document).ready(function(){
  var btncount= 0
  var sbtcount=0
  var frmcount=0
// Say "button" voting
  $('#btnplus').click(function(){
    $('#saybutton').text(`Total Count:  ${btncount +1} `)
    btncount+=1
  })

  $('#btnminus').click(function(){
      if (btncount > 0){
          $("#saybutton").text(`Total Count:  ${btncount -1} `)
          btncount-=1
      }else{
          btncount=0}
    })

  $('#btnplusfive').click(function(){
    $("#saybutton").text(`Total Count:  ${btncount +5} `)
    btncount+=5
  })

  $('#btnclear').click(function(){
    $("#saybutton").text(`Total Count: 0 `)
    btncount=0
  })

// say "submit" voting functionallity

  $("#sbtplus").click(function(){
    $('#saysubmit').text(`Total Count:  ${sbtcount +1} `)
    sbtcount+=1
  })

  $('#sbtminus').click(function(){
      if (sbtcount > 0){
          $("#saysubmit").text(`Total Count:  ${sbtcount -1} `)
          sbtcount-=1
      }else{
          sbtcount=0}
    })

  $('#sbtplusfive').click(function(){
    $("#saysubmit").text(`Total Count:  ${sbtcount +5} `)
    sbtcount+=5
  })

  $('#sbtclear').click(function(){
    $("#saysubmit").text(`Total Count: 0 `)
    sbtcount=0
  })

  // say "form" voting functionallity


    $("#frmplus").click(function(){
      $('#sayform').text(`Total Count:  ${frmcount +1} `)
      frmcount+=1
    })

    $('#frmminus').click(function(){
        if (frmcount > 0){
            $("#sayform").text(`Total Count:  ${frmcount -1} `)
            frmcount-=1
        }else{
            frmcount=0}
      })

    $('#frmplusfive').click(function(){
      $("#sayform").text(`Total Count:  ${frmcount +5} `)
      frmcount+=5
    })

    $('#frmclear').click(function(){
      $("#sayform").text(`Total Count: 0 `)
      frmcount=0
    })



})
