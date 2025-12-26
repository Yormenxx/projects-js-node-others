

const Grid = ({ board, puzzle, selected, setSelected }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Sudoku Pro</h2>
            <table style={styles.table}>
                <tbody>
                    {board.map((row, rIdx) => (
                        <tr key={rIdx}>
                            {row.map((cell, cIdx) => {
                                const isPrefilled = puzzle[rIdx][cIdx] !== null;
                                
                           
                                const isSelected = selected && selected[0] === rIdx && selected[1] === cIdx;
                                const isSameRow = selected && rIdx === selected[0];
                                const isSameCol = selected && cIdx === selected[1];
                                const isSameBox = selected && 
                                    Math.floor(rIdx / 3) === Math.floor(selected[0] / 3) && 
                                    Math.floor(cIdx / 3) === Math.floor(selected[1] / 3);

                                let backgroundColor = isPrefilled ? '#f0f0f0' : '#fff';
                                if (isSelected) backgroundColor = '#ffeb3b'; 
                                else if (isSameRow || isSameCol || isSameBox) backgroundColor = '#e2eefb'; 

                                return (
                                    <td 
                                        key={cIdx} 
                                        style={{
                                            ...styles.td,
                                            backgroundColor: backgroundColor,
                                            borderRight: (cIdx + 1) % 3 === 0 && cIdx !== 8 ? '3px solid #444' : '1px solid #ccc',
                                            borderBottom: (rIdx + 1) % 3 === 0 && rIdx !== 8 ? '3px solid #444' : '1px solid #ccc',
                                        }}
                                    >
                                        <input
                                            type="text"
                                            maxLength={1}
                                            value={cell === null ? "" : cell}
                                            readOnly={isPrefilled}
                                            style={{
                                                ...styles.input,
                                                color: isPrefilled ? '#000' : '#007bff', 
                                                fontWeight: isPrefilled ? 'bold' : 'normal',
                                                backgroundColor: 'transparent', 
                                            }}
                                            onFocus={() => setSelected([rIdx, cIdx])}
                                            onClick={() => setSelected([rIdx, cIdx])}
                                            onChange={(e) => {
                                              
                                            }}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        color: '#333',
        marginBottom: '20px',
    },
    table: {
        borderCollapse: 'collapse',
        border: '3px solid #444', 
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    },
    td: {
        padding: 0,
        margin: 0,
    },
    input: {
        width: '45px',
        height: '45px',
        textAlign: 'center',
        fontSize: '20px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
 
};

export default Grid;