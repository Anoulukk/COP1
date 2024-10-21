import { FC, useEffect, useRef, useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import Chart from "react-apexcharts";
import Flatpickr from "react-flatpickr";

interface CarouselChartProps {
  id: number;
  title: string;
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  data: any[];
  options: any;
  legendLabel_allManifest: string[];
}

const CarouselChart: React.FC<CarouselChartProps> = ({
  id,
  title,
  type,
  data,
  options,
  legendLabel_allManifest,
}) => { 
  const [selectedButton, setSelectedButton] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [allData, setAllData] = useState<any>(data);
  const [filteredData, setFilteredData] = useState<{ series: any }>({
    series: [],
  });

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
  // Reusable function to filter and count data
  const filterAndCountData = (startDate: Date, endDate: Date) => {
    let filtered: any = {};
    if (type == "area" || type == "line" || type == "bar") {
      const filteredData3 = allData.map((entry: any) => {
        const filteredData = entry.data.filter((item: any) => {
          const itemDate = new Date(item.date); 
          return itemDate >= startDate && itemDate <= endDate;
        });
        return {
          ...entry, 
          data: filteredData,
        };
      });
      
      setFilteredData({ series: filteredData3 });
      return;
    } else {
      filtered = allData.filter((item: any) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }

    const statusCount = filtered.reduce((acc: any, curr: any) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {});

    const result = legendLabel_allManifest.map((label) => ({
      label,
      value: statusCount[label] || 0,
    }));

    const series = result.map((item: any) => item.value);
    console.log(series);

    setFilteredData({ series });
  };

  // Effect to handle custom date filtering
  useEffect(() => {
    if (customDate.length === 2) {
      filterAndCountData(customDate[0], customDate[1]);
      setOpenCustomCalendar(false);
    }
  }, [customDate]);

  // Handle button clicks for predefined date filters
  const handleButtonClick = (index: number, label: string) => {
    setSelectedButton(index);
    if (label !== "Custom") {
      setOpenCustomCalendar(false);
    }
    console.log(label);

    const currentDate = new Date();
    const filterBy = labelToMonthsMap[label] || 0;

    const startDate = new Date();
    if (filterBy > 0) {
      startDate.setMonth(currentDate.getMonth() - filterBy);
    }

    filterAndCountData(label === "All" ? new Date(0) : startDate, currentDate);

    // Scroll selected button into view
    const container: any = carouselRef.current;
    const selectedButton = container.children[index];
    
    selectedButton.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  // Scroll buttons logic
  const scrollButtons = (direction: number) => {
    const container: any = carouselRef.current;
    const scrollAmount = 150; // Adjust this value as needed
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    checkButtons();
  };

  // Check if prev/next buttons should be disabled
  const checkButtons = () => {
    const container: any = carouselRef.current;
    setIsPrevDisabled(container.scrollLeft < 1);
    setIsNextDisabled(
      container.scrollLeft + container.offsetWidth + 1 >= container.scrollWidth
    );
  };

  // Initialize to "All" filter on mount
  useEffect(() => {
    handleButtonClick(0, "All");
  }, []);

  return (
    <div
      id={`kt_carousel_${id}_carousel`}
      className="carousel carousel-custom slide"
      data-bs-ride={false}
      data-bs-interval={false}
    >
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <h3 className="fs-2 text-primary">{title}</h3>
        <div className="d-flex align-items-center">
          {/* Previous Button */}
          <p
            className="mb-0 cursor-pointer btn btn-sm btn-icon btn-active-light-primary "
            onClick={() => scrollButtons(-1)}
            hidden={isPrevDisabled}
          >
            <KTIcon iconName="left" className="fs-1" />
          </p>

          {/* Button Container */}
          <div
            className="carousel-controls-container"
            style={{
              overflowX: "hidden",
              scrollBehavior: "smooth",
              width: "150px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
            }}
            ref={carouselRef}
            onScroll={checkButtons}
          >
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                className={`btn btn-sm ${
                  selectedButton === index ? "btn-primary" : "btn-light"
                }`}
                data-bs-target={`#kt_carousel_${id}_carousel`}
                data-bs-slide-to={index}
                onClick={() => handleButtonClick(index, label)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div style={{ width: "10px" }}>
            <p
              className="mb-0 cursor-pointer btn btn-sm btn-icon btn-active-light-primary "
              onClick={() => scrollButtons(1)}
              hidden={isNextDisabled}
            >
              <KTIcon iconName="right" className="fs-3" />
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner pt-8">
        {buttonLabels.map((label, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            {label == "Custom" && !openCustomCalendar && type != "area" && type != "line"&& (
              <div className="position-absolute mt-1 text-hover-primary" style={{ zIndex: 1 , right: "40px", cursor: "pointer"}} title="Change date"   onClick={() => {
                setCustomDate([]); // Set custom date first
                setOpenCustomCalendar(true); // Then set the selected custom date
              }}>
                
                  <KTIcon iconName="calendar" className="fs-1" />
              </div>
            )}
            {(!openCustomCalendar || customDate.length >= 2) && (
              <Chart
                options={options}
                series={filteredData.series}
                type={type}
              />
            )}
            {label == "Custom" && !openCustomCalendar && (type == "area" || type == "line") && (
               <div
               className="d-flex justify-content-end  mt-n5"
              
             >
               <span className="d-flex text-hover-primary align-items-center" style={{ zIndex: 1 ,cursor: "pointer" }}
               onClick={() => {
                setCustomDate([]); // Set custom date first
                setOpenCustomCalendar(true); // Then set the selected custom date
              }}>
                 <KTIcon iconName="calendar" className="fs-1 me-2" />
               <span className="">Change date</span>
               </span>
             </div>
             
            )} 
            {openCustomCalendar && customDate.length < 2 && (
              <div
                id="custom"
                className="d-flex justify-content-center alight-item-center"
              >
                <Flatpickr
                  options={{ inline: true, mode: "range" }}
                  onChange={(selectedDates) => {
                    setCustomDate(selectedDates);
                  }}
                  value={customDate}
                  className="small-flatpickr d-none"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselChart;
