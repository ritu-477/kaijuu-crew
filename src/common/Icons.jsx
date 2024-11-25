const Icon = (props) => {
    const IconList = {
    
    };

    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    )
}
export default Icon