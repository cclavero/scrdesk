
export class StorageService {

    put = (id, obj) => {
        sessionStorage.setItem(id, JSON.stringify(obj));
    };
    
    get = (id) => {
        const obj = sessionStorage.getItem(id);
        if (obj != null) {
            return JSON.parse(obj);
        }
        return null;
    };

    clear = (id, obj) => {
        sessionStorage.clear();
    };

}
