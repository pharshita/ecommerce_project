import axios from "axios"

export const signupUser = (obj , navigate)=>{
    return(dispatch)=>{
        axios.post("http://localhost:5000/user/signup",obj)
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })
    }
}

export const signinUser = (obj,navigate)=>{
    return(dispatch)=>{
        axios.post('http://localhost:5000/user/signin', obj)
        .then((res) => {
            localStorage.setItem('auth', JSON.stringify(res.data))
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }
}
