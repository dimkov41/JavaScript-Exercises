function usernames(arr){
    let usernames = new Set();

    arr.forEach(x => usernames.add(x));

    Array.from(usernames).sort((a,b) => sortUsernames(a,b)).forEach(x => console.log(x))

    function sortUsernames(a,b){
        if(a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b);
    }


}
usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);