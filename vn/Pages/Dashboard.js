import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import React from 'react';

const Dashboard = () => {
   const data=[
     {loanId:12345,purposeOFloan:'Housing Loan',status:'In progess'},
     {loanId:1234,purposeOFloan:'Housing Loan',status:'In progess'},
     {loanId:123,purposeOFloan:'Housing Loan',status:'In progess'},
     {loanId:12,purposeOFloan:'Housing Loan',status:'In progess'},
    
   ]
   const columns=[
     {
       headerName:"Loan ID",field:'loanId',
     },
     {
       headerName:'Purpose of Loan',field:'purposeOFloan'
     },
     {
      headerName:'Status',field:'status'
     },
     {
       headerName:'Options',field:'loanId'
     },
   ]
   const defaultColDef={
         sortable:true,editable:true,filter:true
   }
  return (
    <div className="ag-theme-alpine" style={{height: 250, width: 600}}>
      <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef}/>
    </div>
  )
}

export default Dashboard