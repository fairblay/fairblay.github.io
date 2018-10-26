$(document).ready( function(){

var typePaper={"Coated paper":6.8,
                "Elevated white paper":40.5,
                "Prestige linen":45};
var typeChromacity={"One-sided black-white":{"file":110,"print":14},
                  "Double-sided black-white":{"file":220,"print":28},
                  "One-sided colored":{"file":110,"print":37},
                  "Double-sided colored/black-white":{"file":220,"print":51},
                  "Double-sided colored":{"file":220,"print":74}
                  };
var ac=1,pricePaper=0,priceFile=0,pricePrint=0;
initTypePaper();
initChromaticity();
$("#amountcutway").change (circulation);
$("#typepaper").change (sumForTypePaper);
$("#chromaticity").change (sumForChromacity);

function initTypePaper(){
  var strHtml="";
  for(type in typePaper)
  strHtml+='<option value="'+typePaper[type]+'">'+type+'</option>';
  $("#typepaper").append(strHtml);
}

function initChromaticity(){
  var strHtml="";
  for(type in typeChromacity)
  strHtml+='<option value="'+type+'">'+type+'</option>';
  $("#chromaticity").append(strHtml);
}
/*************************************************************/
function sumForTypePaper(){
  pricePaper=$("select#typepaper").val();
  totalSum();
}
function sumForChromacity(){
  if($("select#chromaticity").val()!='0')
  {
  priceFile=typeChromacity[$("select#chromaticity").val()]["file"];
  pricePrint=typeChromacity[$("select#chromaticity").val()]["print"];
  }
  totalSum();
  $(".col-6 img").css("display","none");
  switch ($("select#chromaticity").val()) {
    case "One-sided black-white":
    $("#1_0").css("display","inline-block");
    break;
    case "Double-sided black-white":
    $("#1_1").css("display","inline-block");
    break;
    case "One-sided colored":
    $("#4_0").css("display","inline-block");
    break;
    case "Double-sided colored/black-white":
    $("#4_1").css("display","inline-block");
    break;
    case "Double-sided colored":
    $("#4_4").css("display","inline-block");
     break;
    default:

  }
}
function circulation(){
  ac=$("#amountcutway").val()/30;
  totalSum();
}
function totalSum(){

  sum=pricePaper*ac+priceFile+pricePrint*ac;
  $("#total").text(sum);
}
});
