import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import s from "./Schedule.module.css"
const Schedule = () => {
  const ctx = document.createElement('canvas').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(3, 184, 253, 0.46)'); // начальный цвет
  gradient.addColorStop(1, 'rgba(3, 184, 253, 0)'); // конечный цвет
  const gradientFill = gradient;
    const data = {
        labels: ['January', 'February', 'March', 'April','May','June','July','August'],
        datasets: [
          {
            data: [0, 6000, 4000, 8000,10000,8000,9000,11000],
            fill: false,
            borderColor: '#1565C0',
            borderWidth: 2,
            borderCapStyle:'round',
            fill:true,
            backgroundColor:gradientFill,
            tension: 0.6,
            pointBackgroundColor:"#1565C0"
            
            
          },
        ],
      };
    
      const options = {
        plugins:{
          tooltip:{
          backgroundColor:'#2C629E',
          padding:15,
          caretSize:10,

          callbacks: {
            title: function() {
                return 0; // Должна возвращать необходимое значение
            },
            
        }
        }
        },
        maintainAspectRatio: false,
        animations: {
          tension: {
            duration: 2000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                  if (value >= 1000) {
                    return value / 1000 + 'k';
                  }
                  return value;
                },
                maxTicksLimit: 4
              },
          },
        },
      };
      
    return ( 
        <div className={s.blok}>
            <Line data={data} options={options} />
        </div>
     );
}
 
export default Schedule;