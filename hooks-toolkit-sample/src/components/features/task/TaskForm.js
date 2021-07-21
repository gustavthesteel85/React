import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import styles from './TaskForm.module.scss'

const TaskForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const handleCreate = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
                <TextField
                    id="outlined-basic"
                    label="New Task"
                    variant="outlined"
                    className={styles.text_field}
                    {...register("taskTitle")}
                />
            </form>
        </div>
    )
}

export default TaskForm
