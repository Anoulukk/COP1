import axios from "axios";
const response = await axios.get("http://localhost:5173/metronic8/react/demo1/testAPI.json");

export const allUsersData = response.data.data7;
export const manifestApprovalData = response.data.data8;
export const catalogApprovementData = response.data.data9;

//------------------------allManifestData------------------------
export const allManifestData = response.data.data;

export const legendLabel_allManifest = ['Draft', 'Requested', 'Ready', 'Processing', 'Certified', 'Completed', 'Rejected', 'Expired'];

export const options_allManifest = {
  series: [],
  labels: legendLabel_allManifest,
  dataLabels: { enabled: false },
  plotOptions: {
    pie: {
      donut: { size: "60%"  },
    },
  },
  chart: {
    toolbar: {
      show: true,
      tools: { download: true },
      export: {
        csv: {
          filename: 'exported-data',
          columnDelimiter: ',',
          headerCategory: 'Category',
          headerValue: 'Value',
        },
        svg: { filename: 'exported-chart' },
        png: { filename: 'exported-chart' },
      },
    },
  },

  legend: {
    show: true,
    position: "bottom" as const,
    horizontalAlign: "left" as const,
    fontSize: '14px',
    itemMargin: { vertical: 10 },
    formatter: (label: string, opts: any) => {
      const seriesValue = opts.w.globals.series[opts.seriesIndex] || "0";
      return seriesValue !== undefined
        ? `<div>${label}<br>${seriesValue}</div>`
        : `<div>${label}<br>0</div>`;
    },
    markers: {
      customHTML: () => '<div style="width: 3px; height: 35px; background-color: currentColor;"></div>',
    },
    customLegendItems: ['Draft', 'Requested', 'Ready', 'Processing', 'Certified', 'Completed', 'Rejected', 'Expired'],
  },

}; 

export const theMostCreateWasteData:[{x:string, y:number}] = response.data.data10;

//------------------------createWasteData------------------------
  export const createWasteData:[{name:string, data:[{x:string, y:number}]}] = response.data.data3;

  export const options_createWaste: ApexCharts.ApexOptions = {
    series: createWasteData,
    chart: {
      type: "area",
      stacked: false,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip:{
    shared: true,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {},
    xaxis: {
      type: "datetime",
    },
  };

  //------------------------allCatalogData------------------------
  export const allCatalogData:[{label:string, value:number}] = response.data.data2;
  
  export const options_allCatalog: ApexCharts.ApexOptions = {
    labels: allCatalogData.map(item => item.label),
    series: allCatalogData.map(item => item.value),
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "lighten",
          value: 0.15,
        },
      },
    
    },
    legend: {

      position: "bottom" as const,
      customLegendItems: ["Hazardous", "Non-Hazardous"],
    },
    dataLabels: { enabled: false },
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: {
            filename: "exported-data",
            columnDelimiter: ",",
            headerCategory: "Category",
            headerValue: "Value",
          },
          svg: {
            filename: "exported-chart",
          },
          png: {
            filename: "exported-chart",
          },
        },
      },
    },
  };

  //------------------------allOrganizationsData------------------------
  export const allOrganizationsData:[{x:string, y:number}] = response.data.data4;

  export const options_allOrganizations: ApexCharts.ApexOptions = {
     series: [{
          name: "Amount",
          data: allOrganizationsData
        }],
          chart: {
          type: 'bar',
          height: 380
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
  };
//------------------------allMostWasteCode------------------------
  export const allMostWasteCodeData:[{label:string, value:number}] = response.data.data5;

  export const options_allMostWasteCode: ApexCharts.ApexOptions = {
      series: [{
        name: "Amount",
        data: allMostWasteCodeData.map(item => item.value),
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function(val) {
            return val
          }
        },
      },
      tooltip: { x: { show: false } }
  };

//------------------------allCatalogStatusData------------------------
  export const allCatalogStatusData:[{label:string, value:number}] = response.data.data6;

  export const options_catalogStatus: ApexCharts.ApexOptions = {
    labels: allCatalogStatusData.map(item => item.label),
    series: allCatalogStatusData.map(item => item.value),
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels:{show:true, total:{show:true},},
        },
      },
    },
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: true, 
        },
        export: {
          csv: {
            filename: 'exported-data',
            columnDelimiter: ',',
            headerCategory: 'Category',
            headerValue: 'Value',
          },
          svg: {
            filename: 'exported-chart',
          },
          png: {
            filename: 'exported-chart',
          }
        },
      },
    },
    legend: {
      position: "bottom" as const,
      show: true,
      fontSize: '15px',
      itemMargin: {
        vertical: 10,
      },
      formatter: function (label: any, opts: any) {
        const seriesValue = opts.w.globals.series[opts.seriesIndex];
        if (typeof seriesValue === 'undefined') {
          return '<div>' + label + "<br>" + 'No Data' + '</div>';
        }
        return '<div>' + label + "<br>" + seriesValue + '</div>';
      },
      markers: {
        customHTML: function () {
          return '<div style="width: 3px; height: 35px; background-color: currentColor;"></div>';
        },
      },
      customLegendItems: ["Draft", "Active", "Suspended", "Expired", "Rejected"],
    },
    dataLabels: { enabled: false },
};

