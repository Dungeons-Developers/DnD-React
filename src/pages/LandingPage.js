import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
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

function LandingPage(props) {

  const [openTab, setOpenTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setOpenTab(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="40vh">
        <Logo />
      </Box>
      <Box display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="60vh">
        <Paper square>
          <Tabs
            variant="fullWidth"
            value={openTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Login" value={0} />
            <Tab label="SignUp" value={1} />
          </Tabs>
          <TabPanel value={openTab} index={0}>
            <LoginForm />
          </TabPanel>
          <TabPanel value={openTab} index={1}>
            <SignupForm />
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
}

export default LandingPage;
