import { Link } from 'react-router-dom';
import { Content } from '../../../../_metronic/layout/components/content'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
  ChartsWidget1,
  ListsWidget5,
  ListsWidget2,
} from '../../../../_metronic/partials/widgets'
import Chart from "react-apexcharts";

const allManifest = [
  { label: "Draft", value: 30 },
  { label: "Requested", value: 40 },
  { label: "Ready", value: 50 },
  { label: "Processing", value: 60 },
  { label: "Certified", value: 70 },
  { label: "Completed", value: 80 },
  { label: "Rejected", value: 90 },
  { label: "Expired", value: 100 }
];
export function Overview() {
    const state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    };
  
  return (
    <Content>
      <div className='row g-5 g-xxl-8'>
        <div className='col-xl-6'>
        <div className="card card-custom card-stretch-50 shadow mb-5">
              <div className="card-header">
                <h3 className="card-title fs-1">All Manifest</h3>
              </div>
              <div className="card-body">
                <div className="donut">
                  <Chart
                    options={state}
                    series={state.series}
                    type="donut"
                    width={500}
                  />
                </div>
              </div>
              <div className="card-footer text-end p-4">
                <Link to="/"> View more {">>>"} </Link>
              </div>
            </div>

          <FeedsWidget2 className='mb-5 mb-xxl-8' />

          <FeedsWidget3 className='mb-5 mb-xxl-8' />

          <FeedsWidget4 className='mb-5 mb-xxl-8' />

          <FeedsWidget5 className='mb-5 mb-xxl-8' />

          <FeedsWidget6 className='mb-5 mb-xxl-8' />
        </div>

        <div className='col-xl-6'>
          <ChartsWidget1 className='mb-5 mb-xxl-8' />

          <ListsWidget5 className='mb-5 mb-xxl-8' />

          <ListsWidget2 className='mb-5 mb-xxl-8' />
        </div>
      </div>
    </Content>
  )
}
