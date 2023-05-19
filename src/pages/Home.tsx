import Welcome from "../components/Welcome.tsx";
import Album from "../components/Album.tsx";

const Home = () => {
    return (
        <>
            <main>
                <Welcome/>
                <Album/>
            </main>
        </>
    )
}

export default Home;