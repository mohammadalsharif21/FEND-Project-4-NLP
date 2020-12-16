function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    apiRun(formText)
    .then((apiData)=>{
        console.log(apiData);
        let agreement = document.getElementById('agreement')
        let confidence = document.getElementById('confidence')
        let irony = document.getElementById('irony')

        agreement.innerHTML = apiData.agreement
        confidence.innerHTML = apiData.confidence
        irony.innerHTML = apiData.irony
    })
}

const apiRun = async (formText)=> {
    const req = await fetch(`http://localhost:8081/api/${formText}`)
    try { 
        const apiData = await req.json()
        return apiData
    } catch(e) {
        console.log('error', e);
    }}
// .then(res => {
//     return res.json()
// })
// .then(function(data) {
//     document.getElementById('results').innerHTML = data.message
// })

document.querySelector('.form').addEventListener('submit', handleSubmit)

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
