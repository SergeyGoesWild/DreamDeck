import "./Errorpage.css";

function Errorpage(){
    return (
        <>
            <div className="error-container">
                <h1>Ooops...</h1>
                <h1 className="error-title">This page doesn't exist!</h1>
                <div className="error-image-container">
                    <img className="error-img" src="./src/assets/ErrorImageWhite.png" alt="image non existant page" />
                </div>
            </div>
        </>
    )
};

export default Errorpage;