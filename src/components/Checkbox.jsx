export default function Checkbox(props) {
    const {children, id, ...rest} = props;
    return (
        <>
        <input id={`chk-${id}`}/>
        <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}