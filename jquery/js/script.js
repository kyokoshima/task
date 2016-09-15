$(function(){
  var stack = [];
  var cleared = false;
  var lastPushedButton;
  var getLastStackValue = function(){
    return stack[stack.length - 1];
  }
  var isOperator = function(value) {
    return (value == '+' ||
      value == '-' ||
      value == '/' ||
      value == '*');
  }

  $('.number').on('click', function(){
    if (isOperator(getLastStackValue())) {
      if (!cleared) {
        $('#result').text('');
        cleared = true;
      }
    }

    var currentValue = $('#result').text();
    var newValue;
    if (currentValue == 0) {
      newValue = $(this).text();
    } else {
      newValue = currentValue + $(this).text();
    }
    $('#result').text(newValue);
  });
  $('.ope').on('click', function(){
    // console.log($(this).data('ope'));
    var ope = $(this).data('ope');
    if (isOperator(lastPushedButton)) {
      stack[stack.length - 1] = ope;
    } else if (lastPushedButton == '='){
      stack.push(ope);
    } else {
      stack.push($('#result').text());
      stack.push(ope);
    }
    cleared = false;
    console.log(stack);
  });

  $('#equal').on('click', function(){
    if (lastPushedButton == '=') {
      var lastFormula = stack.slice(stack.length - 2);
      lastFormula.unshift($('#result').text());
      $('#result').text(eval(lastFormula.join('')));
    } else {
      stack.push($('#result').text());
      console.log(stack);
      console.log(stack.join(""));
      var formula = stack.join("");
      $('#result').text(eval(formula));
    }
  });
  var calculate = function(formulaArray) {
    var formula = '';
    var result;
    formulaArray.forEach(function(val, index){
      if(isFinite(val)) {
        if (index == 0) {
          formula += val;
          result = eval(formula);
        } else {
          formula += result;
        }


        console.log(result);
      } else {
        formula += val;
      }
      console.log(formula);
    });
  };
  $('.btn').on('click', function(){
    if ($(this).hasClass('number')) {
      lastPushedButton = $(this).data('number');
    } else if($(this).hasClass('ope')) {
      lastPushedButton = $(this).data('ope');
    } else if($(this).attr('id') == 'equal') {
      lastPushedButton = '=';
    }
  }).on('mousedown', function(){
    $(this).addClass('mousedown');
  }).on('mouseup', function(){
    $(this).removeClass('mousedown');
  }).on('blur', function(){
    $(this).removeClass('mousedown');
  });

  $('#ac').on('click', function(){
    $('#result').text(0);
    stack = [];
  });
});
