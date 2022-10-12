const getNewUser = () =>{
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => lodData(data.results[0]))
}

const lodData = userInfo =>{
    const randomUser = document.getElementById('random-user');
    randomUser.innerHTML= '';
    // console.log(userInfo);
    const newDiv = document.createElement('div');
    newDiv.classList.add('frame');
    newDiv.innerHTML = `
    <div class="card">
        <div class="details">
            <div class="user_photo horizontal_center">
                <img src="${userInfo.picture.large}" alt="">
            </div>
        </div>
    </div>
    <div class="text">
        <p><span>Name: </span>${userInfo.name.title + ' ' + userInfo.name.first + ' ' + userInfo.name.last}</p>
        <p><span>Gender: </span>${userInfo.gender}</p>
        <p><span>Phone: </span>${userInfo.phone}</p>
        <p><span>Email: </span>${userInfo.email}</p>
        <p><span>Address: </span>${userInfo.location.street.number + ' ' + userInfo.location.street.name}, ${userInfo.location.state}, ${userInfo.location.city}, ${userInfo.location.country}</p>
        <p><span>Birthday: </span>${userInfo.dob.date.slice(0, 10)}</p>
    </div>
    <div class="next-button">
        <button onclick="getNewUser()">Next</button>
    </div>
    `
    randomUser.appendChild(newDiv);
}
getNewUser();