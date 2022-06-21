import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function HomeRightCardSub() {
  return <div>
    <div style={{ fontSize: 14, fontWeight: 'bold' }}>The top career experts</div>
    <div><span style={{ fontSize: 12 }}><CircleOutlinedIcon />Top news</span><FiberManualRecordIcon style={{ fontSize: 10, color: '#919191', padding: '0 5px' }} /><span style={{ fontSize: 12 }}>41905 readers</span></div>
  </div>;
};

export default HomeRightCardSub;