import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import {
  completeTask,
  deleteTask,
  selectTask,
  handleModalOpen,
} from '../taskSlice';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { RootState } from '../../../app/store';
import TaskForm from '../taskForm/TaskForm';
import styles from './TaskItem.module.scss';

const TaskItem = (task) => {

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <EventNoteIcon />
                <div className={styles.title_next}>{task.title}</div>
            </div>
            <div className={styles.right_item}>
                <Checkbox
                    checked={task.completed}
                    onClick={()=> console.log('checked', task.id)}
                    inputProps={{ 'area-label': 'primary checkbox' }}
                />
                <button onClick={()=> console.log('edit', task.id)}>
                    <EditIcon />
                </button>
                <button onClick={()=> console.log('delete', task.id)} className={styles.delete_button}>
                    <EditIcon />
                </button>
            </div>
        </div>
    )
}

export default TaskItem
