import request from 'superagent';

const URL = 'https://true-bunnyhug-20153.herokuapp.com';


export async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password
        })
    return data.body.token
}

export async function login() {
    const data = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: this.state.email,
            password: this.state.password
        })
    return data.body.token
}

export async function getToDos(token) {
    const data = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)
    return data.body
}

export async function addToDo(todo_item, token) {
    const data = await request
        .post(`${URL}/api/todos`)
        .send({
            todo_item: todo_item,
        })
    .set('Authorization', token)
    return data.body
}

export async function completeToDo(id, token) {
    const data = await request
        .put(`${URL}/api/todos/${id}`)
        .set('Authorization', token)
    return data.body
}