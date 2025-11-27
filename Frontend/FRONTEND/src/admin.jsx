export default function Admin() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Only admins can see this.</p>
            <button onClick={() => { 
                localStorage.clear(); 
                window.location.href = "/login"; 
            }}>
                Logout
            </button>
        </div>
    );
}
