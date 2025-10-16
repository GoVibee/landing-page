import { signIn,signup } from "@/utils/api"


export const useAuth = () => {

    const SignUp = async(data: any) => {
        const response = await signup(data);
        const responseData = await response?.json();  

        return responseData; 
    }

    const Login = async(data: any) => {
        const response = await signIn(data);
        const responseData = await response?.json(); 
        if(responseData.token){
            localStorage.setItem("token", responseData.token);
        } 
        return responseData;
    }

    const Logout = async() => {
        localStorage.removeItem('token');
    }

    return {
        Login,
        SignUp,
        Logout
    }
}
