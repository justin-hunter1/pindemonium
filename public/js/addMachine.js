function renderAddMachineForm() {
    const addMachineForm = document.querySelector('#addMachine');
    addMachineForm.style.display = addMachineForm.style.display === 'none' ? '' : 'none';
}

const addMachineHandler = async (event) => {
    event.preventDefault();
    const mname = document.querySelector('#machineName').value.trim();
    if (machineName) {
        const response = await fetch('/api/machines/', {
            method: 'POST',
            body: JSON.stringify({ mname }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#addMachineBtn').addEventListener('click', renderAddMachineForm);
document.querySelector('#addMachine').addEventListener('submit', addMachineHandler);