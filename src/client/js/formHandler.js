function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    apiRun(formText)
    .then((apiData)=>{
        console.log(apiData)
        const agreement = document.getElementById(agreement)
        const confidence = document.getElementById(confidence)
        const irony = document.getElementById(irony)

        agreement.innerHTML = apiData.agreement
        confidence.innerHTML = apiData.confidence
        irony.innerHTML = apiData.irony
    })
}

const apiRun = async (formText)=> {
    console.log(formText);
    console.log('working');
    const req = await fetch(`http://localhost:8081/api/${formText}`)
    console.log(req);
    try { 
        const apiData = await req.json()
        // console.log(apiData)
        return apiData
    } catch(e) {
        console.log('error', e);
    }
// .then(res => {
//     return res.json()
// })
// .then(function(data) {
//     document.getElementById('results').innerHTML = data.message
// })}
}

export { handleSubmit, apiRun }

/*
, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formText)
    }
*/
