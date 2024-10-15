import { FC, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";
import Chart from "react-apexcharts";
import Flatpickr from "react-flatpickr";
import {
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
const DashboardWS: FC = () => {

    const buttonLabels = ['All', 'Month', '3 Month', '6 Month', '12 Month', 'Custom'];
    
    const labelToMonthsMap: { [key: string]: number } = {
      "Month": 1,
      "3 Month": 3,
      "6 Month": 6,
      "12 Month": 12,
    };
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
        <div className="row g-5">
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
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">All Catalog </h3>
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
                   type={"area"}
                   data={createWasteData}
                   options={options_createWaste}
                   legendLabel_allManifest={legendLabel_allManifest}/>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4">
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
                    options={options_allOrganizations}
                    series={options_allOrganizations.series}
                    type="bar"
                  />
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header">
                  <h3 className="card-title fs-1 text-primary">All Most Waste Code</h3>
                </div>
                <div className="card-body">
                  <Chart
                    options={options_allMostWasteCode}
                    series={options_allMostWasteCode.series}
                    type="bar"
                  />
                </div>
              </div>
            </div>
  
            <div className="col-lg-4">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">Catalog Status</h3>
                  <span className="card-title text-end fs-1 text-primary">
                    {allCatalogStatusData.reduce(
                      (total, item) => total + item.value,
                      0
                    )}
                  </span>
                </div>
                <div className="card-body p-2 ">
                  <Chart
                    options={options_catalogStatus}
                    series={options_catalogStatus.series}
                    type="donut"
                  />
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
                </div>
              </div>
            </div>
  
            <div className="col-lg-2">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">All Users </h3>
                </div>
                <div className="card-body p-2 ">
                  <div className="table-responsive">
                    <table className="table table-hover table-rounded border gs-5">
                      <tbody className="align-middle">
                      {updatedUsers.map((user, index) => (
                        <tr key={index}>
                          <td>
                            <Link to={user.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <KTIcon iconName="profile-circle" className="fs-3x text-primary" />
                            </Link>
                            </td>
                          <td>
                            <Link to={user.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                              {user.name}
                            </Link>
                          </td>
                          <td>{user.count}</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-end p-4">
                  <Link to="/"> View more {">>>"} </Link>
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
  
            <div className="col-lg-4">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">Catalog Approvement</h3>
                  <span className="card-title text-end fs-1 text-primary">
                      {catalogApprovementData.length}
                  </span>
                </div>
                <div className="card-body p-2 ">
                  <div className="table-responsive" style={{ height: "40vh" }}>
                    <table className="table table-hover table-row-bordered table-row-gray-300 gs-7">
                      <thead>
                        <tr className="fw-bold text-gray-800 border-bottom-2 border-gray-200">
                          <th className="min-w-150px">Organization</th>
                          <th>No</th>
                          <th>Type</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                      {catalogApprovementData.map((item:any, index:number) => (
                      <tr key={index}>
                        <td>{item.organization}</td>
                        <td>{item.EMCGID}</td>
                        <td>{item.type}</td>
                        <td><span className="badge badge-secondary">{item.quota}</span></td>
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
  
            <div className="col-lg-2">
              <div className="card card-custom card-stretch shadow mb-5">
                <div className="card-header justify-content-between">
                  <h3 className="card-title fs-1 text-primary">Extension Approval</h3>
                </div>
                <div className="card-body p-5 ">
                  <div className="time-extension">
                    <div className="d-flex align-items-center mb-3">
                      <KTIcon iconName="time" className="fs-2x" />
                      <span className="ms-2">Time Extension</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="text-center">
                        <span>Request</span>
                        <p className="fs-3 mt-3">0</p>
                      </div>
                      <div className="text-center">
                        <span>Action</span>
                        <p className="text-hover-primary">
                          <Link to="/">
                            <KTIcon iconName="add-files" className="fs-1 mt-3" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
  
                  <div className="quota-extension">
                    <div className="d-flex align-items-center mb-3">
                      <KTIcon iconName="sort" className="fs-2x" />
                      <span className="ms-2">Quota Extension</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="text-center">
                        <span>Request</span>
                        <p className="fs-3 mt-3">0</p>
                      </div>
                      <div className="text-center">
                        <span>Action</span>
                        <p className="text-hover-primary">
                          <Link to="/">
                            <KTIcon iconName="add-files" className="fs-1 mt-3" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </>
    );
  };

  export default DashboardWS;