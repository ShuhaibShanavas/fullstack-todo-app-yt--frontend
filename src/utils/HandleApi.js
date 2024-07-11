import axios from 'axios'

const baseUrl = "https://fullstack-todo-app-backend-kbzq.onrender.com"

const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    }) 
       
    
}

const addToDo = (text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) =>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsupdating) => {

    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) =>{
        setText("")
        setIsupdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) =>{

        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}


export {getAllToDo, addToDo, updateToDo, deleteToDo}