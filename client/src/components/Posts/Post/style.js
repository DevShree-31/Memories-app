import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({

    media: {
        height: 125,
        maxWidth: 600,
    },
    border: {
        border: 'solid',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        width: 250,
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '10px',
        right: '5px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        left: '0px',
    },
}));