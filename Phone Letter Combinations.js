
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Alternative Text

Examples
letter_combinations("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

letter_combinations("532") ➞ ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]

*/

const letterCombinations = n => {
    const keys = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
    const combo = (r,k) => r.reduce((r,e) => [...r, ...r.map(x => [...x, e])], [[]])
      .filter(e => e.length == k)
    return combo([...n].reduce((a, b) => [...a, ...keys[b]], []), n.length).sort()
      .reduce((c, e) => RegExp([...n].reduce((a,x) => a + `[${keys[x]}]`, '^'), 'g')
      .test(e.join('')) ? [...c, e.join('')]: c, [])
  }

  