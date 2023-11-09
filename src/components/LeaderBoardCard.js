

const LeaderBoardCard = (props) => {

    const {name, score, usn } = props;
    return (
        <div className="p-2">
            <div className={`bg-slate-200 p-4 m-1 rounded-xl font-semibold text-white text-xl text-justify bg-opacity-20 border-2 border-blue-500 shadow-md shadow-blue-400 hover:bg-opacity-30`}>
                <div className="flex flex-wrap justify-between">
                    <div className="text-2xl text-left">{name}</div>
                    <div className="text-2xl text-center">{usn}</div>
                    <div className="text-2xl text-right">{score}</div>
                </div>
            </div>
    </div>
    )
}

export default LeaderBoardCard;



{/* <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a> */}
