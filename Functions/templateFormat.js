function templateFormat(input = []){
    let output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>\n";



    for (let i = 0; i < input.length; i+=2) {
        output += makeQuestion(input[i]);
        output += makeAnswer(input[i+1]);
    }


    return output += "</quiz>";


    function makeQuestion(question){
        return `    <question>\n        ${question}\n    </question>\n`;
    }
    function makeAnswer(answer) {
        return `    <answer>\n        ${answer}\n    </answer>\n`
    }
}