
$("input[type='radio']")."translationChoices"(functin() {
  $("input:checked").prop('chcked',false);
  $(this).prop('checked',true);
})

if ($("input:checked").val() == "echo"){

}

if ($("input:checked").val() == "Caesar cipher"){

}

if ($("input:checked").val() == "heiroglyphics"){

}

if ($("input:checked").val() == "runes"){

}

var code = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  32: " ",
}


$("#inputArea").keydown(function(e) {

  if($("input:checked").val() == "echo")
    $("#textArea").append("code");
  })


  var cipher = {
    65: "z",
    66: "a",
    67: "b",
    68: "c",
    69: "d",
    70: "e",
    71: "f",
    72: "g",
    73: "h",
    74: "i",
    75: "j",
    76: "k",
    77: "l",
    78: "m",
    79: "n",
    80: "o",
    81: "p",
    82: "q",
    83: "r",
    84: "s",
    85: "t",
    86: "u",
    87: "v",
    88: "w",
    89: "x",
    90: "y",
    32: " ",
  }




var heiroglyphics = {
  65: "<img src='images/heiroglyphics/a.gif'>",
  66: "<img src='images/heiroglyphics/b.gif'>",
  67: "<img src='images/heiroglyphics/c.gif'>",
  68: "<img src='images/heiroglyphics/d.gif'>",
  69: "<img src='images/heiroglyphics/e.gif'>",
  70: "<img src='images/heiroglyphics/f.gif'>",
  71: "<img src='images/heiroglyphics/g.gif'>",
  72: "<img src='images/heiroglyphics/h.gif'>",
  73: "<img src='images/heiroglyphics/i.gif'>",
  74: "<img src='images/heiroglyphics/j.gif'>",
  75: "<img src='images/heiroglyphics/k.gif'>",
  76: "<img src='images/heiroglyphics/l.gif'>",
  77: "<img src='images/heiroglyphics/m.gif'>",
  78: "<img src='images/heiroglyphics/n.gif'>",
  79: "<img src='images/heiroglyphics/o.gif'>",
  80: "<img src='images/heiroglyphics/p.gif'>",
  81: "<img src='images/heiroglyphics/q.gif'>",
  82: "<img src='images/heiroglyphics/r.gif'>",
  83: "<img src='images/heiroglyphics/s.gif'>",
  84: "<img src='images/heiroglyphics/t.gif'>",
  85: "<img src='images/heiroglyphics/u.gif'>",
  86: "<img src='images/heiroglyphics/v.gif'>",
  87: "<img src='images/heiroglyphics/w.gif'>",
  88: "<img src='images/heiroglyphics/x.gif'>",
  89: "<img src='images/heiroglyphics/y.gif'>",
  90: "<img src='images/heiroglyphics/z.gif'>",
  32: " "
}

var runes = {

  65: "<img src='images/runes/a.gif'>",
  66: "<img src='images/runes/b.gif'>",
  67: "<img src='images/runes/c.gif'>",
  68: "<img src='images/runes/d.gif'>",
  69: "<img src='images/runes/e.gif'>",
  70: "<img src='images/runes/f.gif'>",
  71: "<img src='images/runes/g.gif'>",
  72: "<img src='images/runes/h.gif'>",
  73: "<img src='images/runes/i.gif'>",
  74: "<img src='images/runes/j.gif'>",
  75: "<img src='images/runes/k.gif'>",
  76: "<img src='images/runes/l.gif'>",
  77: "<img src='images/runes/m.gif'>",
  78: "<img src='images/runes/n.gif'>",
  79: "<img src='images/runes/o.gif'>",
  80: "<img src='images/runes/p.gif'>",
  81: "<img src='images/runes/q.gif'>",
  82: "<img src='images/runes/r.gif'>",
  83: "<img src='images/runes/s.gif'>",
  84: "<img src='images/runes/t.gif'>",
  85: "<img src='images/runes/u.gif'>",
  86: "<img src='images/runes/v.gif'>",
  87: "<img src='images/runes/w.gif'>",
  88: "<img src='images/runes/x.gif'>",
  89: "<img src='images/runes/y.gif'>",
  90: "<img src='images/runes/z.gif'>",
  32: " "
}
