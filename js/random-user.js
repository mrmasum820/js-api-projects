const loadData = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayData(data.results))
}

const displayData = users => {
    // console.log(users);
    const usersContainer = document.getElementById('container');
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <h3>Name: ${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email} </p>
            <p>Phone: ${user.phone}</p>
            <p>Date Of Birth: ${user.dob.date}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
        `
        usersContainer.appendChild(div);
    }
}

loadData();