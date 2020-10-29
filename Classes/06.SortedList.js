class List{
    _arr = [];
    size = 0;

    add(element){
        if(typeof element !== 'undefined'){
            this._push(element);
            this.size++;
        }
    }

    get(index) {
        let value = this._arr[index];
        return value;
    }

    remove(index){
        if( index < 0 ) throw new Error("Index cannot be negative");
        if( index>=this._arr.length ) throw new Error("Out of bound");
        this._arr.splice(index,1);
        this.size--;
    }

    _push(element) {
        this._arr.push(element);
        this._arr.sort((a,b) => a-b);
    }
}