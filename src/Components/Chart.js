import { Line } from 'react-chartjs-2';
import moment from "moment";
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Filler
)

const MyChart = ({data, category}) =>{
    
    return(

        <>
        <div className="h-full w-full justify-items-center p-0">
            <Line
            datasetIdKey='id'
            data={{
                labels: data.map((singleData) => (moment(singleData[0]).format("MMM Do YY"))),
                datasets: [
                {
                    label: `${category}(usd)`,
                    data: data.map((singleData) => (singleData[1])),
                    backgroundColor: 'rgba(0, 204, 204, 0.3)',
                    pointBorderColor: 'aqua',
                    fill: true,
                    pointRadius: 0
                }
                ]
            }}
            options={{ 
                maintainAspectRatio: false,
                plugins: {
                    legend: true
                    
                },
                layout: {
                    padding: 40
                }
            }}
            />
            
        </div>
        </>
    );
}

export default MyChart;