
import './App.css';
import React from "react";

import { Paper } from '@material-ui/core';


import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import StorageIcon from '@material-ui/icons/Storage';

import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

import CodeIcon from '@material-ui/icons/Code';

import Button from '@material-ui/core/Button';

// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";


function TabPanel(props) {
  const { index} = props;

  const handleFileSelectedChange=(fileList) => {
    console.log("handleFileSelectedChange ", fileList);
  }

  const clickInput = () => {
    console.log("handleFileSelectedChange clicked ");
    document.getElementById('file-input').click();
  }

  return (
    <div
      id={`full-width-tabpanel-${index}`}
      class="section-column"
    >
      
      <div class="section-row">

      <TextField
          id="standard-full-width"
          label="Database Connection URL"
          style={{  marginTop: "1%", width: "90%" }}
          placeholder="postgresql://localhost:5432/mydb"
          // helperText="Full width!"
          fullWidth
          required={true}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><StorageIcon/></InputAdornment>,
          }}
        />
        <Tooltip title="Currently Postgres Database is only supported" style={{ marginTop: "2.8%" }}>
        <InfoIcon/>
      </Tooltip>
      </div>  

      <div class="section-row">

      <TextField
          id="standard-full-width"
          label="SQL Query"
          style={{  marginTop: "1%", width: "90%", marginRight: "2%" }}
          placeholder="SELECT * FROM myTable"
          // helperText="Full width!"
          fullWidth
          required={true}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><CodeIcon/></InputAdornment>,
          }}
        />
      </div> 
      <div class="section-row">
      
        <span class="text_size">File Selected  </span>
        <Button variant="contained" color="primary" onclick={clickInput}>
        Select Folder<input type="file" id="file-input" onChange={ (event) => handleFileSelectedChange(event.target.files) } nwdirectory style={{"visibility":"hidden", width:"0px"}}></input> 
      </Button>
        
        {/* <input directory="" webkitdirectory="" type="file" /> */}
      </div>
    </div>
  );
}

function TabPanel2(props) {
  const {  index } = props;

  return (
    <div
      id={`full-width-tabpanel-${index}`}
      
    >
      
        
          <p>Item 2</p>
        
      
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#e00",
    "& > span": {
      maxWidth: 70,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#555",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),

    "&:focus": {
      opacity: 0.8
    }
  }
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    marginLeft: "10px",
    height: "inherit",
    overflow: "hidden"
    
  },

  tabs: {
    backgroundColor: "#eee",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Paper elevation={3} className="App_paper" >
        <div className={classes.root} >
          <div className={classes.tabs} >
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
              variant="fullWidth"
            >
              <StyledTab icon={<CloudDownloadRoundedIcon />} label="Download Table" />
              <StyledTab icon={<CloudUploadRoundedIcon />} label="Upload Table" />
            </StyledTabs>
            
          </div>

          <Paper elevation={3}
        className="tabel_panel_paper" 
        style={{
          flexGrow: 1,
          height: "80%",
          width: "inherit",
          marginTop: "10px",
          borderRadius: "10px",
          marginRight: "10px",
          marginLeft: "10px"
          
        }}>
          {value===0? <TabPanel
              value={value}
              index={0}
              dir={theme.direction}
              
            />: <TabPanel2
            value={value}
            index={1}
            dir={theme.direction}
            
          />}

          </Paper>
        </div>

      </Paper>
    </div>
  );
}

export default App;
