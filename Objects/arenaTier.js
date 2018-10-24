function arenaTier(arr) {
    let gladiators = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Ave Cesar")
            break;

        let arg = String(arr[i]).split(/->|vs/gm).map(x => x.trim());

        //if we need to add gladiator
        if (arg.length === 3) {
           gladiators = fillArena(gladiators,arg);
        } else {
            gladiators = fight(gladiators,arg);
        }
    }

    let getTotalSkill = function (gladiator){
        return [...gladiators.get(gladiator)
            .values()]
            .reduce((acc,skill) => acc + skill);
    };

    //sorting
    let sortedGladiatorsNames = [...gladiators.keys()]
        .sort((a,b) => {
            let bTotalSkill = getTotalSkill(b);
            let aTotalSkill = getTotalSkill(a);

            if(aTotalSkill === bTotalSkill){
                return a.localeCompare(b);
            }

            return bTotalSkill - aTotalSkill;
        });

    sortedGladiatorsNames.forEach(currentGladiator =>{

        console.log(`${currentGladiator}: ${getTotalSkill(currentGladiator)} skill`);

        let skills = [...gladiators.get(currentGladiator).keys()]
            .sort((a,b) => {
                let aSkill = gladiators.get(currentGladiator).get(a);
                let bSkill = gladiators.get(currentGladiator).get(b);

                if(aSkill === bSkill){
                    return a > b;
                }

                return bSkill - aSkill;

            })
            .forEach(currentSkill => console.log(`- ${currentSkill} <!> ${gladiators.get(currentGladiator).get(currentSkill)}`));

    });


    function fillArena(gladiators,arg){
        let gladiator = arg[0];
        let technique = arg[1];
        let skill = +arg[2];

        //if gladiator not exists
        if (!gladiators.has(gladiator)) {
            let techniques = new Map();
            gladiators.set(gladiator, techniques);
        }

        //if technique not exists
        if (!gladiators.get(gladiator).has(technique)) {
            let techniques = gladiators.get(gladiator);
            techniques.set(technique, skill);

            gladiators.set(gladiator, techniques);
        } else {
            if (gladiators.get(gladiator).get(technique) < skill) {
                gladiators.set(gladiator, gladiator.get(gladiator).set(technique, skill));
            }
        }

        return gladiators;
    }

    function fight(gladiators,arg){
        let attacker = arg[0];
        let opponent = arg[1];

        if(gladiators.has(attacker) && gladiators.has(opponent)){
            let commonSkills = [...gladiators.get(attacker).keys()]
                .filter(skill => [...gladiators.get(opponent).keys()].includes(skill));

            if(commonSkills.length > 0){
                let attackerPoints = 0;
                let opponentPoints = 0;

                commonSkills.forEach(currentSkill => {
                    attackerPoints += gladiators.get(attacker).get(currentSkill);
                    opponentPoints += gladiators.get(opponent).get(currentSkill);
                });

                /////WHAT will HAPPEN IS POINTS IN EQUAL????? I DON'T HAVE INFO !!!!!//////////
                if(attackerPoints > opponentPoints){
                    gladiators.delete(opponent);
                } else if (opponentPoints > attackerPoints){
                    gladiators.delete(attacker);
                }
            }
        }

        return gladiators;
    }
}


// arenaTier(["Pesho -> Duck -> 400",
//     "Julius -> Shield -> 150",
//     "Gladius -> Heal -> 200",
//     "Gladius -> Support -> 250",
//     "Gladius -> Shield -> 250",
//     "Pesho vs Gladius",
//     "Gladius vs Julius",
//     "Gladius vs Gosho",
//     "Ave Cesar"]);

arenaTier(["Pesho -> BattleCry -> 400",
"Gosho -> PowerPunch -> 300",
"Stamat -> Duck -> 200",
"Stamat -> Tiger -> 250",
"Ave Cesar"])