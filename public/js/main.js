const deleteBtn = Array.from(document.querySelectorAll(".del")) //create array from elements with .del class, assign to deleteBtn variable

for(let button of deleteBtn) {
    button.addEventListener("click", deleteShow) //add event listener to all delete buttons
}

async function deleteShow() {
    const showId = this.parentElement.dataset.id
    try {
        const response = await fetch('log/delete-show', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'showIdFromJSFile': showId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err) {
        console.error(err)
    }
}
