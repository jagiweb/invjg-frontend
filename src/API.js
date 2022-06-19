const baseURL = "http://localhost:3001"

//////////// ADMIN //////////////
const signInURL = `${baseURL}/admin/signin`
const validateURL = `${baseURL}/admin/validate`
/////// GET REQUEST WITH TOKEN /////

const get = (url, token) => {
    return token ? fetch(url, { method: "GET", headers: { "Authorization": `${token}` } }) : fetch(url)
}

const post = (url, object) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"},
        body: JSON.stringify(object)
    }
    return fetch(url, configurationObject)
}

const destroy = (url, id) => {
    const configurationObject = {
        method: "DELETE"
    }
    return fetch(`${url}/${id}`, configurationObject)
}

const patch = (url, id, object) => {
    const configurationObject = {
        method: "PATCH",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(object)
    }
    return fetch(`${url}/${id}`, configurationObject)
}

/////////// SIGN IN AND VALIDATE ///////////

const signIn = data => {
    return post(signInURL, data).then(response => response.json())
}

const validate = token => {
    return get(validateURL, token).then(response => response.json())
}

const exports = {
    signIn,
    validate
}

export default exports