import {observable, action} from 'mobx';
import 'mobx-react-lite/batchingForReactDom'

export default class Menu {
    @observable menu=[];

    @action getListMenu() {
        fetch( `/api/libraryList`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(r =>r.json())
            .then(t=>{
                // console.log(t.sort( (a,b)=>a.id-b.id) )
                this.menu = t

            })
        // функция отправляет слово ворд на сервер и проверяет оно или нет , ответ приходит со статусом и сообщением
    }

}
