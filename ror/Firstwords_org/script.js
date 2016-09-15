

$(function(){
//フェードインさせるため一旦全部非表示にする
$('body').append(
  '<style type="text/css">.contents{opacity: 0;margin-top:10px;}'
  );

//読み込み完了後にフェードインさせる
  $(window).load(function(){
    var delaySpeed = 1000;
    var fadeSpeed = 1000;
    $('.contents').each(function(i){
      $(this).delay(i*(delaySpeed)).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
    });

//要素を上に動かす
    $('.contents').animate({'bottom':'200px'},80000);
  });
});


//メニューをマウスオーバーしたら出てくるようにする
$(function(){
  $('.menu').hover(
    function(){
      $(this).animate({'marginRight':'140px'},500);
      $('.open').css('color','white');
    },
    function(){
      $(this).animate({'marginRight':'0'},500);
      $('.open').css('color','black');
    }
  );
});



//about-btnを押したらaboutが出てくる
$(function(){
  $('.about-btn').click(function(){
    $('.about').fadeIn();
    $('.guide').fadeIn();
    $('.contents').fadeOut();
    /*メニューが消える*/
    $('.menu').fadeOut();
    
  });
});


//top-btnを押したらaboutが消えてcontentsが出てくる
$(function(){
  $('.top-btn').click(function(){
    $('.about').fadeOut();
    $('.contents').fadeIn();
    $('.contents').animate({'bottom':'200px'},80000);
  });
});

//ENを押したら英語が出る
$(function(){
  $('.english').click(function(){
    $('.jpn-about').fadeOut('slow');
    $('.eng-about').fadeIn('slow');
    $('.japanese').css('opacity','0.5');
    $('.english').css('opacity','1.0');
  });
})

//JAを押したら日本語が出る
$(function(){
  $('.japanese').click(function(){
    $('.eng-about').fadeOut('slow');
    $('.jpn-about').fadeIn('slow');
    $('.english').css('opacity','0.5');
    $('.japanese').css('opacity','1.0');
  })
})

//logo押したらcontents出てくる
$(function(){
  $('.logo').click(function(){
    $('.contents').fadeIn();
    $('.about').fadeOut();
        $('.guide').fadeOut();
    $('.detail').fadeOut();
    $('.menu').fadeIn();
    $('.contents').animate({'bottom':'200px'},80000);
  })
})


//領域外をクリックしたらTOPに戻る
// $(document).click(function(event){
//   if(!$.contains($('.about')[0], event.target)){
//     $('.about').hide();
//   }
// });


//言葉をクリックしたら詳細表示
$(function(){
  $('.1').click(function(){
  $('.contents').stop();
  $('.detail-1').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.2').click(function(){
  $('.contents').stop();
  $('.detail-2').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.3').click(function(){
  $('.contents').stop();
  $('.detail-3').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.4').click(function(){
  $('.contents').stop();
  $('.detail-4').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.5').click(function(){
  $('.contents').stop();
  $('.detail-5').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.6').click(function(){
  $('.contents').stop();
  $('.detail-6').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.7').click(function(){
  $('.contents').stop();
  $('.detail-7').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.8').click(function(){
  $('.contents').stop();
  $('.detail-8').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.9').click(function(){
  $('.contents').stop();
  $('.detail-9').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.10').click(function(){
  $('.contents').stop();
  $('.detail-10').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.11').click(function(){
  $('.contents').stop();
  $('.detail-11').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.12').click(function(){
  $('.contents').stop();
  $('.detail-12').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.13').click(function(){
  $('.contents').stop();
  $('.detail-13').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.14').click(function(){
  $('.contents').stop();
  $('.detail-14').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.15').click(function(){
  $('.contents').stop();
  $('.detail-15').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.16').click(function(){
  $('.contents').stop();
  $('.detail-16').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.17').click(function(){
  $('.contents').stop();
  $('.detail-17').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.18').click(function(){
  $('.contents').stop();
  $('.detail-18').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.19').click(function(){
  $('.contents').stop();
  $('.detail-19').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.20').click(function(){
  $('.contents').stop();
  $('.detail-20').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.21').click(function(){
  $('.contents').stop();
  $('.detail-21').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.22').click(function(){
  $('.contents').stop();
  $('.detail-22').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.23').click(function(){
  $('.contents').stop();
  $('.detail-23').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.24').click(function(){
  $('.contents').stop();
  $('.detail-24').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.25').click(function(){
  $('.contents').stop();
  $('.detail-25').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.26').click(function(){
  $('.contents').stop();
  $('.detail-26').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.27').click(function(){
  $('.contents').stop();
  $('.detail-27').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.28').click(function(){
  $('.contents').stop();
  $('.detail-28').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.29').click(function(){
  $('.contents').stop();
  $('.detail-29').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.30').click(function(){
  $('.contents').stop();
  $('.detail-30').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.31').click(function(){
  $('.contents').stop();
  $('.detail-31').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.32').click(function(){
  $('.contents').stop();
  $('.detail-32').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.33').click(function(){
  $('.contents').stop();
  $('.detail-33').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.34').click(function(){
  $('.contents').stop();
  $('.detail-34').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.35').click(function(){
  $('.contents').stop();
  $('.detail-35').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.36').click(function(){
  $('.contents').stop();
  $('.detail-36').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.37').click(function(){
  $('.contents').stop();
  $('.detail-37').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.38').click(function(){
  $('.contents').stop();
  $('.detail-38').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.39').click(function(){
  $('.contents').stop();
  $('.detail-39').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.40').click(function(){
  $('.contents').stop();
  $('.detail-40').fadeIn();
  $('.guide').fadeIn();
  });
});

$(function(){
  $('.41').click(function(){
  $('.contents').stop();
  $('.detail-41').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.42').click(function(){
  $('.contents').stop();
  $('.detail-42').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.43').click(function(){
  $('.contents').stop();
  $('.detail-43').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.44').click(function(){
  $('.contents').stop();
  $('.detail-44').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.45').click(function(){
  $('.contents').stop();
  $('.detail-45').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.46').click(function(){
  $('.contents').stop();
  $('.detail-46').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.47').click(function(){
  $('.contents').stop();
  $('.detail-47').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.48').click(function(){
  $('.contents').stop();
  $('.detail-48').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.49').click(function(){
  $('.contents').stop();
  $('.detail-49').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.50').click(function(){
  $('.contents').stop();
  $('.detail-50').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.51').click(function(){
  $('.contents').stop();
  $('.detail-51').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.52').click(function(){
  $('.contents').stop();
  $('.detail-52').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.53').click(function(){
  $('.contents').stop();
  $('.detail-53').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.54').click(function(){
  $('.contents').stop();
  $('.detail-54').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.55').click(function(){
  $('.contents').stop();
  $('.detail-55').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.56').click(function(){
  $('.contents').stop();
  $('.detail-56').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.57').click(function(){
  $('.contents').stop();
  $('.detail-57').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.58').click(function(){
  $('.contents').stop();
  $('.detail-58').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.59').click(function(){
  $('.contents').stop();
  $('.detail-59').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.60').click(function(){
  $('.contents').stop();
  $('.detail-60').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.61').click(function(){
  $('.contents').stop();
  $('.detail-61').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.62').click(function(){
  $('.contents').stop();
  $('.detail-62').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.63').click(function(){
  $('.contents').stop();
  $('.detail-63').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.64').click(function(){
  $('.contents').stop();
  $('.detail-64').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.65').click(function(){
  $('.contents').stop();
  $('.detail-65').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.66').click(function(){
  $('.contents').stop();
  $('.detail-66').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.67').click(function(){
  $('.contents').stop();
  $('.detail-67').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.68').click(function(){
  $('.contents').stop();
  $('.detail-68').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.69').click(function(){
  $('.contents').stop();
  $('.detail-69').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.70').click(function(){
  $('.contents').stop();
  $('.detail-70').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.71').click(function(){
  $('.contents').stop();
  $('.detail-71').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.72').click(function(){
  $('.contents').stop();
  $('.detail-72').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.73').click(function(){
  $('.contents').stop();
  $('.detail-73').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.74').click(function(){
  $('.contents').stop();
  $('.detail-74').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.75').click(function(){
  $('.contents').stop();
  $('.detail-75').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.76').click(function(){
  $('.contents').stop();
  $('.detail-76').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.77').click(function(){
  $('.contents').stop();
  $('.detail-77').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.78').click(function(){
  $('.contents').stop();
  $('.detail-78').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.79').click(function(){
  $('.contents').stop();
  $('.detail-79').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.80').click(function(){
  $('.contents').stop();
  $('.detail-80').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.81').click(function(){
  $('.contents').stop();
  $('.detail-81').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.82').click(function(){
  $('.contents').stop();
  $('.detail-82').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.83').click(function(){
  $('.contents').stop();
  $('.detail-83').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.84').click(function(){
  $('.contents').stop();
  $('.detail-84').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.85').click(function(){
  $('.contents').stop();
  $('.detail-85').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.86').click(function(){
  $('.contents').stop();
  $('.detail-86').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.87').click(function(){
  $('.contents').stop();
  $('.detail-87').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.88').click(function(){
  $('.contents').stop();
  $('.detail-88').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.89').click(function(){
  $('.contents').stop();
  $('.detail-89').fadeIn();
  $('.guide').fadeIn();
  });
});



$(function(){
  $('.90').click(function(){
  $('.contents').stop();
  $('.detail-90').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.91').click(function(){
  $('.contents').stop();
  $('.detail-91').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.92').click(function(){
  $('.contents').stop();
  $('.detail-92').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.93').click(function(){
  $('.contents').stop();
  $('.detail-93').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.94').click(function(){
  $('.contents').stop();
  $('.detail-94').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.95').click(function(){
  $('.contents').stop();
  $('.detail-95').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.96').click(function(){
  $('.contents').stop();
  $('.detail-96').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.97').click(function(){
  $('.contents').stop();
  $('.detail-97').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.98').click(function(){
  $('.contents').stop();
  $('.detail-98').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.99').click(function(){
  $('.contents').stop();
  $('.detail-99').fadeIn();
  $('.guide').fadeIn();
  });
});


$(function(){
  $('.100').click(function(){
  $('.contents').stop();
  $('.detail-100').fadeIn();
  $('.guide').fadeIn();
  });
});