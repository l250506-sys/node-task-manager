import TasksContainer from "./TasksContainer"
import InputBox from "./InputBox"
import TasksBox from "./TasksBox"

export default function MainSection(){
    return(
        <main>
            <TasksContainer>
                <InputBox></InputBox>
                <TasksBox></TasksBox>
            </TasksContainer>
        </main>
    )
}