export const setGOAL = goal => ({
    type: 'SET_GOAL',
    payload: goal,
});

export const createGOAL = goal => ({
    type: 'CREATE_GOAL',
    payload: goal,
});

export const archiveGOAL = goal => ({
    type: 'ARCHIVE_GOAL',
    payload: goal,
});

export const deleteGOAL = goal => ({
    type: 'DELETE_GOAL',
    payload: goal,
});