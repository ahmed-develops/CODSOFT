// import { useEffect, useState } from "react";

// const TaskPage = (userObject) => {
//     const [taskList, setTaskList] = useState([])

//     useEffect(() => {
//         const getAllTasks = async () => {
//             const res = await fetch(`http://localhost:3000/tasks/${userObject.userEmail}`, {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json'
//                 }
//             });
//             const data = await res.json();

//             setTaskList(data);

//             console.log(data);
//         }

//         getAllTasks();
//     }, [])

//     return (
//         <>
//             <div>
//                 {taskList.map((task,i) => {
//                     return (
//                         <div
//                             className="view_all_tasks_card"
//                             // key={task.tasks}
//                         // style={task.id!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
//                         >

//                             <p>{task.tasks}</p>

//                         </div>
                        
//                     )
//                 })}
//             </div>


//         </>
//     );
// };

// export default TaskPage;

import { useEffect, useState } from "react";

const TaskPage = (userObject) => {
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const getAllTasks = async () => {
            const res = await fetch(`http://localhost:3000/tasks/${userObject.userEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await res.json();

            setTaskList(data[0].tasks);
        }

        getAllTasks();
    }, [])

    return (
        <>
            <div>
                {taskList.map((task,i) => {
                    return (
                        <div key={i}>
                            <p><b>{task}</b></p>
                
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default TaskPage;
