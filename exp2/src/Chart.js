import React from 'react'

import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: undefined,
    };

    this.chartConfig = {
      type: 'pie3d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {/* see data tab */
        "chart": {
          "caption": "Age profile of website visitors",
          "subcaption": "Last Year",
          "startingangle": "120",
          "showlabels": "0",
          "showlegend": "1",
          "enablemultislicing": "0",
          "slicingdistance": "15",
          "showpercentvalues": "1",
          "showpercentintooltip": "0",
          "plottooltext": "Age group : $label Total visit : $datavalue",
          "theme": "candy"
        },
        "data": [
          {
            "label": "Teenage",
            "value": "1250400"
          },
          {
            "label": "Adult",
            "value": "1463300"
          },
          {
            "label": "Mid-age",
            "value": "1050700"
          },
          {
            "label": "Senior",
            "value": "491000"
          }
        ]
      },
      events: {
        dataplotRollOver: (eventObj, dataObj) => {
          this.setState({
            actualValue: dataObj.dataValue,
          });
        },
      },
    };
  }

  render() {
    return (
      <div>
      <ReactFC {...this.chartConfig} />
      <p>Actual Value: {this.state.actualValue}</p>
      </div>
    );
  }
}

export default Chart
