function attachEvents() {
    const baseUrl = "https://phonebook-e3cad.firebaseio.com/messenger";

    $("#refresh").click(showMessages);

    $("#submit").click(sendMessage);

    function showMessages() {
        $.get(baseUrl + ".json")
            .then(processData);
    }

    function processData(data) {
        let keys = Array.from(Object.keys(data))
            .sort((a, b) => a.timestamp - b.timestamp)
            .forEach(key => fillTextArea(key));

        function fillTextArea(key) {
            //if data exists && != undefined
            if (data[key]) {
                let message = data[key].author + ": " + data[key].content;

                let messages = $("#messages");
                messages.append(message + "\n");
            }
        }
    }

    function sendMessage() {
        let message = {
            author: $("#author").val(),
            content: $("#content").val()
        };

        $.post(baseUrl + ".json", JSON.stringify(message));
    }
}