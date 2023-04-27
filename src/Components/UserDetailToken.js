const addUserDetail = (response) => {
    localStorage.setItem('isAutehnticated', response.data.success);
    localStorage.setItem('address', response.data.data.address);
    localStorage.setItem('date', response.data.data.date);
    localStorage.setItem('date_of_birth', response.data.data.date_of_birth)
    localStorage.setItem('email', response.data.data.email);
    localStorage.setItem('first_name', response.data.data.first_name)
    localStorage.setItem('gender', response.data.data.gender);
    localStorage.setItem('home_phone', response.data.data.home_phone)
    localStorage.setItem('id', response.data.data.id)
    localStorage.setItem('last_name', response.data.data.last_name)
    localStorage.setItem('middle_name', response.data.data.middle_name)
    localStorage.setItem('mobile_phone', response.data.data.mobile_phone)
    localStorage.setItem('password', response.data.data.password)
    localStorage.setItem('personal_email', response.data.data.personal_email);
    localStorage.setItem('title', response.data.data.title);
    localStorage.setItem('work_extension', response.data.data.work_extension)
    localStorage.setItem('work_phone', response.data.data.work_phone)
    localStorage.setItem('name', response.data.data.first_name + ' ' + response.data.data.last_name);
}

const removeUserDetail = () => {
    localStorage.removeItem('isAutehnticated');
    localStorage.removeItem('address');
    localStorage.removeItem('date');
    localStorage.removeItem('date_of_birth')
    localStorage.removeItem('email');
    localStorage.removeItem('first_name')
    localStorage.removeItem('gender');
    localStorage.removeItem('home_phone')
    localStorage.removeItem('id')
    localStorage.removeItem('last_name')
    localStorage.removeItem('middle_name')
    localStorage.removeItem('mobile_phone')
    localStorage.removeItem('password')
    localStorage.removeItem('personal_email');
    localStorage.removeItem('title');
    localStorage.removeItem('work_extension')
    localStorage.removeItem('work_phone')
    localStorage.removeItem('name');
}

const getUserDetail = () => {

    const userDetail = {
        isAutehnticated: localStorage.getItem('isAutehnticated'),
        address: localStorage.getItem('address'),
        date: localStorage.getItem('date'),
        date_of_birth: localStorage.getItem('date_of_birth'),
        email: localStorage.getItem('email'),
        first_name: localStorage.getItem('first_name'),
        gender: localStorage.getItem('gender'),
        home_phone: localStorage.getItem('home_phone'),
        id: localStorage.getItem('id'),
        last_name: localStorage.getItem('last_name'),
        middle_name: localStorage.getItem('middle_name'),
        mobile_phone: localStorage.getItem('mobile_phone'),
        password: localStorage.getItem('password'),
        personal_email: localStorage.getItem('personal_email'),
        title: localStorage.getItem('title'),
        work_extension: localStorage.getItem('work_extension'),
        work_phone: localStorage.getItem('work_phone'),
        name: localStorage.getItem('name'),
    }

    return userDetail;
}

export { addUserDetail, removeUserDetail, getUserDetail }