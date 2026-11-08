// This component will have a todo as a prop
// Then we will map into several TodoCards

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({todosList}: TodosContainerProps)
{
    return ( 
    <div>
        {todosList.length > 0 || "TodoList is empty"} 
        {todosList.map((todo) => (
        <TodoCard key= {todo.id} {...todo} />
        ))} 
    </div>
    );
}