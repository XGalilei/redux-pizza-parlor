
function PizzaList () {
    return (
        <div>
            <p>Step 1: Select Your Pizza</p>
            <div className="pizza-card">
                <img className="pizza-image"/>
                <div className="pizza-description"></div>
            </div>
            <button>Add</button>
        </div>
    );
}

export default PizzaList;