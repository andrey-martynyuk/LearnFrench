let collapse = $('.collapse');

collapse.on('show.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
});

collapse.on('hide.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
});

let letters = [];
letters.push(text => {
  if (text.indexOf('a') != -1 || text.indexOf('à') != -1 || text.indexOf('â') != -1 || text.indexOf('æ') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('b') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('c') != -1 || text.indexOf('ç') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('d') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('e') != -1 || text.indexOf('é') != -1 || text.indexOf('è') != -1 || text.indexOf('ê') != -1 || text.indexOf('ë') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('f') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('g') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('h') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('i') != -1 || text.indexOf('î') != -1 || text.indexOf('ï') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('j') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('k') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('l') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('m') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('n') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('o') != -1 || text.indexOf('ô') != -1 || text.indexOf('œ') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('p') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('q') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('r') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('s') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('t') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('u') != -1 || text.indexOf('ù') != -1 || text.indexOf('û') != -1 || text.indexOf('ü') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('v') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('w') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('x') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('y') != -1 || text.indexOf('ÿ') != -1)
    return true;
  return false;
});
letters.push(text => {
  if (text.indexOf('z') != -1)
    return true;
  return false;
});

function filterAlphabet(text) {
  $('#alphabet tr').each((index, tr) => {
    $(tr).children('td').removeClass('table-primary').filter((index, td) => {
      return letters[index](text);
    }).addClass('table-primary');
  });
}

let diacritics = [];
diacritics.push(text => {
  if (text.indexOf('é') != -1)
    return true;
  return false;
});
diacritics.push(text => {
  if (text.indexOf('à') != -1 || text.indexOf('è') != -1 || text.indexOf('ù') != -1)
    return true;
  return false;
});
diacritics.push(text => {
  if (text.indexOf('â') != -1 || text.indexOf('ê') != -1 || text.indexOf('î') != -1 || text.indexOf('ô') != -1 || text.indexOf('û') != -1)
    return true;
  return false;
});
diacritics.push(text => {
  if (text.indexOf('ë') != -1 || text.indexOf('ï') != -1 || text.indexOf('ü') != -1 || text.indexOf('ÿ') != -1)
    return true;
  return false;
});
diacritics.push(text => {
  if (text.indexOf('ç') != -1)
    return true;
  return false;
});

function filterDiacritics(text) {
  $('#diacritics tr').each((index, tr) => {
    $(tr).children('td').removeClass('table-primary'); 
  }).filter((index, tr) => {
    let result = diacritics[index](text);
    return result;
  }).children('td').addClass('table-primary');
}

let ligatures = [];
ligatures.push(text => {
  if (text.indexOf('œ') != -1)
    return true;
  return false;
});
ligatures.push(text => {
  if (text.indexOf('æ') != -1)
    return true;
  return false;
});

function filterLigatures(text) {
  $('#ligatures tr').each((index, tr) => {
    $(tr).children('td').removeClass('table-primary'); 
  }).filter((index, tr) => {
    let result = ligatures[index](text);
    return result;
  }).children('td').addClass('table-primary');
}

function isWhitespace(text) {
  return text.trim() === '';
}

function isVowel(letter)
{
  switch (letter)
  {
    case 'a':
    case 'à':
    case 'â':
    case 'æ':
    case 'e':
    case 'é':
    case 'è':
    case 'ê':
    case 'ë':
    case 'i':
    case 'î':
    case 'ï':
    case 'o':
    case 'ô':
    case 'œ':
    case 'u':
    case 'ù':
    case 'û':
    case 'ü':
    case 'y':
    case 'ÿ':
      return true;
    default:
      return false;
  }
}

function isConsonant(letter)
{
  switch (letter)
  {
    case 'b':
    case 'c':
    case 'ç':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'z':
      return true;
    default:
      return false;
  }
}

function isSilentEnding(ending) {
  if (isWhitespace(ending))
    return true;
  // In case text contains several words,
  // we have to find the end of the current word.
  // For this we look for the first whitespace character.
  let i = 0;
  while (i < ending.length) {
    let letter = ending.charAt(i);
    if (isWhitespace(letter))
      break;
    i++;
  }
  // If the first character is a whitespace, we done!
  if (i == 0)
    return true;
  // If not, cut the string till the first whitespace.
  ending = ending.substr(0, i);
  switch (ending) {
    case 'bs':
    case 'cs':
    case 'ds':
    case 'fs':
    case 'gs':
    case 'ps':
    case 'ts':
    case 'b':
    case 'bb':
    case 'd':
    case 'dd':
    case 'e':
    case 'ent':
    case 'es':
    case 'g':
    case 'h':
    case 'p':
    case 'pp':
    case 's':
    case 't':
    case 'tt':
    case 'x':
    case 'z':
      return true;
    default:
      return false;
  }
}

function isA(letter)
{
  switch (letter)
  {
    case 'a':
    case 'à':
    case 'â':
      return true;
    default:
      return false;
  }
}

function isE(letter)
{
  switch (letter)
  {
    case 'e':
    case 'é':
    case 'è':
    case 'ê':
    case 'ë':
      return true;
    default:
      return false;
  }
}

function isI(letter)
{
  switch (letter)
  {
    case 'i':
    case 'î':
    case 'ï':
      return true;
    default:
      return false;
  }
}

function isO(letter)
{
  switch (letter)
  {
    case 'o':
    case 'ô':
      return true;
    default:
      return false;
  }
}

function isU(letter)
{
  switch (letter)
  {
    case 'u':
    case 'ù':
    case 'û':
    case 'ü':
      return true;
    default:
      return false;
  }
}

function isY(letter)
{
  switch (letter)
  {
    case 'y':
    case 'ÿ':
      return true;
    default:
      return false;
  }
}

function isAOU(letter)
{
  return isA(letter) || isO(letter) || isU(letter);
}

function isEIY(letter)
{
  return isE(letter) || isI(letter) || isY(letter);
}

function isPhonologicalZ(text, pos) {
  let letter = text.charAt(pos);
  if (letter == 's') // between two vowels
  {
    let p = text.charAt(pos - 1);
    let n = text.charAt(pos + 1);
    return isVowel(p) && isVowel(n);
  }
  if (letter == 'z') // final z is silent
  {
    let n = text.charAt(pos + 1);
    return !isWhitespace(n);
  }
  return false;
}

function isMonosyllabicWord(word) {
  let counter = 0;
  for (const letter of word) {
    if (isVowel(letter))
      counter++;
  }
  return counter == 1;
}

const rule1 = 0; // a, à
const rule2 = 1; // â
const rule3 = 2; // æ
const rule4 = 3; // ae
const rule5 = 4; // aë
const rule6 = 5; // aen, aën (before consonant or finally)
const rule7 = 6; // ai
const rule8 = 7; // aî
const rule9 = 8; // aï
const rule10 = 9; // aie
const rule11 = 10; // aim, ain (before consonant or finally)
const rule12 = 11; // am, an (before consonant or finally)
const rule13 = 12; // ao, aô elsewhere
const rule14 = 13; // ao, aô phonologically finally
const rule15 = 14; // aon (before consonant or finally)
const rule16 = 15; // aou, aoû
const rule17 = 16; // au	elsewhere
const rule18 = 17; // au	before r
const rule19 = 18; // ay	elsewhere
const rule20 = 19; // ay	finally
const rule21 = 20; // -aye
const rule22 = 21; // -bs, -cs (in the plural of words ending in silent b or c), -ds, -fs (in œufs and bœufs, and words ending with silent -f in the singular), ‑gs, -ps, -ts
const rule23 = 22; // b, bb	elsewhere
const rule24 = 23; // b, bb	before a voiceless consonant
const rule25 = 24; // b, bb	finally
const rule26 = 25; // ç
const rule27 = 26; // c	before e, i, y
const rule28 = 27; // c	initially/medially elsewhere
const rule29 = 28; // c	finally
const rule30 = 29; // cc	before e, i, y
const rule31 = 30; // cc	elsewhere
const rule32 = 31; // ch
const rule33 = 32; // cqu
const rule34 = 33; // -ct
const rule35 = 34; // -cte (as the feminine adjective ending for words ending in a silent "ct")
const rule36 = 35; // d, dd	elsewhere
const rule37 = 36; // d, dd	finally
const rule38 = 37; // e	elsewhere
const rule39 = 38; // e	before two or more consonants (including double consonants), x (in all cases), or a final consonant (silent or pronounced)
const rule40 = 39; // e	in monosyllabic words before a silent consonant
const rule41 = 40; // e	finally in a position where it can be easily elided
const rule42 = 41; // é, ée
const rule43 = 42; // è
const rule44 = 43; // ê
const rule45 = 44; // ee
const rule46 = 45; // eau
const rule47 = 46; // ei
const rule48 = 47; // eî
const rule49 = 48; // eim, ein (before consonant or finally)
const rule50 = 49; // em, en (before consonant or finally elsewhere)
const rule51 = 50; // em, en (before consonant or finally after é, i, or y)
const rule52 = 51; // -ent (3rd person plural verb ending)
const rule53 = 52; // eoi
const rule54 = 53; // -er
const rule55 = 54; // -es
const rule56 = 55; // eu	initially, phonologically finally, before /z/
const rule57 = 56; // eu	elsewhere
const rule58 = 57; // eû
const rule59 = 58; // eun (before consonant or finally)
const rule60 = 59; // ew
const rule61 = 60; // ey	before vowel
const rule62 = 61; // ey	finally
const rule63 = 62; // f, ff
const rule64 = 63; // g	before e, i, y
const rule65 = 64; // g	initially/medially elsewhere
const rule66 = 65; // g	finally
const rule67 = 66; // ge (before a, o, u)
const rule68 = 67; // gg	before e, i, y
const rule69 = 68; // gg	elsewhere
const rule70 = 69; // gn
const rule71 = 70; // gu (before e, i, y)
const rule72 = 71; // h
const rule73 = 72; // i	elsewhere
const rule74 = 73; // i	before vowel
const rule75 = 74; // î
const rule76 = 75; // ï (initially or between vowels)
const rule77 = 76; // -ie
const rule78 = 77; // -il (after some vowels)
const rule79 = 78; // -il (not after vowel)
const rule80 = 79; // -ill- (after some vowels)
const rule81 = 80; // -ill- (not after vowel)
const rule82 = 81; // im, in, în (before consonant or finally)
const rule83 = 82; // j
const rule84 = 83; // k
const rule85 = 84; // l, ll
const rule86 = 85; // m, mm
const rule87 = 86; // n, nn
const rule88 = 87; // ng (in loanwords)
const rule89 = 88; // o	phonologically finally, before /z/
const rule90 = 89; // o	elsewhere
const rule91 = 90; // ô
const rule92 = 91; // œ
const rule93 = 92; // oe
const rule94 = 93; // oê
const rule95 = 94; // oë
const rule96 = 95; // œu	phonologically finally
const rule97 = 96; // œu	elsewhere
const rule98 = 97; // oi, oie
const rule99 = 98; // oî
const rule100 = 99; // oï
const rule101 = 100; // oin, oën (before consonant or finally)
const rule102 = 101; // om, on (before consonant or finally)
const rule103 = 102; // oo
const rule104 = 103; // ou, où	elsewhere
const rule105 = 104; // ou, où	before vowel or h+vowel
const rule106 = 105; // oû
const rule107 = 106; // -oue
const rule108 = 107; // ow
const rule109 = 108; // oy
const rule110 = 109; // p, pp	elsewhere
const rule111 = 110; // p, pp	finally
const rule112 = 111; // ph
const rule113 = 112; // pt	initially
const rule114 = 113; // pt	medially
const rule115 = 114; // pt	finally
const rule116 = 115; // q
const rule117 = 116; // qu
const rule118 = 117; // r, rr
const rule119 = 118; // s	initially, medially next to a consonant, or after a nasal vowel
const rule120 = 119; // s	elsewhere between two vowels
const rule121 = 120; // s	finally
const rule122 = 121; // sc	before e, i, y
const rule123 = 122; // sc	elsewhere
const rule124 = 123; // sch
const rule125 = 124; // ss
const rule126 = 125; // -st
const rule127 = 126; // t, tt	elsewhere
const rule128 = 127; // t, tt	finally
const rule129 = 128; // tch
const rule130 = 129; // th
const rule131 = 130; // ti + vowel (initially or after s or x)
const rule132 = 131; // ti + vowel (elsewhere)
const rule133 = 132; // u	elsewhere
const rule134 = 133; // u	before vowel
const rule135 = 134; // û 
const rule136 = 135; // ue, üe elsewhere
const rule137 = 136; // ue, üe finally
const rule138 = 137; // um, un (before consonant or finally)
const rule139 = 138; // uy
const rule140 = 139; // v
const rule141 = 140; // w
const rule142 = 141; // x	initially, next to a voiceless consonant, phonologically finally
const rule143 = 142; // x	medially elsewhere
const rule144 = 143; // x	finally
const rule145 = 144; // xc before e, i, y
const rule146 = 145; // xc elsewhere
const rule147 = 146; // y	elsewhere
const rule148 = 147; // y	before vowel
const rule149 = 148; // ÿ	used only in proper nouns
const rule150 = 149; // ym, yn	before consonant or finally
const rule151 = 150; // z	elsewhere
const rule152 = 151; // z	finally

let rules = [];
rules.push((text, matches) => {
  for (let index = 0; index < text.length; index++)
  {
    switch (text[index])
    {
      case 'à':
        matches.push(rule1);
        break;
      case 'â':
        matches.push(rule2);
        break;
      case 'æ':
        matches.push(rule3);
        break;
      case 'ç':
        matches.push(rule26);
        break;
      case 'é':
        matches.push(rule42);
        break;
      case 'è':
        matches.push(rule43);
        break;
      case 'ê':
        matches.push(rule44);
        break;
      case 'f':
        matches.push(rule63);
        break;
      case 'h':
        matches.push(rule72);
        break;
      case 'j':
        matches.push(rule83);
        break;
      case 'k':
        matches.push(rule84);
        break;
      case 'l':
        matches.push(rule85);
        break;
      case 'm':
        matches.push(rule86);
        break;
      case 'ô':
        matches.push(rule91);
        break;
      case 'r':
        matches.push(rule118);
        break;
      case 'û':
        matches.push(rule135);
        break;
      case 'v':
        matches.push(rule140);
        break;
      case 'w':
        matches.push(rule141);
        break;
      case 'ÿ':
        matches.push(rule149);
        break;
    }
  }
});
rules.push((text, matches) => {
  let a = text.indexOf('a');
  while (a != -1) {
    if (text.charAt(a + 1) == 'e')
    {
      if (text.charAt(a + 2) == 'n')
      {
        let next = text.charAt(a + 3);
        if (isWhitespace(next) || isConsonant(next))
          matches.push(rule6);
      }
      else
      {
        matches.push(rule4);
      }
    }
    else if (text.charAt(a + 1) == 'ë')
    {
      if (text.charAt(a + 2) == 'n')
      {
        let next = text.charAt(a + 3);
        if (isWhitespace(next) || isConsonant(next))
          matches.push(rule6);
      }
      else
      {
        matches.push(rule5);
      }
    }
    else if (text.charAt(a + 1) == 'i')
    {
      if (text.charAt(a + 2) == 'e')
      {
        matches.push(rule10);
      }
      else if (text.charAt(a + 2) == 'm' || text.charAt(a + 2) == 'n')
      {
        let next = text.charAt(a + 3);
        if (isWhitespace(next) || isConsonant(next))
          matches.push(rule11);
      }
      else
      {
        matches.push(rule7);
      }
    }
    else if (text.charAt(a + 1) == 'î')
    {
      matches.push(rule8);
    }
    else if (text.charAt(a + 1) == 'ï')
    {
      matches.push(rule9);
    }
    else if (text.charAt(a + 1) == 'm' || text.charAt(a + 1) == 'n')
    {
      let next = text.charAt(a + 2);
      if (isWhitespace(next) || isConsonant(next))
        matches.push(rule12);
    }
    else if (text.charAt(a + 1) == 'o' || text.charAt(a + 1) == 'ô')
    {
      if (text.charAt(a + 2) == 'n')
      {
        let next = text.charAt(a + 3);
        if (isWhitespace(next) || isConsonant(next))
          matches.push(rule15);
      }
      else if (text.charAt(a + 2) == 'u' || text.charAt(a + 2) == 'û')
      {
        matches.push(rule16);
      }
      else
      {
        let ending = text.substr(a + 2);
        if (isSilentEnding(ending))
          matches.push(rule14);
        else
          matches.push(rule13);
      }
    }
    else if (text.charAt(a + 1) == 'u')
    {
      if (text.charAt(a + 2) == 'r')
        matches.push(rule18);
      else
        matches.push(rule17);
    }
    else if (text.charAt(a + 1) == 'y')
    {
      let next = text.charAt(a + 3);
      if (text.charAt(a + 2) == 'e' && isWhitespace(next))
        matches.push(rule21);
      else if (isWhitespace(next))
        matches.push(rule20);
      else
        matches.push(rule19);
    }
    a = text.indexOf('a', a + 1);
  }
});
rules.push((text, matches) => {
  let ending = text.substr(-2);
  switch (ending)
  {
    case 'bs':
    case 'cs':
    case 'ds':
    case 'fs':
    case 'gs':
    case 'ps':
    case 'ts':
      matches.push(rule22);
  }
});
rules.push((text, matches) => {
  let b = text.indexOf('b');
  while (b != -1) {
    let next = text.charAt(b + 1);
    if (isWhitespace(next))
      matches.push(rule25);
    else if (next != 'b')
    {
      if (isConsonant(next))
        matches.push(rule24);
      else
        matches.push(rule23);
    }
    b = text.indexOf('b', b + 1);
  }
});
rules.push((text, matches) => {
  let c = text.indexOf('c');
  while (c != -1) {
    let n1 = text.charAt(c + 1);
    if (n1 == 'c')
    {
      let n2 = text.charAt(c + 2);
      if (isEIY(n2))
        matches.push(rule30);
      else
        matches.push(rule31);
      // skip next 'c'
      c += 1;
    }
    else if (n1 == 'h')
    {
      matches.push(rule32);
    }
    else if (n1 == 'q')
    {
      let n2 = text.charAt(c + 2);
      if (n2 == 'u')
        matches.push(rule33);
    }
    else if (n1 == 't')
    {
      let n2 = text.charAt(c + 2);
      if (isWhitespace(n2))
        matches.push(rule34);
      else if (n2 == 'e' && text.charAt(c + 3) == '')
        matches.push(rule35);
    }
    else if (isEIY(n1))
    {
      matches.push(rule27);
    }
    else if (isWhitespace(n1))
    {
      matches.push(rule29);
    }
    else
    {
      matches.push(rule28);
    }
    c = text.indexOf('c', c + 1);
  }
  return false;
});
rules.push((text, matches) => {
  let d = text.indexOf('d');
  while (d != -1) {
    let next = text.charAt(d + 1);
    if (isWhitespace(next))
      matches.push(rule37);
    else if (next != 'd')
      matches.push(rule36);
    d = text.indexOf('d', d + 1);
  }
});
rules.push((text, matches) => {
  let e = text.indexOf('e');
  while (e != -1)
  {
    let n1 = text.charAt(e + 1);
    if (n1 == 'e') 
    {
      matches.push(rule45);
      e += 1;
    }
    else if (n1 == 'a' && text.charAt(e + 2) == 'u')
    {
      matches.push(rule46);
    }
    else if (n1 == 'î')
    {
      matches.push(rule48);
    }
    else if (n1 == 'i')
    {
      let n2 = text.charAt(e + 2);
      if (n2 == 'm' || n2 == 'n')
      {
        let n3 = text.charAt(e + 3);
        if (isConsonant(n3) || isWhitespace(n3))
          matches.push(rule49);
      }
      else
      {
        matches.push(rule47);
      }
    }
    else if (n1 == 'n' && text.charAt(e + 2) == 't' && text.charAt(e + 3) == '')
    {
      matches.push(rule52);
    }
    else if (n1 == 'm' || n1 == 'n')
    {
      let n2 = text.charAt(e + 2);
      if (isConsonant(n2) || isWhitespace(n2))
      {
        let p1 = text.charAt(e - 1);
        if (isEIY(p1))
          matches.push(rule51);
        else
          matches.push(rule50);
      }
    }
    else if (n1 == 'o' && text.charAt(e + 2) == 'i')
    {
      matches.push(rule53);
    }
    else if (n1 == 'r' && text.charAt(e + 2) == '')
    {
      matches.push(rule54);
    }
    else if (n1 == 's' && text.charAt(e + 2) == '')
    {
      matches.push(rule55);
    }
    else if (n1 == 'u')
    {
      let n2 = text.charAt(e + 2);
      if (n2 == 'n')
      {
        let n3 = text.charAt(e + 3);
        if (isConsonant(n3) || isWhitespace(n3))
          matches.push(rule59);
      }
      else if (e == 0 || isSilentEnding(text.substr(e + 2)) || isPhonologicalZ(text, e + 2))
      {
        matches.push(rule56);
      }
      else
      {
        matches.push(rule57);
      }
    }
    else if (n1 == 'û')
    {
      matches.push(rule58);
    }
    else if (n1 == 'w')
    {
      matches.push(rule60);
    }
    else if (n1 == 'y')
    {
      let n2 = text.charAt(e + 2);
      if (isVowel(n2))
        matches.push(rule61);
      else if (isWhitespace(n2))
        matches.push(rule62);
    }
    else if (isMonosyllabicWord(text) && isConsonant(n1) && isSilentEnding(text.substr(e + 1)))
    {
      matches.push(rule40);
    }
    else
    {
      let n2 = text.charAt(e + 2);
      if (isConsonant(n1) && isConsonant(n2))
      {
        matches.push(rule39);
      }
      else if (n1 == 'x')
      {
        matches.push(rule39);
      }
      else if (isConsonant(n1) && isWhitespace(n2))
      {
        matches.push(rule39);
      }
      else if (isWhitespace(n1))
      {
        matches.push(rule41);
      }
      else
      {
        matches.push(rule38);
        matches.push(rule41);
      }
    }
    e = text.indexOf('e', e + 1);
  }
});
rules.push((text, matches) => {
  let g = text.indexOf('g');
  while (g != -1) {
    let n1 = text.charAt(g + 1);
    if (n1 == 'e' && isAOU(text.charAt(g + 2)))
    {
      matches.push(rule67);
    }
    else if (n1 == 'g')
    {
      let n2 = text.charAt(g + 2);
      if (isEIY(n2))
        matches.push(rule68);
      else
        matches.push(rule69);
      g += 1;
    }
    else if (n1 == 'n')
    {
      matches.push(rule70);
    }
    else if (n1 == 'u')
    {
      let n2 = text.charAt(g + 2);
      if (isEIY(n2))
        matches.push(rule71);
    }
    else
    {
      if (isEIY(n1))
        matches.push(rule64);
      else if (isWhitespace(n1))
        matches.push(rule66);
      else
        matches.push(rule65);
    }
    g = text.indexOf('g', g + 1);
  }
});
rules.push((text, matches) => {
  let î = text.indexOf('î');
  while (î != -1) {
    let n1 = text.charAt(î + 1);
    let n2 = text.charAt(î + 2);
    if (n1 == 'n' && (isConsonant(n2) || isWhitespace(n2)))
      matches.push(rule82);
    else
      matches.push(rule75);
    î = text.indexOf('î', î + 1);
  }
});
rules.push((text, matches) => {
  let ï = text.indexOf('ï');
  while (ï != -1) {
    if (ï == 0)
    {
      matches.push(rule76);
    }
    else
    {
      let p1 = text.charAt(ï - 1);
      let n1 = text.charAt(ï + 1);
      if (isVowel(p1) && isVowel(n1))
      {
        matches.push(rule76);
      }
    }
    ï = text.indexOf('ï', ï + 1);
  }
});
rules.push((text, matches) => {
  let i = text.indexOf('i');
  while (i != -1) {
    let n1 = text.charAt(i + 1);
    let n2 = text.charAt(i + 2);
    if (n1 == 'e' && isWhitespace(n2)) {
      matches.push(rule77);
    }
    else if (n1 == 'l' && n2 != 'l') {
      let p1 = text.charAt(i - 1);
      if (isVowel(p1))
        matches.push(rule78);
      else
        matches.push(rule79);
    }
    else if (n1 == 'l' && n2 == 'l') {
      let p1 = text.charAt(i - 1);
      if (isVowel(p1))
        matches.push(rule80);
      else
        matches.push(rule81);
    }
    else if ((n1 == 'm' || n1 == 'n') && (isConsonant(n2) || isWhitespace(n2))) {
      matches.push(rule82);
    }
    else {
      if (isVowel(n1))
        matches.push(rule74);
      else
        matches.push(rule73);
    }
    i = text.indexOf('i', i + 1);
  }
});
rules.push((text, matches) => {
  let n = text.indexOf('n');
  while (n != -1) {
    let n1 = text.charAt(n + 1);
    if (n1 == 'g')
      matches.push(rule88);
    else
      matches.push(rule87);
    n = text.indexOf('n', n + 1);
  }
});
rules.push((text, matches) => {
  let o = text.indexOf('o');
  while (o != -1) {
    let n1 = text.charAt(o + 1);
    let n2 = text.charAt(o + 2);
    if (n1 == 'e') {
      matches.push(rule93);
    }
    else if (n1 == 'ê') {
      matches.push(rule94);
    }
    else if (n1 == 'ë') {
      let n3 = text.charAt(o + 3);
      if (n2 == 'n' && (isConsonant(n3) || isWhitespace(n3)))
        matches.push(rule101);
      else
        matches.push(rule95);
    }
    else if (n1 == 'i') {
      let n3 = text.charAt(o + 3);
      if (n2 == 'n' && (isConsonant(n3) || isWhitespace(n3)))
        matches.push(rule101);
      else
        matches.push(rule98);
    }
    else if (n1 == 'î') {
      matches.push(rule99);
    }
    else if (n1 == 'ï') {
      matches.push(rule100);
    }
    else if ((n1 == 'm' || n1 == 'n') && (isConsonant(n2) || isWhitespace(n2))) {
      matches.push(rule102);
    }
    else if (n1 == 'o') {
      matches.push(rule103);
      o += 1;
    }
    else if (n1 == 'u') {
      let n3 = text.charAt(o + 3);
      if (n2 == 'e' && isWhitespace(n3))
        matches.push(rule107);
      else if (isVowel(n2) || (n2 == 'h' && isVowel(n3)))
        matches.push(rule105);
      else
        matches.push(rule104);
    }
    else if (n1 == 'ù') {
      let n3 = text.charAt(o + 3);
      if (isVowel(n2) || (n2 == 'h' && isVowel(n3)))
        matches.push(rule105);
      else
        matches.push(rule104);
    }
    else if (n1 == 'û') {
      matches.push(rule106);
    }
    else if (n1 == 'w') {
      matches.push(rule108);
    }
    else if (n1 == 'y') {
      matches.push(rule109);
    }
    else {
      let ending = text.substr(o + 1);
      if (isSilentEnding(ending) || isPhonologicalZ(text, o + 1))
        matches.push(rule89);
      else
        matches.push(rule90);
    }
    o = text.indexOf('o', o + 1);
  }
});
rules.push((text, matches) => {
  let œ = text.indexOf('œ');
  while (œ != -1) {
    let n1 = text.charAt(œ + 1);
    if (n1 == 'u') {
      let ending = text.substr(œ + 2);
      if (isSilentEnding(ending))
        matches.push(rule96);
      else
        matches.push(rule97);
    }
    else {
      matches.push(rule92);
    }
    œ = text.indexOf('œ', œ + 1);
  }
});
rules.push((text, matches) => {
  let p = text.indexOf('p');
  while (p != -1) {
    let n1 = text.charAt(p + 1);
    if (n1 == 'p') {
      // swallow one 'p'
    }
    else if (n1 == 'h') {
      matches.push(rule112);
    }
    else if (n1 == 't') {
      if (p == 0)
        matches.push(rule113);
      else if (text.charAt(p + 2) == '')
        matches.push(rule115);
      else
        matches.push(rule114);
    }
    else if (isWhitespace(n1)) {
      matches.push(rule111);
    }
    else {
      matches.push(rule110);
    }
    p = text.indexOf('p', p + 1);
  }
});
rules.push((text, matches) => {
  let q = text.indexOf('q');
  while (q != -1) {
    let n1 = text.charAt(q + 1);
    if (n1 == 'u')
      matches.push(rule117);
    else
      matches.push(rule116);
    q = text.indexOf('q', q + 1);
  }
});
rules.push((text, matches) => {
  let s = text.indexOf('s');
  while (s != -1) {
    let n1 = text.charAt(s + 1);
    if (n1 == 'c') {
      let n2 = text.charAt(s + 2);
      if (n2 == 'h')
        matches.push(rule124);
      else if (isEIY(n2))
        matches.push(rule122);
      else
        matches.push(rule123);
    }
    else if (n1 == 's') {
      matches.push(rule125);
      s += 1;
    }
    else if (n1 == 't' && text.charAt(s + 2) == '') {
      matches.push(rule126);
    }
    else if (isWhitespace(n1)) {
      matches.push(rule121);
    }
    else if (s == 0) {
      matches.push(rule119);
    }
    else {
      let p1 = text.charAt(s - 1);
      if (isVowel(p1) && isVowel(n1))
        matches.push(rule120);
      else
        matches.push(rule119);
    }
    s = text.indexOf('s', s + 1);
  }
});
rules.push((text, matches) => {
  let t = text.indexOf('t');
  while (t != -1) {
    let n1 = text.charAt(t + 1);
    if (n1 == 't')
    {
      // swallow one 't'
    }
    else if (n1 == 'c' && text.charAt(t + 2) == 'h')
    {
      matches.push(rule129);
    }
    else if (n1 == 'h')
    {
      matches.push(rule130);
    }
    else if (n1 == 'i' && isVowel(text.charAt(t + 2)))
    {
      let p1 = text.charAt(t - 1);
      if (t == 0 || p1 == 's' || p1 == 'x')
        matches.push(rule131);
      else
        matches.push(rule132);
    }
    else if (isWhitespace(n1))
    {
      matches.push(rule128);
    }
    else
    {
      matches.push(rule127);
    }
    t = text.indexOf('t', t + 1);
  }
});
rules.push((text, matches) => {
  let u = text.indexOf('u');
  while (u != -1) {
    let n1 = text.charAt(u + 1);
    let n2 = text.charAt(u + 2);
    if (n1 == 'e')
    {
      if (isWhitespace(n2))
        matches.push(rule137);
      else
        matches.push(rule136);
    }
    else if ((n1 == 'm' || n1 == 'n') && (isWhitespace(n2) || isConsonant(n2)))
    {
      matches.push(rule138);
    }
    else if (n1 == 'y')
    {
      matches.push(rule139);
    }
    else if (isVowel(n1))
    {
      matches.push(rule134);
    }
    else
    {
      matches.push(rule133);
    }
    u = text.indexOf('u', u + 1);
  }
});
rules.push((text, matches) => {
  let ü = text.indexOf('ü');
  while (ü != -1) {
    let n1 = text.charAt(ü + 1);
    if (n1 == 'e')
    {
      let n2 = text.charAt(ü + 2);
      if (isWhitespace(n2))
        matches.push(rule137);
      else
        matches.push(rule136);
    }
    ü = text.indexOf('ü', ü + 1);
  }
});
rules.push((text, matches) => {
  let x = text.indexOf('x');
  while (x != -1) {
    let n1 = text.charAt(x + 1);
    if (isWhitespace(n1))
    {
      matches.push(rule144);
    }
    else if (n1 == 'c')
    {
      let n2 = text.charAt(x + 2);
      if (isEIY(n2))
        matches.push(rule145);
      else
        matches.push(rule146);
    }
    else if (x == 0 || isConsonant(n1) || isSilentEnding(text.substr(x + 1)))
    {
      matches.push(rule142);
    }
    else
    {
      matches.push(rule143);
    }
    x = text.indexOf('x', x + 1);
  }
});
rules.push((text, matches) => {
  let y = text.indexOf('y');
  while (y != -1) {
    let n1 = text.charAt(y + 1);
    let n2 = text.charAt(y + 2);
    if ((n1 == 'm' || n1 == 'n') && (isWhitespace(n2) || isConsonant(n2)))
    {
      matches.push(rule150);
    }
    else if (isVowel(n1))
    {
      matches.push(rule148);
    }
    else
    {
      matches.push(rule147);
    }
    y = text.indexOf('y', y + 1);
  }
});
rules.push((text, matches) => {
  let z = text.indexOf('z');
  while (z != -1) {
    let n1 = text.charAt(z + 1);
    if (isWhitespace(n1))
      matches.push(rule152);
    else
      matches.push(rule151);
    z = text.indexOf('z', z + 1);
  }
});

function filterReadingRules(text) {
  $('#reading-rules tr:not(:first-child)').toggle(true).children().removeClass('table-primary');
  if (text.length == 0)
    return;

  let matches = [];
  rules.forEach(rule => {
    rule(text, matches);
  });
  $('#reading-rules tr:not(:first-child)').filter((index, row) => {
    const match = matches.indexOf(index) != -1;
    $(row).toggle(match);
    return match;
  }).children().addClass('table-primary');
}

let prevText = '';
export function searchHandler(text) {
  text = text.trim();
  if (prevText == text)
    return;
  prevText = text;
  filterAlphabet(text);
  filterDiacritics(text);
  filterLigatures(text);
  filterReadingRules(text);
};