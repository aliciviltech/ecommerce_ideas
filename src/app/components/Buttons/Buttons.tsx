import './Buttons.css'

const Button = ({text, bg}:{text:string, bg:string}) => {
  return (
    <div className={`Button`} style={{backgroundColor: `var(${bg})`}}>
        {text}
    </div>
  )
}

export default Button