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
import DashboardWS from "./DashboardWS";
const DashboardPage: FC = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [allManifest, setAllManifest] = useState<any>(allManifestData);
  const [filteredData, setFilteredData] = useState<{ series: number[] }>({ series: [] });
  const [option_allManifest, setOption_allManifest] = useState<any>(options_allManifest);
  const [customDate, setCustomDate] = useState<any>([]);
  const [openCustomCalendar, setOpenCustomCalendar] = useState(false);
  
  const carouselRef = useRef(null);
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
  
  // // Reusable function to filter and count data
  // const filterAndCountData = (startDate: Date, endDate: Date) => {
  //   const filtered = allManifest.filter((item: any) => {
  //     const itemDate = new Date(item.date);
  //     return itemDate >= startDate && itemDate <= endDate;
  //   });

  //   const statusCount = filtered.reduce((acc: any, curr: any) => {
  //     acc[curr.status] = (acc[curr.status] || 0) + 1;
  //     return acc;
  //   }, {});

  //   const result = legendLabel_allManifest.map((label) => ({
  //     label,
  //     value: statusCount[label] || 0,
  //   }));

  //   const series = result.map((item: any) => item.value);
  //   setFilteredData({ series });
  // };

  // // Effect to handle custom date filtering
  // useEffect(() => {
  //   if (customDate.length === 2) {
  //     filterAndCountData(customDate[0], customDate[1]);
  //     setOpenCustomCalendar(false);
  //   }
  // }, [customDate]);

  // // Handle button clicks for predefined date filters
  // const handleButtonClick = (index: number, label: string) => {
  //   setSelectedButton(index);
  //   if (label !== "Custom") {
  //     setOpenCustomCalendar(false);
  //   }
  

  //   const currentDate = new Date();
  //   const filterBy = labelToMonthsMap[label] || 0;

  //   const startDate = new Date();
  //   if (filterBy > 0) {
  //     startDate.setMonth(currentDate.getMonth() - filterBy);
  //   }

  //   filterAndCountData(label === "All" ? new Date(0) : startDate, currentDate);

  //   // Scroll selected button into view
  //   const container: any = carouselRef.current;
  //   const selectedButton = container.children[index];
  //   selectedButton.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  // };

  // // Scroll buttons logic
  // const scrollButtons = (direction: number) => {
  //   const container: any = carouselRef.current;
  //   const scrollAmount = 150; // Adjust this value as needed
  //   container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  //   checkButtons();
  // };

  // // Check if prev/next buttons should be disabled
  // const checkButtons = () => {
  //   const container: any = carouselRef.current;
  //   setIsPrevDisabled(container.scrollLeft < 1);
  //   setIsNextDisabled(container.scrollLeft + container.offsetWidth + 1 >= container.scrollWidth);
  // };

  // // Initialize to "All" filter on mount
  // useEffect(() => {
  //   handleButtonClick(0, "All");
  // }, []);


  return (
    <>
    Hello world
      {/* <ToolbarWrapper />
      <Content>
      <div className="row g-5">
          <div className="col-lg-4">
            <div className="card card-custom card-stretch shadow mb-5">
              <div className="card-body">
             <div id="kt_carousel_1_carousel" className="carousel carousel-custom slide" data-bs-ride={false} data-bs-interval={false}>
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h3 className="fs-1">All Manifest</h3>
                    <div className="d-flex align-items-center">
                        <p className="mb-0 cursor-pointer btn btn-sm btn-icon btn-active-light-primary " onClick={() => scrollButtons(-1)} hidden={isPrevDisabled}>
                          <KTIcon iconName="left" className="fs-1" />
                        </p>

                      <div
                        className="carousel-controls-container"
                        style={{ overflowX: "hidden", scrollBehavior: "smooth", width: "150px", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}
                        ref={carouselRef}
                        onScroll={checkButtons}
                      >
                        {buttonLabels.map((label, index) => (
                          <button
                            key={index}
                            className={`btn btn-sm ${selectedButton === index ? "btn-primary" : "btn-light"}`}
                            data-bs-target="#kt_carousel_1_carousel"
                            data-bs-slide-to={index}
                            onClick={() => handleButtonClick(index, label)}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <div style={{width:"10px"}}>
                        <p className="mb-0 cursor-pointer btn btn-sm btn-icon btn-active-light-primary " onClick={() => scrollButtons(1)} hidden={isNextDisabled}>
                          <KTIcon iconName="right" className="fs-3" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-inner pt-8">
                    {buttonLabels.map((label, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{ transition: "transform 0.3s ease-in-out" }}>
                        {label == "Custom" && !openCustomCalendar &&(
                          <div className="position-relative mt-3" style={{ zIndex: 1 }}>
                            <button 
                              type="button" 
                              className="btn btn-sm btn-icon btn-active-light-primary position-absolute " 
                              style={{ right: '40px', cursor: 'pointer' }}
                              title="Change date"
                              onClick={() => {
                                setCustomDate([]); 
                                setOpenCustomCalendar(true); 
                              }}
                              >
                              <KTIcon iconName="calendar" className="fs-1" />
                            </button>
                          </div>
                                                 
                        )}
                        <p>{openCustomCalendar}</p>
                        {(!openCustomCalendar || customDate.length >= 2) && (
                        <Chart options={option_allManifest} series={filteredData.series} type="donut" />
                        )}
                        {openCustomCalendar && customDate.length < 2 &&(
                        <div id="custom" className="d-flex justify-content-center alight-item-center">
                            <Flatpickr
                              options={{ inline: true,   mode: "range" }}
                              onChange={(selectedDates) => {setCustomDate(selectedDates)}}
                              value={customDate}
                              className="d-none"
                              placeholder="Pick date"
                              data-date-format="Y/m/d"
                            />
                              </div>
                        )}
                        </div>
                    ))}
                  </div>
                </div>
                <CarouselChart 
                 id={1}
                 title={"All Manifest"}
                 type={"donut"}
                 buttonLabels={buttonLabels}
                 data={allManifestData}
                 labelToMonthsMap={labelToMonthsMap}
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
                <h3 className="card-title fs-1">All Catalog </h3>
                <span className="card-title text-end fs-1">
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
                 buttonLabels={buttonLabels}
                 data={createWasteData}
                 labelToMonthsMap={labelToMonthsMap}
                 options={options_createWaste}
                 legendLabel_allManifest={legendLabel_allManifest}/>
                <Chart
                  options={options_createWaste}
                  series={options_createWaste.series}
                  type="area"
                /> 
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-custom card-stretch shadow mb-5">
              <div className="card-header">
                <h3 className="card-title justify-content-between fs-1">
                  All Organizations
                </h3>
                <span className="card-title text-end fs-1">
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
                <h3 className="card-title fs-1">All Most Waste Code</h3>
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
                <h3 className="card-title fs-1">Catalog Status</h3>
                <span className="card-title text-end fs-1">
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
                <h3 className="card-title fs-1">All Users </h3>
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
                <h3 className="card-title fs-1">Manifest Approval </h3>
                <span className="card-title text-end fs-1">
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
                <h3 className="card-title fs-1">Catalog Approvement</h3>
                <span className="card-title text-end fs-1">
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
                <h3 className="card-title fs-1">Extension Approval</h3>
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
                      <p>
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
                      <p>
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
      </Content> */}
    </>
  );
};

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      {/* <DashboardWS /> */}
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
