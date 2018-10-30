function personalBMI(name,age,weight,height){
    let obj = {
        name,
        personalInfo:{
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: (Math.round(weight) / (Math.round(height) / 100)) / (Math.round(height) / 100),
        status: ""
    };

    obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" : obj.BMI < 30 ? "overweight" : "obese";
    obj.BMI = Math.round(obj.BMI);

    if(obj.status === "obese"){
        obj.recommendation = "admission required";
    }

    return obj;
}

personalBMI("Peter", 29, 75, 182);