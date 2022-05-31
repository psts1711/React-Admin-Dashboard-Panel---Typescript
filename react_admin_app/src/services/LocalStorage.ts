export class localStorageServices{
    private static readonly User = 'user';

    static setUser(userData: object){
        localStorage.setItem(localStorageServices.User, JSON.stringify({userData}));
    }

    static getUser(){
        try {
            const response:any = localStorage.getItem(localStorageServices.User)
            return JSON.parse(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static clearUser(){
        return localStorage.removeItem(localStorageServices.User)
    }
}