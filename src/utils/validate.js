const checkValidation = (data)=>{
    const isEmailValid = /.+@[^@]+\.[^@]{2,}$/.test(data.email)
    const isPasswordValid =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(data.password)
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null
}
export default checkValidation;