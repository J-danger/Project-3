import { useAuth0 } from "../../react-auth0-spa";

const User = () => {
    const { user } = useAuth0();
    return(user.nickname)

}

export default User