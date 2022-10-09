let textField = document.querySelector('.text-field');
const key = document.querySelectorAll('.key');
const row = document.querySelectorAll('.row');
const caps = document.querySelector('.caps');
const shift = document.querySelector('.shift');

var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var zero = document.querySelector('.zero');
var minus = document.querySelector('.minus');
var equal = document.querySelector('.equal');
var leftBracket = document.querySelector('.leftBracket');
var rightBracket = document.querySelector('.rightBracket');
var backslash = document.querySelector('.backslash');
var semicolon = document.querySelector('.semicolon');
var apostrophe = document.querySelector('.apostrophe');
var comma = document.querySelector('.comma');
var period = document.querySelector('.period');
var forwardslash = document.querySelector('.forwardslash');

key.forEach((key) => {
  let keyText = key.textContent;
  key.addEventListener('click', () => {
    if (key.classList.contains('caps')) {
      row.forEach((row) => {
        row.classList.toggle('uppercase');
        caps.classList.toggle('active');
        keyText = '';
      });
    }

    if (key.classList.contains('shift')) {
      row.forEach((row) => {
        row.classList.toggle('uppercase');
        shift.classList.toggle('active');
        keyText = '';
      });
    }

    if (key.classList.contains('backspace')) {
      keyText = '';
      if (textField.value.length > 0) {
        textField.value = textField.value.substring(
          0,
          textField.value.length - 1
        );
      }
    }

    if (
      caps.classList.contains('active') ||
      shift.classList.contains('active')
    ) {
      one.textContent = '!';
      two.textContent = '@';
      three.textContent = '#';
      four.textContent = '$';
      five.textContent = '%';
      six.textContent = '^';
      seven.textContent = '&';
      eight.textContent = '*';
      nine.textContent = '(';
      zero.textContent = ')';
      minus.textContent = '_';
      equal.textContent = '+';
      leftBracket.textContent = '{';
      rightBracket.textContent = '}';
      backslash.textContent = '|';
      semicolon.textContent = ':';
      apostrophe.textContent = '"';
      comma.textContent = '<';
      period.textContent = '>';
      forwardslash.textContent = '?';

      if (key.classList.contains('one')) {
        keyText = '!';
      }
      if (key.classList.contains('two')) {
        keyText = '@';
      }
      if (key.classList.contains('three')) {
        keyText = '#';
      }
      if (key.classList.contains('four')) {
        keyText = '$';
      }
      if (key.classList.contains('five')) {
        keyText = '%';
      }
      if (key.classList.contains('six')) {
        keyText = '^';
      }
      if (key.classList.contains('seven')) {
        keyText = '&';
      }
      if (key.classList.contains('eight')) {
        keyText = '*';
      }
      if (key.classList.contains('nine')) {
        keyText = '(';
      }
      if (key.classList.contains('zero')) {
        keyText = ')';
      }
      if (key.classList.contains('minus')) {
        keyText = '_';
      }
      if (key.classList.contains('equal')) {
        keyText = '+';
      }
      if (key.classList.contains('leftBracket')) {
        keyText = '{';
      }
      if (key.classList.contains('rightBracket')) {
        keyText = '}';
      }
      if (key.classList.contains('backslash')) {
        keyText = '|';
      }
      if (key.classList.contains('semicolon')) {
        keyText = ':';
      }
      if (key.classList.contains('apostrophe')) {
        keyText = '"';
      }
      if (key.classList.contains('comma')) {
        keyText = '<';
      }
      if (key.classList.contains('period')) {
        keyText = '>';
      }
      if (key.classList.contains('forwardslash')) {
        keyText = '?';
      }
    } else if (!caps.classList.contains('active')) {
      one.textContent = '1';
      two.textContent = '2';
      three.textContent = '3';
      four.textContent = '4';
      five.textContent = '5';
      six.textContent = '6';
      seven.textContent = '7';
      eight.textContent = '8';
      nine.textContent = '9';
      zero.textContent = '0';
      minus.textContent = '-';
      equal.textContent = '=';
      leftBracket.textContent = '[';
      rightBracket.textContent = ']';
      backslash.textContent = '\\';
      semicolon.textContent = ';';
      apostrophe.textContent = "'";
      comma.textContent = ',';
      period.textContent = '.';
      forwardslash.textContent = '/';

      if (key.classList.contains('one')) {
        keyText = '1';
      }
      if (key.classList.contains('two')) {
        keyText = '2';
      }
      if (key.classList.contains('three')) {
        keyText = '3';
      }
      if (key.classList.contains('four')) {
        keyText = '4';
      }
      if (key.classList.contains('five')) {
        keyText = '5';
      }
      if (key.classList.contains('six')) {
        keyText = '6';
      }
      if (key.classList.contains('seven')) {
        keyText = '7';
      }
      if (key.classList.contains('eight')) {
        keyText = '8';
      }
      if (key.classList.contains('nine')) {
        keyText = '9';
      }
      if (key.classList.contains('zero')) {
        keyText = '0';
      }
      if (key.classList.contains('minus')) {
        keyText = '-';
      }
      if (key.classList.contains('equal')) {
        keyText = '=';
      }
      if (key.classList.contains('leftBracket')) {
        keyText = '[';
      }
      if (key.classList.contains('rightBracket')) {
        keyText = ']';
      }
      if (key.classList.contains('backslash')) {
        keyText = '\\';
      }
      if (key.classList.contains('semicolon')) {
        keyText = ';';
      }
      if (key.classList.contains('apostrophe')) {
        keyText = "'";
      }
      if (key.classList.contains('comma')) {
        keyText = ',';
      }
      if (key.classList.contains('period')) {
        keyText = '.';
      }
      if (key.classList.contains('forwardslash')) {
        keyText = '/';
      }
    }

    if (key.classList.contains('clear')) {
      keyText = '';
      textField.value = keyText.slice(0);
    }

    if (key.classList.contains('enter')) {
      keyText = '\n';
    }

    if (key.classList.contains('space')) {
      keyText = ' ';
    }

    if (key.classList.contains('tab')) {
      keyText = '\t';
    }

    if (caps.classList.contains('active')) {
      textField.value += keyText.toUpperCase();
    } else if (shift.classList.contains('active')) {
      shiftNum = 1;
      if (shiftNum == 1 && key) {
        if (shift != key) {
          textField.value += keyText.toUpperCase();
          shiftNum = 0;
          row.forEach((row) => {
            shift.classList.remove('active');
            row.classList.remove('uppercase');

            if (!row.classList.contains('uppercase')) {
              one.textContent = '1';
              two.textContent = '2';
              three.textContent = '3';
              four.textContent = '4';
              five.textContent = '5';
              six.textContent = '6';
              seven.textContent = '7';
              eight.textContent = '8';
              nine.textContent = '9';
              zero.textContent = '0';
              minus.textContent = '-';
              equal.textContent = '=';
              leftBracket.textContent = '[';
              rightBracket.textContent = ']';
              backslash.textContent = '\\';
              semicolon.textContent = ';';
              apostrophe.textContent = "'";
              comma.textContent = ',';
              period.textContent = '.';
              forwardslash.textContent = '/';
            }
          });
        }
      }
    } else {
      textField.value += keyText;
    }
  });
});

textField.value = '';
