const myHeaders = new Headers();
myHeaders.append("Authorization", "App 3aac468e4415bfb232f019e7b0f9c3dc-286a4074-ac60-464f-ba2b-2fde9e404c2a");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
    "messages": [
        {
            "from": "447860089268",
            "to": "256773318456",
            "messageId": "32f50c02-6679-402d-8168-19dbc16a16b6",
            "content": {
                "templateName": "test_whatsapp_template_en",
                "templateData": {
                    "body": {
                        "placeholders": ["Fauza"]
                    }
                },
                "language": "en"
            }
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://d8kyql.api.infobip.com/whatsapp/1/message/template", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));