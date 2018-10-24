function systemComponents(arr){
    let components = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [system,component,subComponent] = String(arr[i]).split("|").map(y => y.trim());

        if(components.has(system)){
            if(components.get(system).has(component)){

                components.get(system).get(component).push(subComponent);

            } else {
                components.get(system).set(component,[subComponent]);
            }

        } else {
            let componentMap = new Map();

            componentMap.set(component,[subComponent]);
            components.set(system,componentMap);
        }
    }

    let sortedSystems = Array.from(components.keys())
        .sort()
        .sort((a,b) => components.get(b).size - components.get(a).size);

    for (let currentSystem of sortedSystems) {
        console.log(currentSystem);

        let sortedComponents = Array.from(components.get(currentSystem).keys())
            .sort((a,b) => components.get(currentSystem).get(b).length - components.get(currentSystem).get(a).length);

        sortedComponents.forEach(currentComponent => {

            console.log(`|||${currentComponent}`);

            components.get(currentSystem).get(currentComponent).forEach(subComp => console.log(`||||||${subComp}`));
        })

    }
}


systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',]);