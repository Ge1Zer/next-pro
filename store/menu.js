import {observable, action, computed} from 'mobx';
import 'mobx-react-lite/batchingForReactDom'

export default class Menu {
    @observable menu=[];

    @computed get sortedMenu() {
        return this.menu.slice().sort( (a,b)=>a.id-b.id)
    }

    @action getListMenu() {
        fetch( `/api/libraryList`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(r =>r.json())
            .then(t=>{
                this.menu = t

            })
        // функция отправляет слово ворд на сервер и проверяет оно или нет , ответ приходит со статусом и сообщением
    }

}
