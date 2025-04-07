function Header() {
    return <h1>Welcome to My Site</h1>;
}

function Footer() {
    return <p>© 2024 My Company</p>;
}

function Shoe() {
    return (
        <div>
            <Header />
            <p>This is the main content.</p>
            <Footer />
        </div>
    );
}

export default Shoe;