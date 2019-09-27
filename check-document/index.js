const checkDocument = (strDocument) => {
    // Check '' (empty string), undefined, boolean, 0 or null
    if (!strDocument) return false

    // Check length
    if (!(strDocument.length === 11 || strDocument.length === 14)) return false

    // Check CPF
    if (strDocument.length === 11) {
      var sum
      var excess
      sum = 0
      if (strDocument == "00000000000" ||
        strDocument == "01234567890" ||
        strDocument == "11111111111" ||
        strDocument == "22222222222" ||
        strDocument == "33333333333" ||
        strDocument == "44444444444" ||
        strDocument == "55555555555" ||
        strDocument == "66666666666" ||
        strDocument == "77777777777" ||
        strDocument == "88888888888" ||
        strDocument == "99999999999")
        return false

      for (let i = 1; i <= 9; i++) sum = sum + parseInt(strDocument.substring(i - 1, i)) * (11 - i)
      excess = (sum * 10) % 11

      if ((excess == 10) || (excess == 11))  excess = 0
      if (excess != parseInt(strDocument.substring(9, 10)) ) return false

      sum = 0
      for (let i = 1; i <= 10; i++) sum = sum + parseInt(strDocument.substring(i-1, i)) * (12 - i)
      excess = (sum * 10) % 11

      if ((excess == 10) || (excess == 11)) excess = 0
      if (excess != parseInt(strDocument.substring(10, 11) ) ) return false
    }

    // Check CNPJ
    if (strDocument.length === 14) {
      let cnpj = strDocument.replace(/[^\d]+/g,'')

      if(cnpj == '') return false

      if (cnpj == "00000000000000" ||
          cnpj == "11111111111111" ||
          cnpj == "22222222222222" ||
          cnpj == "33333333333333" ||
          cnpj == "44444444444444" ||
          cnpj == "55555555555555" ||
          cnpj == "66666666666666" ||
          cnpj == "77777777777777" ||
          cnpj == "88888888888888" ||
          cnpj == "99999999999999")
          return false

      let size = cnpj.length - 2
      let numbers = cnpj.substring(0,size)
      let digits = cnpj.substring(size)
      let sum = 0
      let pos = size - 7
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--
        if (pos < 2)
              pos = 9
      }
      let result = sum % 11 < 2 ? 0 : 11 - sum % 11
      if (result != digits.charAt(0))
          return false

      size = size + 1
      numbers = cnpj.substring(0,size)
      sum = 0
      pos = size - 7
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--
        if (pos < 2)
              pos = 9
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11
      if (result != digits.charAt(1))
        return false

      return true
    }

    return true
}

module.exports = checkDocument