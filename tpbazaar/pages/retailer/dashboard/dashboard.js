import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import{ PureComponent } from 'react';
import Sidebar from '../sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
function Dashboard() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
  return (

<Sidebar>
<sidebar>
        <div>

        <div className='custom1-bg'>
        <div >
          <div className='carts marginforcard mt-5 mr-2' style={{ display: "flex" }}>
            <div >
              <Card style={{ width: '15rem', backgroundColor: "#F29F67" }}>
                <Card.Body>
                  <Card.Title>Total Retailer&nbsp;:&nbsp;&nbsp;300
                  {/* <Card.Text className='mx-5'>
                    300
                  </Card.Text> */}
                  </Card.Title>
             <div style={{ display: "flex" }}>                  
               <h6>Active:200</h6>&nbsp;&nbsp;&nbsp;
                  <h6>Inactive:100</h6>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '15rem', marginLeft: "15px", backgroundColor: "#F29F67" }}>
                <Card.Body>
                  <Card.Title>Total Shops</Card.Title>
                  <Card.Text>
                    110
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '15rem', marginLeft: "15px", backgroundColor: "#F29F67" }}>
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text>
                    800
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '15rem', marginLeft: "15px", backgroundColor: "#F29F67" }}>
                <Card.Body>
                  <Card.Title>Total Revenue</Card.Title>
                  <Card.Text>
                    275800
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='flex'>
            <div className='col-5'>
       <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
            </div>
          {/* <div className='p-3 d-flex justify-content-around'>
            <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
              <div className='text-center pb-1'>
                <h4>Employee</h4>
              </div>
              <hr />
              <div className=''>
                <h5>Total: </h5>
              </div>
            </div>
            <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
              <div className='text-center pb-1'>
                <h4>Shops</h4>
              </div>
              <hr />
              <div className=''>
                <h5>Total:</h5>
              </div>
            </div>
            <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
              <div className='text-center pb-1'>
                <h4>Users</h4>
              </div>
              <hr />
              <div className=''>
                <h5>Total:</h5>
              </div>
            </div>
            <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
              <div className='text-center pb-1'>
                <h4>Revenue </h4>
              </div>
              <hr />
              <div className=''>
                <h5>Total:</h5>
              </div>
            </div>
          </div> */}

          {/* <div> */}
          {/* <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart> */}
          {/* </div> */}
          <div className='col-6 mt-3'>
            <table class="table">
              <thead class="table-info">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>

        </div>
     </sidebar>
</Sidebar>

  )
}

export default Dashboard
