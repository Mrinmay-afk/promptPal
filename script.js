const input = document.getElementById('topicInput');
const button = document.getElementById('aiBtn');
const res = document.getElementById('response');
button.addEventListener('click', async () =>{
    if (input.value.trim() === ''){
        alert('Please enter a topic.');
        return;
    }else{
       const response = await fetch('http://localhost:3000/api/explain',{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({topic: input.value})
        })
        const data = await response.json();
        res.textContent = data.message;
    }
})
