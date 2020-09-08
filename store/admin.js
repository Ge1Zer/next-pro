import {observable, action} from 'mobx';

export  default class Admin{

    @observable status=false
    @observable massage= {text:''}
    @observable word= ''


    @action enterPortfolio(elem) {
        fetch( 'http://localhost:3000/api/login',{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Credentials':true
            },
            body: JSON.stringify({login:elem})
        }).then(r =>r.json())
            .then(t=>{
                // console.log(t)
                this.status = t.status;
                this.massage=t.text
            })
        // функция отправляет слово ворд на сервер и проверяет оно или нет , ответ приходит со статусом и сообщением
    }
    @action exitPortfolio() {
        //просто функция которая будет отправлять выход
    }
}

