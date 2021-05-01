function fetchData() {
    fetch('https://sheet.best/api/sheets/939bda51-f02b-4503-abdd-14f289d1b15c').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data
            .map(trail => {
                return `
                <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                    <img src="${trail.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${trail.trailname}</h5>
                         <p class="card-text">Trail Location: ${trail.location}</p>
                         <p class="card-text">Trail Category: ${trail.trailcategory}</p>
                         <p class="card-text">Trail Surface: ${trail.trailsurfaces}</p>
                         <p class="card-text">Allowed Activities: ${trail.activities}</p>
                         <a href="${trail.link}" target="_blank" class="btn btn-primary">More Details</a>
                         </div>
                    </div>
            `;
            })
            .join("")
        console.log(html)
        document.querySelector(".trailCard").insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error);
    });
}

fetchData();


{
    /* <p>Trail Name: ${trail.trailname}</p>
    <p>Trail Category: ${trail.trailcategory}</p> */
}