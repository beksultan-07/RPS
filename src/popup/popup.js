import './popup.css'

function result(){
    let popup = document.querySelector('.popup_wrap')
    popup.style.display = 'none'
}

function Popup(props) {
    let color = 'red'
    let congratulation = 'Вы проиграли'
    let winner = ''
    if (parseInt(props.win) > parseInt(props.lose)){
        color = 'green'
        congratulation = 'Поздравляем Вы победили'
        winner = '>'
    }else{
        winner = '<'
    }

    return (
        <div className='popup_wrap'>
            <div className="popup">
                <h3 style={{color}}>{congratulation}</h3>
                <h3>Со счетом <span>{props.win} {winner} {props.lose}</span></h3>
                <button onClick={result} onClick={props.Result} className="btn" style={{background: color}}>Ok</button>
            </div>
        </div>
    )
}

export default Popup
