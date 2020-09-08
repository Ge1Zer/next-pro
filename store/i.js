import {observable, action} from 'mobx';

export  default class I {

    @observable status=false

    @action ChangeStatus() {
        this.status=!this.status
    }
}





