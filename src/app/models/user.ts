export interface User {
    id?: number;
    Nom: string;
    Prenom: string;
    login: string;
    username: string;
    password: string;
    Is_Active: boolean;
    
    token?: string;
}
