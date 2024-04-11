const addMachineHandler = async (event) => {
    event.preventDefault();
    const machineName = document.querySelector('#machine-name');
    if (machineName) {
        const response = await fetch('/api/machines/', {
            method: 'POST',
            body: JSON.stringify({ machineName }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#add-machine').addEventListener('submit', addMachineHandler);