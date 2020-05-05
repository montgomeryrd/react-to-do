export const setArchive = archive => ({
    type: 'SET_ARCHIVE',
    payload: archive,
});

export const deleteArchive = archive => ({
    type: 'DELETE_ARCHIVE',
    payload: archive,
});