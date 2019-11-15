import { useAuth0 } from "../../react-auth0-spa";

const User = () => {
    const { user } = useAuth0();
    return(
        user.name
        )
}

export default User