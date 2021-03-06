import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReviewFormContainer from '../containers/ReviewFormContainer';
import ReviewListContainer from '../containers/ReviewListContainer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MyTabs = withStyles({
  root: {
    backgroundColor: '#fab005',
  },
  indicator: {
    backgroundColor: '#ffec99',
  },
})(Tabs);


function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <MyTabs value={value} onChange={handleChange} centered variant="fullWidth">
          <Tab label="리뷰 조회" {...a11yProps(0)} />
          <Tab label="리뷰 등록" {...a11yProps(1)} />
          <Tab label="내 정보 보기" {...a11yProps(2)} />
        </MyTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ReviewListContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReviewFormContainer />
      </TabPanel>
      <TabPanel value={value} index={2}>내 정보 보기</TabPanel>
    </div>
  );
}

export default NavBar;