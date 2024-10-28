let data_users_tag = document.getElementById("data_users");

fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(user => {
      data_users_tag.innerHTML += `
        <tr>
          <td>
            <div class="row">
              <div class="col-md-2">
                <img src="${user.picture.large}" class="img-fluid">
              </div>
              <div class="col-md-10">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p class="text-muted">
                  ${user.location.street.name} ${user.location.street.number}
                  <br>
                  ${user.email}
                  <br>
                  ${user.phone}
                </p>
              </div>
            </div>
          </td>
          <td>
            <button class="btn btn-info">Detail</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>`;
    });
  })