

const LeaderBoardCard = (props) => {

    const {name, score, usn } = props;
    return (
        <div>
            <p>{usn}</p>
            <p>{name}</p>
            <p>{score}</p>
        </div>
    )
}

export default LeaderBoardCard;