class Extensible {
    id = 0;
    constructor() {
        if( typeof Extensible.prototype.id === 'undefined') Extensible.prototype.id = 0;
        else Extensible.prototype.id += 1;
        this.id = Extensible.prototype.id;
    }

    extend(template){
        for(const key in template){
            let value = template[key];
            if( typeof value === "function" ){
                Extensible.prototype[key] = value;
                delete template[key];
            }
        }
        Object.assign(this, template);
        console.log(this);
    }
}