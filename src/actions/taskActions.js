export const setTask = task => ({
    type: 'SET_TASK',
    payload: task,
});

export const createTask = task => ({
    type: 'CREATE_TASK',
    payload: task,
});

export const archiveTask = task => ({
    type: 'ARCHIVE_TASK',
    payload: task,
});

export const deleteTask = task => ({
    type: 'DELETE_TASK',
    payload: task,
});