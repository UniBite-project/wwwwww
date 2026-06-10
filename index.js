let selectedRole = "student";

document.querySelectorAll(".role-tab").forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelectorAll(".role-tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        selectedRole = this.getAttribute("data-role");
    });
});

function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Κλήση στο PHP API
    try {
        const response = await fetch('api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role: selectedRole })
        });
        
        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem("unibite_user", data.user.username);
            localStorage.setItem("unibite_user_id", data.user.id);
            localStorage.setItem("unibite_role", data.user.role);
            localStorage.setItem("unibite_points", data.user.points);
            window.location.href = "window.html";
        } else {
            alert(data.message || "Λάθος στοιχεία");
            document.getElementById("password").value = "";
        }
    } catch(error) {
        alert("Σφάλμα σύνδεσης με τον server");
        console.error(error);
    }
});