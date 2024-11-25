const CommonPara = ({ text, className }) => {
    return (
        <p className={`font-normal md:text-custom2xl font-oswald leading-8 text-base text-white ${className}`}>{text}</p>
    )
}

export default CommonPara