const baseURL = "http://localhost:3001"
//////////// ADMIN //////////////
const signInURL = `${baseURL}/admin/signin`
const validateURL = `${baseURL}/admin/validate`
const getMenuURL = `${baseURL}/admin/get_menu`
//////////// COMPANY /////////////
const createCompanyURL = `${baseURL}/admin/company_create`
const adminCompaniesURL = `${baseURL}/admin/get_company`
//////////// SUPPLIER ////////////
const createSupplierURL = `${baseURL}/admin/supplier_create`
const companySuppliersURL = `${baseURL}/admin/get_supplier`
const companyAllSuppliersURL = `${baseURL}/admin/get_all_suppliers`


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

const getMenu = data => {
    return get(getMenuURL, data).then(response => response.json())
}

/////////// COMPANY /////////
const createCompany = data => {
    return post(createCompanyURL, data).then(response => response.json())
}

const getAdminCompanies = data => {
    return get(adminCompaniesURL, data).then(response => response.json())
}

//////////// SUPPLIER /////////

const createSupplier = data => {
    return post(createSupplierURL, data).then(response => response.json())
}

const getCompanySupplier = data => {
    return get(companySuppliersURL, data).then(response => response.json())
}

const getCompanyAllSuppliers = data => {
    return get(companyAllSuppliersURL, data).then(response => response.json())
}

const exports = {
    signIn,
    validate,
    createCompany,
    getAdminCompanies,
    createSupplier,
    getCompanySupplier,
    getCompanyAllSuppliers

}

export default exports