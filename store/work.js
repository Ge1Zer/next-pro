import {observable, action} from 'mobx';
import 'mobx-react-lite/batchingForReactDom'

export default class Work {
    @observable work=[];

    @action getListWork() {
        fetch( '/api/work',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(r =>r.json())
            .then(t=>{
                this.work = t

            })
        // функция отправляет слово ворд на сервер и проверяет оно или нет , ответ приходит со статусом и сообщением
    }

}


