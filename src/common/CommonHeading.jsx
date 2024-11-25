const CommonHeading = ({ text, className }) => {
    return (
        <h2 className={`font-normal font-godzilla md:text-6xl sm:text-5xl text-4xl lg:text-custom-8xl text-white lg:leading-custom-7xl ${className}`}>{text}</h2>
    )
}

export default CommonHeading