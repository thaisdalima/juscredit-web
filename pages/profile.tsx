import { auth } from "../utils/auth"
import JwtDecode from 'jwt-decode'
import Profile from "../containers/Profile/Profile"


const ProfilePage = ({ data, model }) => {


    return <Profile data={data} model={model} />

}

ProfilePage.getInitialProps = async (ctx) => {
    const token = auth(ctx)
    if (token) {
        const { type, refId } = JwtDecode(token)



        const res = await fetch(`${process.env.API_URL}/api/${type}/${refId}`)
        const data = await res.json();
        return { data, model: type }
    }
    return {}
}

export default ProfilePage;