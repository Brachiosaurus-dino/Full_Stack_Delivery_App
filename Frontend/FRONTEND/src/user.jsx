export default function UserPage() {
    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Only logged-in users can see this.</p>

            <button onClick={() => { 
                localStorage.clear(); 
                window.location.href = "/login"; 
            }}>
                Logout
            </button>
        </div>
    );
}