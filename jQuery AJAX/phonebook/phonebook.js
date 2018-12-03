$(function () {
    const baseUrl = "https://phonebook-e3cad.firebaseio.com/Phonebook";

    $("#btnLoad").click(loadContacts);

    $("#btnCreate").click(createContact);

    function createContact() {
        let contactObj = {
            person: $("#person").val(),
            phone: $("#phone").val()
        };

        $.post(baseUrl + ".json",JSON.stringify(contactObj))
            .then(loadContacts)
            .fail(displayError);
    }

    function loadContacts() {
        $("#phonebook").empty();

        $.get(baseUrl + ".json")
            .then(displayContacts)
            .fail(displayError);
    }

    function displayContacts(data) {
        let keys = Object.keys(data);

        //want to remove it without GET request again
        for (let key of keys) {
            let deleteBtn = $("<a>")
                .attr("href", "#")
                .text("[Delete]")
                .click(removeContact.bind(this,key));

            $("#phonebook").append(
                $("<li>")
                    .text(data[key].person + ": " + data[key].phone + " ")
                    .append(deleteBtn)
            );
        }
    }

    function removeContact(key) {
        $.ajax({
            url: baseUrl + "/" + key + ".json",
            type: "DELETE",
            success: loadContacts
        });
    }

    function displayError(response, typeOfError, message) {
        $("#phonebook").append(
            $("<li>").text(
                typeOfError.charAt(0).toUpperCase() + typeOfError.substring(1) + ": " + response.status + " " + message
            ).css("color", "red")
        )
    }
});