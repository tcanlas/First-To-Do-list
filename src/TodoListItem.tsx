import React from 'react';

interface TodoListItemProps {
	todo: Todo;
}
const test = () => {
	console.log('test');
};
export function TodoListItem({ todo }: { todo: TodoListItemProps }) {
	return (
		<li>
			<label>
				<input type="checkbox" checked={todo.complete} />
				{todo.text}
			</label>
		</li>
	);
}
