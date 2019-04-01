import { v4 } from "uuid";

export class User {
        id: string;
        name: string;
        email: string;
        password: string;

        constructor(id: string, name: string, email: string, password: string){
            if(id){
                this.id = id;
            }else {
                this.id = v4()
            }
            this.name = name;
            this.email = email;
            this.password = password;
        }
}