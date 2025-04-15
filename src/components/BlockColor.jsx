 function BlockColor(props) {
    return (
    <div style={{
        backgroundColor: props.color,
        padding: '20px',
        margin: '10px',
    }}>
        Этот блок - {props.color}

    </div>
    );
 }

 export default BlockColor;