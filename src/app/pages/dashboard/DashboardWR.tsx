import { FC, useEffect, useRef, useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";
import Chart from "react-apexcharts";
import {
  theMostCreateWasteData,
  manifestApprovalData,
  catalogApprovementData,
  allUsersData,
  allManifestData,
  createWasteData,
  allCatalogData,
  allOrganizationsData,
  allCatalogStatusData,
  options_createWaste,
  options_allCatalog,
  options_allOrganizations,
  options_allMostWasteCode,
  options_catalogStatus,
  options_allManifest,
  legendLabel_allManifest,
} from "./DashboardData";
import CarouselChart  from "./CarouselChart";
import { Link } from "react-router-dom";
import { date } from "yup";
const DashboardWS: FC = () => {


    const roleCount = allUsersData.reduce((acc: { [key: string]: any; }, { role }: any) => {
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {});
    
    const allUsers = [
      { name: 'Waste Generator', count: 0, path: '/#' },
      { name: 'Waste Transporter', count: 0, path: '/#' },
      { name: 'Waste Disposal', count: 0, path: '/#' },
      { name: 'Waste Regulator', count: 0, path: '/#' },
    ];
    
    // Update the count for each user based on the roleCount
    const updatedUsers = allUsers.map(user => ({
      ...user,
      count: roleCount[user.name] || 0,  // Set count to 0 if the role is not found
    }));
    
    console.log(updatedUsers);
  
    return (
      <>
        <ToolbarWrapper />
        <Content>
        <div className="row g-2">
            <div className="col-lg-4">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-body">
                  <CarouselChart 
                   id={1}
                   title={"All Manifest"}
                   type={"donut"}
                   data={allManifestData}
                   options={options_allManifest}
                   legendLabel_allManifest={legendLabel_allManifest}/>
                </div>
  
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between ">
                  <h3 className="card-title fs-2 text-primary">All Catalog in System </h3>
                  <span className="card-title text-end fs-1 text-primary">
                    {allCatalogData.reduce(
                      (total, item) => total + item.value,
                      0
                    )}
                  </span>
                </div>
                <div className="card-body">
                  <Chart
                    options={options_allCatalog}
                    series={options_allCatalog.series}
                    type="pie"
                  />
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
                </div>
              </div>
            </div>
  
            <div className="col-lg-5">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-body pb-0">
                <CarouselChart 
                   id={2}
                   title={"Create Waste"}
                   type={"line"}
                   data={createWasteData}
                   options={{
                    series: [{
                      name: 'Non hazardous',
                      data: [20000, 50000, 150000, 250000, 300000] // KG data points for Non hazardous
                    }, {
                      name: 'Hazardous',
                      data: [10000, 40000, 80000, 150000, 200000] // KG data points for Hazardous
                    }],
                    chart: {
                      type: 'line',
                      height: 350,
                      toolbar: {
                        show: false,
                      }
                    },
                    tooltip: {
                      shared: true,
                    },
                    xaxis: {
                      type: 'category',
                      labels: {
                        formatter: function(val:string) {
                          return val
                        }
                      },
                    },
                    yaxis: {
                      title: {
                        text: 'KG'
                      }
                    },
                    stroke: {
                      curve: 'straight',
                      width: 2 
                    },
                    markers: {
                      size: 5, 
                      strokeWidth: 2, // Outline thickness of markers
                      colors: "#fff",
                      strokeColors: ['#008FFB', '#00E396'],
                      fillOpacity: 1,
                      hover: {
                        size: 7
                      }
                    },
                    legend: {
                      position: 'top'
                    }
                  }}
                   legendLabel_allManifest={legendLabel_allManifest}/>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header">
                  <h3 className="card-title justify-content-between fs-1 text-primary">
                    All Organizations
                  </h3>
                  <span className="card-title text-end fs-1 text-primary">
                    {allOrganizationsData.reduce(
                      (total, item) => total + item.y,
                      0
                    )}
                  </span>
                </div>
                <div className="card-body">
                  <Chart
                    options={{
                      series: [{
                           name: "Amount",
                           data: allOrganizationsData
                         }],
                         plotOptions: {
                          bar: {
                            columnWidth: '80%', // Set the width of the bars as a percentage of the total available width
                            dataLabels: {
                              position: 'top', // top, center, bottom
                            },
                          }
                        },
                        dataLabels: {
                          enabled: true,
                          formatter: function (val) {
                            return val + " Organizations";
                          },
                          offsetY: -20,
                          style: {
                            fontSize: '10px',
                            colors: ["#555555"],
                            fontWeight: 'thin',
                          }
                        },
                           chart: {
                           type: 'bar',
                         },  
                          title: {
                            text: 'Unit',
                          },
                         xaxis: {
                           type: 'category',
                           labels: {
                             formatter: function(val) {
                               return val
                             }
                           },
                         },
                         tooltip: {
                           x: {
                             formatter: function(val) {
                               return val.toString();
                             }  
                           }
                         },
                   }}
                    series={options_allOrganizations.series}
                    type="bar"
                  />
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-body">
                <CarouselChart 
                   id={3}
                   title={"The Most Created Waste"}
                   type={"bar"}
                   data={[{data:[{
                    name: '15 01 01',
                    data: 44,
                    date: '2024-07-01'
                  }, {
                    name: '02 03 04',
                    data: [53, 32],
                    date: '2024-08-01'
                  }, {
                    name: '05 06 07',
                    data: [12, 17, 11],
                    date: '2024-09-01'
                  }]}]}
                   options={{
                    series: [],
                    chart: {
                      type: 'bar',
                      height: 350,
                      stacked: true,
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                        dataLabels: {
                          total: {
                            enabled: true,
                            offsetX: 0,
                            style: {
                              fontSize: '13px',
                              fontWeight: 900
                            }
                          }
                        }
                      },
                    },
                    stroke: {
                      width: 1,
                      colors: ['#fff']
                    },
                    title: {
                      text: 'Waste Code',
                    },
                    xaxis: {
                      type: 'category',
                      labels: {
                        formatter: function(val:any) {
                          return val
                        }
                      },
                    },
                    yaxis: {
                      title: {
                        text: undefined
                      },
                    },
                    tooltip: {
                      y: {
                        formatter: function (val:any) {
                          return val + "K"
                        }
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    legend: {
                      position: 'top',
                      horizontalAlign: 'left',
                      offsetX: 40
                    }
                }}
                   legendLabel_allManifest={legendLabel_allManifest}/>
              
                </div>
              </div>
            </div>
  
           
         
  
            <div className="col-lg-4">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">Manifest Approval </h3>
                  <span className="card-title text-end fs-1 text-primary">
                    {manifestApprovalData.length}
                  </span>
                </div>
                <div className="card-body p-2 ">
                  <div className="table-responsive">
                  <table className="table table-hover table-row-bordered table-row-gray-300 gs-7">
                  <thead>
                    <tr className="fw-bold text-gray-800 border-bottom-2 border-gray-200">
                      <th className="min-w-150px">Organization</th>
                      <th>No</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manifestApprovalData.map((item:any, index:number) => (
                      <tr key={index}>
                        <td>{item.organization}</td>
                        <td>{item.manifestNo}</td>
                        <td>{item.type}</td>
                        <td><span className="badge badge-secondary">{item.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
  
                  </div>
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/">View more {">>>"}</Link>
                </div>
              </div>
            </div>
  
          
  
            
          </div>
        </Content>
      </>
    );
  };

  export default DashboardWS;