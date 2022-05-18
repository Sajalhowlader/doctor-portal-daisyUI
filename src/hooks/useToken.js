import { useEffect, useState } from "react"

const useToken = user => {

    const [token, setToken] = useState('')
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email
        const userEmail = { email: email }
        if (email) {
            fetch(`https://protected-bayou-31346.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token
                    console.log(accessToken);
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken);

                })
        }
    }, [user])
    return [token]
}
export default useToken;