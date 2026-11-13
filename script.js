const input = document.getElementById('topicInput');
const button = document.getElementById('aiBtn');
const res = document.getElementById('response');
button.addEventListener('click', () =>{
    if (input.value.trim() === ''){
        alert('Please enter a topic.');
        return;
    }else{
        res.textContent = 'you are learning about ' + input.value;
    }
})

