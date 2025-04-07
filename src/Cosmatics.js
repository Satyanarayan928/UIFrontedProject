function Header() {
    return <h1>Welcome to My Site</h1>;
}

function Footer() {
    return <p>© 2024 My Company</p>;
}

function Cosmatics() {
    return (
        <div>
            <Header />
            <p>This is the main cosmatics.</p>
            <Footer />
        </div>
    );
}

export default Cosmatics;