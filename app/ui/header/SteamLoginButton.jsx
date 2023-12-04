export default function SteamLoginButton() {
    const handleLogin = () => {
        window.location.href = "/auth/steam";
    };

    return (
        <button className="steam-login-button" onClick={handleLogin}>
            Login with Steam
        </button>
    )
}