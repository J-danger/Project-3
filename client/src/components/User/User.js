import { useAuth0 } from "../../react-auth0-spa";

const UserName = () => {
    const { user } = useAuth0();

    return(
        user.name
    )

}

export default UserName