// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A2_T10;
 * @section: 15.1.2.3;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: USP;
*/

//CHECK#
count = 0;
errorCount = 0;
uspU = ["\u1680", "\u180E", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200A", "\u202F", "\u205F", "\u3000"]
uspS = ["1680", "180E", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "200A", "202F", "205F", "3000"]
for (index = 0; index < uspU.length; index++) {
  var result = true;  
  if (parseFloat(uspU[index] + "1.1") !== parseFloat("1.1")) {
    $ERROR('#1.' +  uspS[index] + ' ');
    result = false;
  }
   if (parseFloat(uspU[index] + uspU[index] + uspU[index] + "1.1") !== parseFloat("1.1")) {
    $ERROR('#2.' +  uspS[index] + ' ');
    result = false;
  }
  if (isNaN(parseFloat(uspU[index])) !== true) {
    $ERROR('#3.' +  uspS[index] + ' ');
    result = false;
  }
  if (result !== true) {
      errorCount++;
  }
  count++;
}

if (errorCount > 0) {  
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
}
