import './header.css'

function Headers(props) {
    return (
        <header className='header'>
            <div className='choice'>
                <h2 className='dash'>Камень</h2>
                <h2 className='dash'>Ножницы</h2>
                <h2>Бумага</h2>
            </div>

            <div className="states">
                <h2 className="win">Победы: <span>{props.win}</span></h2>
                <h2 className="lose">Поражений: <span>{props.lose}</span></h2>
            </div>

        </header>
    )
}
//rfce
export default Headers
