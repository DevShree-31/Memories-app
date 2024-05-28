import { makeStyles } from '@mui/styles';
import { spacing } from '@mui/system';
export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      smMargin: {
        margin: spacing(1),
      },
      actionDiv: {
        textAlign: 'center',
      },
      grid: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      },
}));