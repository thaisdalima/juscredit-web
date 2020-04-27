import PasswordForm from "../../../components/Register/PasswordForm/PasswordForm";
import JwtDecode from 'jwt-decode'
import Router from "next/router";

const redirectToHome = (res) => {
    if (res) {
        res.writeHead(302, { Location: '/' })
        res.end()
        res.finished = true
    } else {
        Router.push('/')
    }
}
const PasswordCreation = ({ user, token }) => {


    return (
        <PasswordForm user={user} token={token}></PasswordForm>
    )


}

PasswordCreation.getInitialProps = async ({ res, query }) => {
    const { token } = query
    try {
        const user: any = JwtDecode(token);
        if (!user) {
            redirectToHome(res)

        }
        return { user, token }
    }
    catch (e) {
        redirectToHome(res)
    }
}
export default PasswordCreation
