document.getElementById("loadBtn").addEventListener("click", fetchPosts);

function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        let container = document.getElementById("postContainer");
        container.innerHTML = ""; // Clear previous data
        data.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `
                <h3>${post.name}</h3>
                <p><strong>Email:</strong> ${post.email}</p>
                <p>${post.body}</p>
            `;
            container.appendChild(postDiv);
        });
    })
    .catch(error => {
        document.getElementById("postContainer").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}
