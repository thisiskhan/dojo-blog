import './App.css';

function App() {
    const title = "Welome to new blog";
    const like = 50;
    const person = {
        name: "Raza Khan",
        age: 30
    };
    return (
        <div className="App" >
            <div className="content">
                <h1>{title} </h1>
                <p>liked by {like} dojo-blog users</p>
                <p>Bloger name is {person.name}</p>
                <p>{Math.random() * 10}</p>

            </div>
        </div>
    );
}

export default App;