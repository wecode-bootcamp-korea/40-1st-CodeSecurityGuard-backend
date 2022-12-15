const emailValidator = (email) => {
    const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

    if(!EMAIL_REGEX.test(email)){
        throw new Error("emailRegexErr")
    }
}

const passwordValidator = (password) => {
   const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

   if(!PASSWORD_REGEX.test(password)){
       throw new Error("passwordRegexErr")
   }
}

module.exports = {
    emailValidator,
    passwordValidator
}