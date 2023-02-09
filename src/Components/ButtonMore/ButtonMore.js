import './ButtonMore.css';

function ButtonMore({ onClick }) {
    return (
        <div className="button_container">
            <div className="button_more" onClick={onClick}>
                More Products
            </div>
        </div>
    );
}

export default ButtonMore;
