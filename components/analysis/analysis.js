import React, {Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Analysis(props) {
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
      <Fragment>
         <Container className="marginAndPadding">
            <Row>
               <h2 className='heading-three text-center'>Technology Used</h2>
               <Col lg={6} md={6} sm={12}>
                  <ResponsiveContainer width="100%" height="100%" className="bar-chart">
                     <BarChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                           top: 5,
                           right: 30,
                           left: 20,
                           bottom: 5,
                        }}
                        barSize={20}
                     >
                        <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="pv" fill="#e4001b" background={{ fill: '#eee' }} />
                     </BarChart>
                  </ResponsiveContainer>
               </Col>

               <Col lg={6} md={6} sm={12}>
                  <p className="p-one">
                     Bar charts, sometimes referred as horizontal column charts, use horizontal rectangular bars with lengths proportional to the values that they represent. Given example shows React Bar Chart along with source code that you can try running locally
                     Bar charts, sometimes referred as horizontal column charts, use horizontal rectangular bars with lengths proportional to the values that they represent. Given example shows React Bar Chart along with source code that you can try running locally
                  </p>
               </Col>
            </Row>
         </Container>
      </Fragment>
   );
}

